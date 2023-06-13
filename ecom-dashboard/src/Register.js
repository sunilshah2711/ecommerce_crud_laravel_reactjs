import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

const Register = () => {
    
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history=useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history("/add")
        }
    },[])

    const signUp = async () => {
        let item ={name,email,password};
        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history("/add");
    }


    return(
        <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>User Sign Up</h1>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/><br/>
                <input type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/><br/>
                <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/><br/>
                <button onClick={signUp} className="btn btn-primary">Sign Up</button>
            </div>
        </>
    )
}

export default Register;