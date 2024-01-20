
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from "../Firebase/firebase";
import React, { useState, useEffect } from "react";
import "./HeaderProf.css"
import Badge from '@mui/material/Badge';

const HeaderProf=()=>{
    const notificationsCount = 1;
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
    <div className='three-columns-pheader-1'>
            <div className='column-1-header-1'>
                <h2>My Studies</h2>
            </div>
            <div className='column-3-header-1'>
                <div className='row-icons-1'>
                    <div className='cell-home-1'><a href="/MainProf" style={{ textDecoration: 'none', color: 'inherit' }}><HomeRoundedIcon style={{ fontSize: '30px' }}/></a></div>
                    <div className='cell-grades-1'>
                        <div className='dropdown-1'>
                            <button className='dropbutton-1'><span className='button-text-1'>Βαθμολογία</span><ExpandMoreRoundedIcon style={{fontSize: '20px'}}/></button>
                            <div className='dropdown-content-1'>
                                <a href=''>Δημιουργία Βαθμολογίου</a>
                                <a href=''>Παρακολούθηση Βαθμολογίου</a>
                            </div>
                        </div>
                    </div>                    
                    <div className='cell-notif-1'>
                        <div className='dropdown-1'>
                            <button className='dropbutton-1' style={{padding:'8px',justifyContent:'center',alignItems:"center"}}>
                                <Badge badgeContent={notificationsCount} overlap="circular" color="error" >
                                    <NotificationsIcon style={{fontSize: '30px'}}/>
                                </Badge>
                            </button>
                            <div className="dropdown-content-1">
                                <a href=""><div>Καλημέρα σας. ΓΑΜΩ ΤΗΝ ΠΑΤΡΑ.</div></a>
                            </div>
                           
                    </div>    
                    </div>
                    <div className='cell-user-1'>
                        <div className='dropdown-1'>
                            <button className='dropbutton-1'><span className='button-text-1'>{userEmail}</span><ExpandMoreRoundedIcon style={{fontSize: '20px'}}/></button>
                            <div className='dropdown-content-1'>
                                <a href=''>Το προφίλ μου</a>
                                <a href='/Login'>Αποσύνδεση</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-lang-1'>
                        <div className='dropdown-1'>
                            <button className='dropbutton-1'><span className='button-text-1'>Ελληνικά</span><ExpandMoreRoundedIcon style={{fontSize: '20px'}}/></button>
                            <div className='dropdown-content-1'>
                                <option>Αγγλικά</option>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HeaderProf;

