const express=require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const cors=require('cors');
const morgan=require('morgan');
const PORT=process.env.PORT ||3000;
const bodyParser=require('body-parser');
const {MONGOURI} = require('./config/keys.js');
const mongoose  = require('mongoose');
const path = require('path');

const server=http.createServer(app);
const io = socketio(server)

app.use(morgan('combined'))
app.use(cors())
const { addUser, removeUser, getUser, getUsersInRoom, getRooms } = require('./routes/chatusers');

app.use(bodyParser.urlencoded({
    extended: false
}));

// Json Body Middleware
app.use(bodyParser.json());

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

app.get('/', (req, res) => {
     return res.send("<h1>Server is on and running</h1>");
 });

require('./models/User')
require('./models/Post')

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

io.on('connect', (socket) => {
    socket.emit('rooms', { rooms : getRooms()});
    socket.on('join', ({ name, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room });
  
      if(error) return callback(error);
  
      socket.join(user.room);
  
      socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
  
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
  
      callback();
    });
    
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);
      if(user){
      io.to(user.room).emit('message', { user: user.name, text: message });
      }else{
          callback({error:"join again"});
      }
  
      callback();
    });
  
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
  
      if(user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
      }
    })
  });


// if(process.env.NODE_ENV=="production"){
//     app.use(express.static('client/build'))
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

server.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
