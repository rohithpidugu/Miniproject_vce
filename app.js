const express=require('express');
const app = express();
const cors=require('cors');
const morgan=require('morgan');
const PORT=process.env.PORT ||5000;
const bodyParser=require('body-parser');
const {MONGOURI} = require('./config/keys.js');
const mongoose  = require('mongoose');
const path = require('path');


app.use(morgan('combined'))
app.use(cors())

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
     return res.send("<h1>Hello World</h1>");
 });

require('./models/User')
require('./models/Post')

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

// if(process.env.NODE_ENV=="production"){
//     app.use(express.static('client/build'))
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
