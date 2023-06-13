import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Register = (props) => {
    let Cmd = props.Cmd;
    const history=useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('user-info'))
        {
            history("/register")
        }
    },[])


    return(
        <>
            <Cmd/>
        </>
    )
}

export default Register;