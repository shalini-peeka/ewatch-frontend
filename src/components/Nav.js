import { color } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const userStatus=localStorage.getItem("status");
  const userRole=localStorage.getItem("role");
  // const username=localStorage.getItem("username");
  // const transactionStatus=localStorage.getItem("transaction");
  useEffect(()=>{
    // window.alert(userStatus)
    // alert(userRole)
  },[])
  const navStyle = {
    color: "black",
  };

  return (
    <div>
    <nav>
     
       <h3 style={{color:"white"}}>E-Watch</h3>
      {
          !userStatus&&(
          <ul className="nav-links">
             <Link style={{navStyle,color:'white'}} to="/">
            <li> Home</li>
            </Link>
            <Link style={{navStyle,color:'white'}} to="register">
          <li>Register</li>
        </Link>
            <Link style={{navStyle,color:'white'}} to="login">
            <li>Login</li>
            </Link>
          </ul>
          )
      }
      
     {
      userRole==="CUSMTOMER"?
       (
      <ul className="nav-links">
        {/* <Link style={{navStyle,color:'white'}} to="/">
          <li>Home</li>
        </Link> */}
          <Link style={{navStyle,color:'white'}} to="/viewChannels">
            <li> Channels</li>
            </Link>
            <Link style={{navStyle,color:'white'}} to="/viewPlans">
            <li>Plans</li>
            </Link>
            <Link style={{navStyle,color:'white'}} to="/viewSubscription">
          <li>View Subscriptions</li>
        </Link>
        <Link style={{navStyle,color:'white'}} className="nav-links" to="logout">
            <li>logout</li>
          </Link>
      </ul>
      ) :null
    }
      
    {
          userRole==="PROMOTER"? 
               (
          <ul className="nav-links">
            <Link style={{navStyle,color:'white'}} className="nav-links" to="/Promoters">
            <li>Promoters</li>
          </Link>
          <Link style={{navStyle,color:'white'}} className="nav-links" to="/ViewChannelsPromoter">
            <li>Channels</li>
          </Link>
          <Link style={{navStyle,color:'white'}} className="nav-links" to="/AddChannel">
            <li>AddChannel</li>
          </Link>
          <Link style={{navStyle,color:'white'}} className="nav-links" to="/viewplansPromoter">
            <li>Plans</li>
          </Link>
  
          <Link style={{navStyle,color:'white'}} className="nav-links" to="/AddPlans">
            <li>AddPlan</li>
          </Link>
          <Link style={{navStyle,color:'white'}} className="nav-links" to="logout">
            <li>logout</li>
          </Link>
          
        </ul>
          ):null
         }
    
    {/* { 
       transactionStatus&&(
       <ul className="nav-links">
       <Link style={{navStyle,color:'white'}} className="nav-links" to="/transaction">
         <li>Transaction</li>
       </Link>
       <Link style={{navStyle,color:'white'}} className="nav-links" to="/viewtransaction">
         <li>ViewTransaction</li>
       </Link>
       <Link style={{navStyle,color:'white'}}className="nav-links" to="/deletetransaction">
         <li>DeleteTransaction</li>
       </Link>
       </ul>
       )
       } */}
    </nav>
    </div>
  );
}

export default Nav;
