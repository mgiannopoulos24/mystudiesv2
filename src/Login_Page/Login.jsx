import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import ekpa_logo from "./assets/ekpa-logo.png"
import Button from '@mui/material/Button';


const Login =() => {

    
    return (
        <>
        <div className="nav-bar">
            <a href=""><h2>en</h2></a>
        </div>
        <div className="row-1">
            <div className="column-1">
                <div className="row-title">
                    <h2>Γραμματείες Πανεπιστημίου Αθηνών</h2>
                </div>
                <div className="row-logo">
                    <img src={ekpa_logo} alt="ekpa-logo"/>
                </div>
                <hr></hr>
                <div className="row-uni-login">
                    <h3>Σύνδεση με:</h3>
                    <Button variant="contained" style={{textTransform:"none"}}>Ιδρυματικό Λογαριασμό</Button>
                </div>
                <hr></hr>
                <div className="row-alt-login">
                    <h4>Αν δεν έχετε ιδρυματικό λογαριασμό:</h4>
                    <Button variant="outlined" style={{textTransform:"none"}}>Σύνδεση με κωδικό Πανελληνίων</Button>
                </div>
            </div>
            <div className="column-2">
                <div className="row-2">
                    <p>Η είσοδος στις υπηρεσίες Ηλεκτρονικής Γραμματείας<br></br>
                    γίνεται με χρήση του <b>ιδρυματικού λογαριασμού</b> σας.</p>
                    <hr></hr>
                    <p>Οι δυνατότητες που προσφέρονται σε <b>φοιτητές/τριες</b> είναι:</p>
                    <ul>
                        <li>να δουν ή/και να εκτυπώσουν τη βαθμολογία τους</li>
                        <li>να δηλώσουν τα μαθήματα που ενδιαφέρονται</li>
                        <li>να δουν το ιστορικό των δηλώσεων τους</li>
                        <li>να διεκπεραιώνουν ηλεκτρονικά αιτήσεις για έκδοση<br></br>
                        πιστοποιητικών/περάτωση σπουδών/συμμετοχή<br></br>
                        σε ορκωμοσία</li>
                    </ul>
                    <p>Οι δυνατότητες που προσφέρονται σε <b>διδάσκοντες/ουσες</b> είναι:</p>
                    <ul>
                        <li>προβολή των μαθημάτων στα οποία μπορεί<br></br>
                        να υποβάλει βαθμολογίες</li>
                        <li>δημιουργία νέου βαθμολογίου</li>
                        <li>παρακολούθηση βαθμολογίου</li>
                    </ul>
                    <p>Οι δυνατότητες που προσφέρονται σε <b>μέλη της Γραμματείας</b> είναι:</p>
                    <ul>
                        <li>Περιοχή για μηνύματα/ <br></br>
                        ειδοποιήσεις/υπενθυμίσεις, εισερχόμενες αιτήσεις</li>
                        <li>Ορισμός προθεσμιών για δηλώσεις μαθημάτων</li>
                        <li>Προβολή φοιτητών/τριών</li>
                        <li>Συμπλήρωση εντύπων που αιτούνται οι φοιτητές/τριες</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Login;