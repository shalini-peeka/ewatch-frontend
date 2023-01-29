
import axios from "axios";
import { useState, useEffect } from "react";
// import {useHistory } from "react-router";
import { useHistory, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
function Login() {
     const data = { userName: "", password: "" };
     const [formValues, setFormValues] = useState(data);
     const [formErrors, setFormErrors] = useState({});
     const [isSubmit, setIsSubmit] = useState(false);
     const navigate=useNavigate();
     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value }); 
    };
    const handleSubmit = (e) => {
        e.preventDefault();
         setFormErrors(validate(formValues));
          setIsSubmit(true);
          
        axios
        .post(`http://localhost:9191/watch/validate`,formValues)
        .then((response)=>{
        console.log(response.data);
        localStorage.setItem("status","true");
        localStorage.setItem("role",response.data.role);
         alert("login successfull")
         if(response.data.role=="PROMOTER"){
            navigate('/Promoters')
         }
         else{
            navigate('/viewChannels')
         }
         })
       .catch((err)=>{
        console.log(e);
        window.alert("Oops something went wrong")
    })
        }; 
        useEffect(() => {
             console.log(formErrors);
             if (Object.keys(formErrors).length === 0 && isSubmit) {
                console.log(formErrors);
         }}, 
         [formErrors]);
         const validate = (values) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.userName) {
                 errors.userName = "UserName is required";
                }
               if (!values.password) {
                 errors.password = "Password is Required";
                } else if (values.password.length < 4){
                 errors.password = "Password must be greater than 4 characters";
                } else if (values.password.length > 10){
                 errors.password = "Password must not be greater than 10 characters";
                    }return errors;
                };
        
                   return (
                  <div className="background">
                    <div className="container">
                    <form onSubmit={handleSubmit}>
                       <h2 style={{color:"darkblue"}}>Login</h2><br/>
                       <div className="ui divider"></div>
                       <div className="ui form">
                       <div className="field">
                       <label><strong>UserName</strong></label><br/>
                       <input type="text" name="userName"  value={formValues.userName} onChange={handleChange} required/>
                       </div>
                       <p>{formErrors.userName}</p>
                            <div className="field">
                           <label htmlFor="password"><strong>Password</strong></label><br/>
                           <input type="password" name="password"  value={formValues.password} onChange={handleChange} required/>
                            </div>
                           <p>{formErrors.password}</p>
                            <Button type="submit" variant="contained"className="fluid ui button blue">Login</Button>
                            </div>
                           </form>
                           </div>
                           </div>
                        );}
                    export default Login;
