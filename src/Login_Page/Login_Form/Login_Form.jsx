import React,{useState} from "react"
import {auth} from "../../Firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import "./LoginForm.css"

const Login_Form=({onLoginSuccess})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

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
            setErrorMessage(null);
            onLoginSuccess();
        }).catch((error)=> {
            console.log(error);
            setErrorMessage("Λάθος κωδικός. Παρακαλούμε δοκιμάστε ξανά.");
        });
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
                        size="small"
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
                        size="small"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        sx={{ height: "15px",width:"400px"}} 
                    />
                </div>
                <br></br>
                <div className="row-forgotten" style={{ marginTop: "10px", fontSize: "12px", marginRight: "250px" }}>
                    <a href="http://www.noc.uoa.gr/diaxeirish-logariasmoy.html" target="_blank" rel="noreferrer" style={{ color: "inherit"}}>Ξεχάσατε τον κωδικό σας;</a>
                </div>
                <div className="row-submit" style={{marginTop:"30px"}}>
                    <Button variant= "contained" color="success" type="submit" sx={{textTransform:"none"}}>Είσοδος</Button>
                </div>
                </form>
            </div>
            {errorMessage && (
                <div className="error-message">
                    <p>{errorMessage}</p>
                </div>
      )}
        
        </>
    );
};

export default Login_Form;