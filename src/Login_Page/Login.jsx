import "./Login.css"
import ekpa_logo from "./assets/ekpa-logo.png"
import Button from '@mui/material/Button';
import gr_flag from "./assets/GR_FLAG.png"
import greece_img from "./assets/EU_Greece.png"
import papaki_img from "./assets/papaki.png"
import eu_img from "./assets/EU_FLAG.png"
import Login_Form from "./Login_Form/Login_Form";
import { useState} from "react";
import Signup_Form from "./Signup_Form/Signup_Form";

const Login =() => {


    const [showLoginForm, setShowLoginForm] = useState(false);
    
    const handleLoginButtonClick = () => {
        setShowLoginForm(!showLoginForm);
    };
    
    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleSignupButtonClick = () => {
        setShowSignupForm(!showSignupForm);
    };

   

    return (
        <>
        <div className={`Page ${showLoginForm ? 'form-visible' : ''}`}>
        <div className="nav-bar">
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
                    <Button variant="contained" style={{textTransform:"none"}} onClick={handleLoginButtonClick}>Ιδρυματικό Λογαριασμό</Button>
                </div>
                <div className={`login-form-container ${showLoginForm ? 'slide-in' : ''}`}>
                    {showLoginForm && <Login_Form onLoginSuccess={() => setShowLoginForm(false)}/>} 
                </div>
                <hr></hr>
                <div className="row-alt-login">
                    <h4>Αν δεν έχετε ιδρυματικό λογαριασμό:</h4>
                    <Button variant="outlined" style={{textTransform:"none"}} onClick={handleSignupButtonClick}>Δημιουργία λογαριασμού</Button>
                </div>
                <div className={`signup-form-container ${showSignupForm ? 'slide-in' : ''}`}>
                    {showSignupForm && <Signup_Form onSignupSuccess={() => setShowLoginForm(true)} />} 
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
        <div className="footer">
            <div className="column-3">
                <p>Το έργο «Προηγμένες Tηλεματικές Yπηρεσίες στο Πανεπιστήμιο Αθηνών  
                ΑΘΗΝΑ ΝΕΤ- ΙΙ» έχει ενταχθεί στο Ε.Π. Κοινωνία της Πληροφορίας,<br></br>
                συγχρηματοδοτείται κατά 75% από το Ευρωπαϊκό Κοινωνικό Ταμείο (EKT)
                και κατά 25% από το Ελληνικό Δημόσιο.</p>
            </div>
            <div className="column-4">
                <img src={greece_img} alt="greece_img"/>
                <img src={gr_flag} alt="gr_flag"/>
                <img src={papaki_img} alt="papaki"/>
                <img src={eu_img} alt="eu"/>

            </div>
        </div>
        </div>
        </>
        
    )
}

export default Login;