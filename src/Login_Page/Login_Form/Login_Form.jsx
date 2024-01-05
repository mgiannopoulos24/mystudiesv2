import React,{useState} from "react"
import {auth} from "../../Firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';

const Login_Form=({onLoginSuccess})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const Login_In=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const userEmail = userCredential.user.email;;
            if (userEmail === 'lakisla@di.uoa.gr') {
                navigate('/MainStud');
            } else if (userEmail === 'prof1@di.uoa.gr') {
                navigate('/MainProf');
            } else if (userEmail === 'reg1@di.uoa.gr') {
                navigate('/MainReg');
            }
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
                    <button type="submit">Είσοδος</button>
                </div>
                </form>
            </div>
        
        </>
    )
}

export default Login_Form;