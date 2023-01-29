import React from "react";
import { useState } from "react";
import './Transaction.css';
import axios from "axios";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function ViewTransaction() {
    const[transactionId,setTransactionId]=useState(null);
    const[userData,setuserData]=useState([]);
    const[showForm,setShowForm]=useState(false);
    const viewTransaction=((e)=>{
        setShowForm(true);
        e.preventDefault();
        axios.get(`http://localhost:9191/transaction/viewTransaction/${transactionId}`)
        .then(res=>{
            console.log(res);
            setuserData(res.data)
            console.log('Transaction are shown');
            if(res==null){
                window.alert("no transactionfound")
            }
        })
        .catch(err =>{ 
            window.alert("id not found") 
            console.log(err);
        });
    })

  return (
    <div className="viewh">
        <h4>View Transaction</h4>
        <form onSubmit={viewTransaction}>
            <br/>
            <input type="text" placeholder="Enter Transaction Id" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} required /><br></br><br></br>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
        {
        showForm&&
        <table  align='center' border={1}>
            <thead>
                <tr>            
                    <th>Amount</th>
                    <th>Channel ID</th>
                    <th>Comments</th>
                    <th>Customer ID</th>
                    <th>Payment Method</th>
                    <th>Plan ID</th>
                    <th>Transaction ID</th>
                    
                </tr>
                </thead>
                <tbody>
                {
                    userData?
                    userData.map((p) => (
                        <tr key="id">
                            <td>{p.amount}</td>
                            <td>{p.channelId}</td>
                            <td>{p.comments}</td>
                            <td>{p.customerId}</td>
                            <td>{p.paidBy}</td>
                            <td>{p.planId}</td>
                            <td>{p.transactionId}</td>

                        </tr>
                    ))
                    :null
                }
            </tbody>
        </table>
        }
        <br/>
        <h6>Do You Want To Delete the Transaction? <Link to={'/deletetransaction'}>Delete</Link> here!</h6>
    </div>  
  );
}

export default ViewTransaction;