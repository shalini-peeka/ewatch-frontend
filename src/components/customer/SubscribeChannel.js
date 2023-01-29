import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
function SubscribeChannel() {
    const[userName,setUserName]=useState();
    const[channelid,setchannelId]=useState();
    const[planid,setplanId]=useState();
    const navigate=useNavigate();
    const sub=((e)=>{
        e.preventDefault();
        const ch={channelid , planid,userName};
        console.log(ch)
        axios.post(`http://localhost:9191/subscribe/subscribed?channelid=${channelid}&planid=${planid}&userName=${userName}`)
        .then((res)=>{
            console.log(res);
           // console.log(res.ch.token);
           window.alert("subscribed u can proceed to payment");
        })
       });
    const transaction=((e)=>{
        navigate('/transaction')
    })

  return (
    <div className='main'>
        <div className='container'>
        <form onSubmit={sub}>
            <label><strong>user Name</strong></label><br></br>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required/><br></br>
            <label><strong>channel Id</strong></label><br></br>
            <input type="text"  value={channelid} onChange={(e) => setchannelId(Number(e.target.value))} required/><br></br>
            <label><strong>plan Id</strong></label><br></br>
            <input type="text"  value={planid} onChange={(e) => setplanId(Number(e.target.value))} required/><br></br><br></br>
            <Button variant="contained" type="submit">submit</Button>
        </form>
        </div>
        <br></br>
        <Button variant="contained" type="submit" onClick={transaction}>Make Transaction</Button>
    </div>
  )
}

export default SubscribeChannel