import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { doc, getDoc } from 'firebase/firestore'
const Login =({db}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
      // Handles the login functionality of the user
    async function handleLogin (e){
        e.preventDefault()
        
        // We create a doc that 'points' at collection 'users' with primary key user's input email 
        const ref = doc(db, "users", email); 
        // Now "Bring me, from the collection 'users' the document with name/value 'email'"
        const res = await getDoc(ref);

        //If the user with email = "email" and password = "passowrd" exists in the db...
        if (res.exists() && res.data().email === email && res.data().password === password) {
            // Get the role and email...
            const user_role = res.data().role
            const user_email = res.data().email

            // Store the email and role as keys in your browser local storage
            localStorage.setItem('role', user_role)
            localStorage.setItem('email', user_email)

            // Go to page /courses
            window.location.href = './courses'
            console.log("Found User:", res.data());
        } else {
            console.log("No such document!");
        }
    }

    return (
        <>
        <div className="row-intro">
            <div className="text">Γραμματείες Πανεπιστημίου Αθηνών</div>
        </div>
        <div className="container">
            <div className="container-login">
                <div className="header">
                    <div className="text">Σύνδεση Χρήστη</div>
                </div>
                <div className="inputs">
                    <div className="input-user">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-psw">
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder="Κωδικός Πρόσβασης" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="support-container">
                    <a href="https://help.noc.uoa.gr/reset_password.php">Ξεχάσατε τον κωδικό;</a>
                </div>
                <div className="submit-container">
                    <div className="submit">
                        <button>Είσοδος</button>
                    </div>
                </div>
            </div>          
        </div>
        </>
        
    )
}

export default Login;