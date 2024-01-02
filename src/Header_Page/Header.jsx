import "./Header.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header=()=>{
  return(
    <div className='three-columns-pheader'>
            <div className='column-1-header'>
                <h2>My Studies</h2>
            </div>
            <div className='column-2-header'>
                        
            </div>
            <div className='column-3-header'>
                <div className='row-icons'>
                    <div className='cell-home'><a href="/MainStud" style={{ textDecoration: 'none', color: 'inherit' }}><HomeRoundedIcon style={{ fontSize: '30px' }}/></a></div>
                    <div className='cell-declaration'>
                        <div className='dropdown'>
                            <button className='dropbutton'>Δηλώσεις<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content'>
                                <a href='/MainStud/CoursesDec'>Δήλωση Μαθημάτων</a>
                                <a href='/MainStud/DecHistory'>Προηγούμενες Δηλώσεις</a>
                                <a href=''>Συγγράματα</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-grades'>
                        <div className='dropdown'>
                            <button className='dropbutton'>Βαθμολογία<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content'>
                                <a href='/MainStud/Recent'>Πρόσφατη Βαθμολογία</a>
                                <a href='/MainStud/Detailed'>Αναλυτική Βαθμολογία</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-support'>
                        <div className='dropdown'>
                            <button className='dropbutton'>Εξυπηρέτηση<span ><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content'>
                                <a href=''>Αιτήσεις</a>
                            </div>
                        </div>
                    </div>
                    <div className='cell-notif'>
                        <div className='dropdown'>
                            <button className='dropbutton' style={{padding:'8px',justifyContent:'center',alignItems:"center"}}><NotificationsIcon style={{fontSize: '30px'}}/></button>
                            <div className="dropdown-content">
                                <a href=''></a>
                                <a href=''>Όλα τα μηνύματα</a>
                            </div>
                    </div>    
                    </div>
                    <div className='cell-user'>
                        <div className='dropdown'>
                            <button className='dropbutton'>lakisla<span><ExpandMoreRoundedIcon style={{fontSize: '15px'}}/></span></button>
                            <div className='dropdown-content'>
                                <a href='/ProfileStud'>Το προφίλ μου</a>
                                <a href='/Login'>Αποσύνδεση</a>
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

export default Header;

