import React,{useState} from "react"
import {auth} from "../../Firebase/firebase"
import { createUserWithEmailAndPassword} from "firebase/auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Signup_Form=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const Sign_Up=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
        }).catch((error)=> {
            console.log(error);
        })
    };
    
    return(
        <>
            <div className="signup-form">
                <form onSubmit={Sign_Up} style={{marginTop:"30px"}}>
                <div className="row-email">
                    <TextField
                        label="Email"
                        type="email"
                        size="small"
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
                        size="small"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        sx={{ height: "15px",width:"400px"}} 
                    />
                </div>
                <br></br>
                <div className="row-submit" style={{marginTop:"30px"}}>
                <Button variant= "contained" color="success" type="submit" sx={{textTransform:"none"}}>Εγγραφή</Button>
                </div>                    
                </form>
            </div>
        
        </>
    )
}

export default Signup_Form;