
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from "../Firebase/firebase";
import React, { useState, useEffect } from "react";
import "./HeaderProf.css"

const HeaderProf=()=>{
    
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
            <div className='column-2-header-1'>
                        
            </div>
            <div className='column-3-header-1'>
                <div className='row-icons-1'>
                    <div className='cell-home-1'><a href="/MainProf" style={{ textDecoration: 'none', color: 'inherit' }}><HomeRoundedIcon style={{ fontSize: '30px' }}/></a></div>
                    <div className='cell-grades-1'>
                        <div className='dropdown-1'>
                            <button className='dropbutton-1'>Βαθμολογία<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content-1'>
                                <a href=''>Πρόσφατη Βαθμολογία</a>
                                <a href=''>Αναλυτική Βαθμολογία</a>
                            </div>
                        </div>
                    </div>                    
                    <div className='cell-notif-1'>
                        <div className='dropdown-1'>
                            <button className='dropbutton-1' style={{padding:'8px',justifyContent:'center',alignItems:"center"}}><NotificationsIcon style={{fontSize: '30px'}}/></button>
                            <div className="dropdown-content-1">
                                <a href=''></a>
                                <a href=''>Όλα τα μηνύματα</a>
                            </div>
                    </div>    
                    </div>
                    <div className='cell-user-1'>
                        <div className='dropdown-1'>
                            <button className='dropbutton-1'>{userEmail}<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content-1'>
                                <a href=''>Το προφίλ μου</a>
                                <a href='/Login'>Αποσύνδεση</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-lang-1'>
                        <div className='dropdown-1'>
                            <button className='dropbutton-1'>Ελληνικά<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
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

