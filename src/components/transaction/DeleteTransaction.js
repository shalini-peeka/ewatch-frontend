import React from "react";
import { useState } from "react";
import './Transaction.css';
import axios from "axios";
import Button from '@mui/material/Button';

function DeleteTransaction() {
    const[transactionId,setTransactionId]=useState(null);
    const[userData,setuserData]=useState([]);
    const[showForm,setShowForm]=useState(false);
    const deleteTransaction=((e)=>{
        setShowForm(true);
        e.preventDefault();
            axios.delete(`http://localhost:9191/transaction/cancelTransaction/${transactionId}`)
            .then(res=>{
                console.log(res)
                setuserData(res.data)
                console.log('Transaction is Deleted');
                alert('Transaction is Deleted');
            })
        .catch(err =>{  console.log(err);
        });
    })
    
  return (
    <div className="container">
        <h4>Delete Transaction</h4>
        <form onSubmit={deleteTransaction}>
            <br/>
            <input type="text" placeholder="Enter Transaction Id" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} required/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Delete</Button>
        </form>        
    </div>  
  );
}

export default DeleteTransaction;