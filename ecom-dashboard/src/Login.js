import React from "react";
import { useEffect,useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history("/add")
        }
    },[])

    const login = async () =>{
        let item ={email,password};
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info',JSON.stringify(result));
        
        history("/add");
    }
    return(
        <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>Login</h1>
                <input type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/><br/>
                <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/><br/>
                <button onClick={login} className="btn btn-primary">Sign Up</button>
            </div>
        </>
    )
}

export default Login;