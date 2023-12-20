import React from 'react';
import "./Profile.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Profile =()=>{
    return(
        <div className='three-columns-pheader'>
            <div className='column-1-header'>
                        <h2>My Studies</h2>
            </div>
            <div className='column-2-header'>
                        
            </div>
            <div className='column-3-header'>
                <div className='row-icons'>
                    <div className='cell-home'><HomeRoundedIcon style={{ fontSize: '30px' }}/></div>
                    <div className='cell-declaration'>
                        <div className='dropdown'>
                            <button className='dropbutton'>Δηλώσεις<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content'>
                                <a href=''>Δήλωση Μαθημάτων</a>
                                <a href=''>Προηγούμενες Δηλώσεις</a>
                                <a href=''>Συγγράματα</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-grades'>
                        <div className='dropdown'>
                            <button className='dropbutton'>Βαθμολογία<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content'>
                                <a href=''>Πρόσφατη Βαθμολογία</a>
                                <a href=''>Αναλυτική Βαθμολογία</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-support'>
                        <div className='dropdown'>
                            <button className='dropbutton'>Εξυπηρέτηση<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content'>
                                <a href=''>Αιτήσεις</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-notif'>
                        <button className='notif-button'><NotificationsIcon style={{fontSize: '30px'}}/></button>
                    </div>
                    <div className='cell-user'>
                        <div className='dropdown'>
                            <button className='dropbutton'>User<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content'>
                                <a href=''>Προσωπικές πληροφορίες</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-lang'>
                        <div className='dropdown'>
                            <button className='dropbutton'>Ελληνικά<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
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



export default Profile;