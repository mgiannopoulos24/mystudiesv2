import React,{useState} from "react"
import {auth} from "../../Firebase/firebase"
import { createUserWithEmailAndPassword} from "firebase/auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Signup.css"

const Signup_Form=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [showSignupNotification, setShowSignupNotification] = useState(false);
    const Sign_Up=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
            setShowSignupNotification(true);
        }).catch((error)=> {
            console.log(error);
        })
    };
    const handleSignupNotificationClose = () => {
        // Close the signup notification and reset the state
        setShowSignupNotification(false);
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
            {showSignupNotification && (
                <div className="signup-notification">
                    <p style={{ color: "white" }}>Ο λογαριασμός δημιουργήθηκε με επιτυχία!</p>
                    <button onClick={handleSignupNotificationClose}>Κλείσιμο</button>
                </div>
            )}
        
        </>
    )
}

export default Signup_Form;