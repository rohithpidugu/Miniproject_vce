import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import io from "socket.io-client";
import './Join.css';
import AvailableRooms from '../AvailableRooms/AvailableRooms';
import { useSelector } from 'react-redux';
let socket;

export default function Join() {
  const name = useSelector(state => state.Auth.user.name);
  const [room, setRoom] = useState('');
  const [rooms,setRooms] = useState([])
  const ENDPOINT = 'localhost:3000';

  useEffect(() => {  
    socket = io(ENDPOINT);  
    socket.on("rooms", ({ rooms }) => {
      setRooms(rooms);
    });
}, []);

const setRoomname = (event)=>{
    event.preventDefault();
    setRoom(event.target.value);
}
  return (
    <>
    <div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading">Create Room</h1>
            <div>
            <input placeholder="Room" className="joinInput mt-20" type="text" onChange={setRoomname} />
            </div>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className={'button mt-20'} type="submit">JOIN</button>
            </Link>
        </div>
    </div>
    <AvailableRooms room={rooms} name={name}/>
    </>
  );
}