import { Link } from "@material-ui/core";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Login from "./Login";
import './SignUp.css';

const Register=(props)=>
{
    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")
    const [country, setCountry]=useState("")
    const [email, setEmail]=useState("")
    const history = useHistory();
    async function signUp()
     
    {
        
        let item={username,email,password}
        console.warn(item)


    let result= await fetch("http://localhost:3333/api/users/signup",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result =await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("add")
    }
    return (
        <div class="form-content-right">
            <form className="form">
            <h1>CORONA</h1>
            <h2>New here?</h2>
                <span className="form-input-login">
                 Join us today!it takes only few steps 
                </span>
                <div className="form-inputs">
                    <label htmlFor="username"
                     className="form-label">
                        UserName
                    </label>
            <input
            id="usename"
             type="text" 
            value={username}
            className="form-input"
             onChange={(e)=> setUserName(e.target.value)}
               placeholder="Name"
               />
               </div>
            
            <div className="form-inputs">
                    <label htmlFor="username"
                     className="form-label">
                        Email
                    </label>
            <input
            id="usename"
             type="email" 
            value={email}
            className="form-input"
             onChange={(e)=> setEmail(e.target.value)}
               placeholder="Email"
               />
               </div>
            
            <div className="form-inputs">
                    <label htmlFor="username"
                     className="form-label">
                        Country
                    </label>
            <input
            id="usename"
             type="text" 
            value={country}
            className="form-input"
             onChange={(e)=> setCountry(e.target.value)}
               placeholder="Country"
               />
               </div>
            
            <div className="form-inputs">
                    <label htmlFor="username"
                     className="form-label">
                        Password
                    </label>
            <input
            id="usename"
             type="password" 
            value={password}
            className="form-input"
             onChange={(e)=> setPassword(e.target.value)}
               placeholder="password"
               />
               </div>
               <button  onClick={signUp} className="form-input-btn"
                type="submit">
                    Sign up
                </button>
                <span className="form-input-login">
                 Already have an accout? Login <Link
                 to={`/Login?redirect=${Login}`}>Login</Link>
                </span>
                  </form>
        </div>
    )
}

export default Register;