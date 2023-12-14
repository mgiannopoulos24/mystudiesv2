import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login =() => {
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
                        <input type="text" placeholder="Όνομα Χρήστη" />
                    </div>
                    <div className="input-psw">
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder="Κωδικός" />
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