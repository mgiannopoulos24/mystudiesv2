import "./Header.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from "../Firebase/firebase";
import React, { useState, useEffect } from "react";
import Badge from '@mui/material/Badge';


const Header=()=>{
    const notificationsCount = 3;
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUserEmail(user.email);
        } else {
          setUserEmail(null);
        }
      });
  
      return () => unsubscribe();
    }, []);

    return(
    <div className='three-columns-pheader'>
            <div className='column-1-header'>
                <h2>My Studies</h2>
            </div>
            <div className='column-3-header'>
                <div className='row-icons'>
                    <div className='cell-home'><a href="/MainStud" style={{ textDecoration: 'none', color: 'inherit' }}><HomeRoundedIcon style={{ fontSize: '30px' }}/></a></div>
                    <div className='cell-declaration'>
                        <div className='dropdown'>
                            <button className='dropbutton'><span className='button-text'>Δηλώσεις</span><ExpandMoreRoundedIcon style={{fontSize: '20px'}}/></button>
                            <div className='dropdown-content'>
                                <a href='/MainStud/CoursesDec'>Δήλωση Μαθημάτων</a>
                                <a href='/MainStud/DecHistory'>Προηγούμενες Δηλώσεις</a>
                                <a href='/MainStud/Books'>Συγγράματα</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-grades'>
                        <div className='dropdown'>
                            <button className='dropbutton'><span className='button-text'>Βαθμολογία</span><ExpandMoreRoundedIcon style={{fontSize: '20px'}}/></button>
                            <div className='dropdown-content'>
                                <a href='/MainStud/Recent'>Πρόσφατη Βαθμολογία</a>
                                <a href='/MainStud/Detailed'>Αναλυτική Βαθμολογία</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-support'>
                        <div className='dropdown'>
                            <button className='dropbutton'><span className='button-text'>Εξυπηρέτηση</span><ExpandMoreRoundedIcon style={{fontSize: '20px'}}/></button>
                            <div className='dropdown-content'>
                                <a href='/MainStud/Requests'>Αιτήσεις</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-notif'>
                        <div className='dropdown'>
                            <button className='dropbutton' style={{padding:'8px',justifyContent:'center',alignItems:"center"}}>
                                <Badge badgeContent={notificationsCount} overlap="circular" color="error" >
                                    <NotificationsIcon style={{fontSize: '30px'}}/>
                                </Badge>
                            </button>
                            
                            <div className="dropdown-content">
                                <a href="/MainStud/CoursesDec"><div>Η περίοδος δήλωσης μαθημάτων ξεκίνησε. Δηλώστε τα μαθήματά σας.</div></a>
                                <a href="/MainStud/Requests"><div>H βεβαίωση σπουδών που αιτηθήκατε εγκρίθηκε.</div></a>
                                <a href="/MainStud/Requests"><div>Το πιστοποιητικό φοιτητικής ιδιότητας που αιτηθήκατε εγκρίθηκε.</div></a>
                            </div>
                    </div>    
                    </div>
                    <div className='cell-user'>
                        <div className='dropdown'>
                            <button className='dropbutton'><span className='button-text'>{userEmail}</span><ExpandMoreRoundedIcon style={{fontSize: '20px'}}/></button>
                            <div className='dropdown-content'>
                                <a href='/MainStud/ProfileStud'>Το προφίλ μου</a>
                                <a href='/Login'>Αποσύνδεση</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-lang'>
                        <div className='dropdown'>
                            <button className='dropbutton'><span className='button-text'>Ελληνικά</span><ExpandMoreRoundedIcon style={{fontSize: '20px'}}/></button>
                            <div className='dropdown-content'>
                                <option>Αγγλικά</option>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header;

