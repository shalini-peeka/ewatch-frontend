
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function SignUp() {
     const data = { userName: "", password: "",role:0,mobileNumber:"" };
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
          axios.post(`http://localhost:9191/watch/register`,formValues)
          .then((response)=>{
            console.log(response.data);
            localStorage.setItem("role",response.data.role);
            localStorage.setItem("status","true");
            alert("Registration is successful.. you can login ")
            // localStorage.setItem("status","true");
            // localStorage.setItem("role",response.data.role);
            // navigate('/')
          })
          .catch((err)=>{
            console.log(e);
            alert(err.message)
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
            // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.userName) {
                 errors.userName = "UserName is required..!";
                }
                if (!values.password) {
                 errors.password = "Password is required..!";
                } else if (values.password.length < 4) {
                 errors.password = "Password must be greater than 4 characters";
                 } else if (values.password.length > 10) {
                 errors.password = "Password must not be greater than 10 characters";
                    }
                    if (!values.mobileNumber) {
                        errors.mobileNumber = "MobileNumber is required..!";
                       } else if (values.mobileNumber.length < 10) {
                        errors.password = "Check the number you typed..! ";
                        } else if (values.mobileNumber.length > 10) {
                        errors.password = "Check the number you typed..!";
                           }
                       return errors;};
                       return (
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                               <h2 style={{color:"darkblue"}}>Register</h2>
                               <div className="ui divider"></div>
                               <div className="ui form">
                               <div className="field">
                               <label><strong>UserName</strong></label><br/>
                               <input type="text" name="userName" value={formValues.userName} onChange={handleChange} />
                               </div>
                                 <p>{formErrors.userName}</p>
                                    <div className="field">
                                   <label htmlFor="password"><strong>Password</strong></label><br></br>
                                   <input type="password" name="password" value={formValues.password}  onChange={handleChange} />
                                    </div>
                                   <p>{formErrors.password}</p>
                                   <div className="field">
                                      <label htmlFor="role"><strong>Role</strong></label><br/>
                                        <select name="role" id="role" onChange={handleChange}>
                                        <option value="select">Select</option>
                                        <option value="1">Customer</option>
                                        <option value="0">Promoter</option>
                                        </select></div>
                                       <p>{formErrors.role}</p>
                                       <div className="field">
                                   <label htmlFor="mobileNumber"><strong>MobileNumber</strong></label><br></br>
                                   <input type="tel" name="mobileNumber" value={formValues.mobileNumber} onChange={handleChange} />
                                    </div>
                                   <p>{formErrors.mobileNumber}</p>
                                     {/* <button className="fluid ui button blue">SignUp</button>  */}
                                     <Button variant="contained" type="submit">SignUp</Button>
                                    </div>
                                   </form>
                                   <h5>Already Registered ?<Link to={'/Login'}>Login</Link></h5>
                                   </div>
                                );}
   
          export default SignUp;