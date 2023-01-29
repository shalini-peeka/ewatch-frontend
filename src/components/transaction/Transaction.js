import React,{ useState , useEffect} from "react";
import './Transaction.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Transaction()  {
  const[amount,SetAmount]=useState();
  const[channelId,SetChannelId]=useState();
  const[comments,SetComments]=useState("");
  const[customerId,SetCustomerId]=useState();
  const[planId,SetPlanId]=useState();
  const[paidBy,SetPaidBy]=useState();
  const initialValues = {amount,channelId,comments,customerId,planId,paidBy} ;

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(initialValues);
    axios.post(`http://localhost:9191/transaction/addPayment?amount=${amount}&channelId=${channelId}&comments=${comments}&customerId=${customerId}&paidBy=${paidBy}&planId=${planId}`)
    .then((response) =>{
      console.log(response);
      const t=response.data.transactionId;
      alert("Transaction done Successfully..! and u transaction id is"+t)
    })
    .catch((err) =>{
      console.log(e);
      alert(err.message)
    })
    };

  return (
    <div className="container">
      <form>
      <h4 className="hcss">Transaction</h4>
      <div >
      <label><strong>Customer Name</strong></label>
      <br/>
        <input
          type="text"
          name="customerId"
          autoFocus
          value={customerId}
          onChange={e=>SetCustomerId(e.target.value)} 
          required
          />
          <br/>
          <label><strong>Channel ID</strong></label>
      <br/>
        <input
          type="number"
          name="channelId"
          autoFocus
          value={channelId}
          onChange={e=>SetChannelId(e.target.value)} 
          required
          />
        <br/>
        <label><strong>Plan ID</strong></label>
        <br/>
        <input
          type="number"
          name="planId"
          autoFocus
          value={planId}
          onChange={e=>SetPlanId(e.target.value)} 
          />
          <br/>
      <label><strong>Amount</strong></label>
      <br/>
        <input
          type="number"
          name="amount"
          autoFocus
          value={amount}
          onChange={e=>SetAmount(e.target.value)} 
          required
          />
          <br/> <label><strong>Payment Method</strong></label>
        <br/>
          <select 
            type="text"
            autoFocus
            value={paidBy} 
            onChange={e=>SetPaidBy(e.target.value)} >
                <option value={"CARD"}>CARD</option>
                <option value={"UPI"}>UPI </option>
            </select>
          <br/>
      <label><strong>Comments</strong></label>
      <br/>
        <input
          type="Text"
          name="comments"
          autoFocus
          value={comments}
          onChange={e=>SetComments(e.target.value)} 
          required
          />
          <br/>
          <br/>
          <Button type="submit" variant="contained" onClick={handleSubmit}>Submit</Button>    
          <br/>
          <br></br>
      <h6 className="h4css">Do You Want To View the Transaction? <Link to={'/viewtransaction'}>View</Link> here!</h6>
      </div>
      </form>
    </div>
  )
}

export default Transaction;