import React,{useState} from "react"
import {auth} from "../../Firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Login_Form=({onLoginSuccess})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const Login_In=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
            onLoginSuccess();
        }).catch((error)=> {
            console.log(error);
        })
        onLoginSuccess();
    };
    
    return(
        <>
            <div className="login-form">
                <form onSubmit={Login_In} style={{marginTop:"15px"}}>
                <div className="row-email">
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        sx={{ height: "15px",width:"400px"}} 
                    />
                </div>
                <br></br>
                <div className="row-password">
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        sx={{ height: "15px",width:"400px"}} 
                    />
                </div>
                <br></br>
                <div className="row-submit" style={{marginTop:"30px"}}>
                    <Link to="/MainStud"><button type="submit">Είσοδος</button></Link>
                </div>
                </form>
            </div>
        
        </>
    )
}

export default Login_Form;