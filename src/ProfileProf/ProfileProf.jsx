import React,{ useState }from 'react';
import "./ProfileProf.css"
import user_img_default from "./assets/prof.png"
import Grid from '@mui/material/Grid';
import HeaderProf from '../Header_Page/HeaderProf';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import SettingsIcon from '@mui/icons-material/Settings';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export const ProfileProf =()=>{
    const [newUserImg, setNewUserImg] = useState(user_img_default);
    const [anchorEl, setAnchorEl] = useState(null);
    const [newUserName, setNewUserName] = useState("ΚΑΘΗΓΗΤΗΣ ΕΝΑΣ"); 
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeProfilePicture = () => {
        // Create an input element dynamically
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*'; // Allow only image files
      
        // Handle the file selection event
        input.addEventListener('change', (event) => {
          const file = event.target.files[0];
      
          if (file) {
            // Create a FileReader to read the file content
            const reader = new FileReader();
      
            reader.onload = (e) => {
              // Create an image object
              const img = new Image();
              img.src = e.target.result;
      
              img.onload = () => {
                // Resize the image to 216x216 pixels
                const canvas = document.createElement('canvas');
                canvas.width = 216;
                canvas.height = 216;
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0, 216, 216);
      
                // Convert the canvas content to a data URL
                const resizedImageUrl = canvas.toDataURL();
      
                // Set the new user image
                setNewUserImg(resizedImageUrl);
              };
            };
      
            // Read the file as a data URL
            reader.readAsDataURL(file);
          }
        });

        input.click();

        handleClose();
    };

    const handleChangeUserName = () => {
        const newName = prompt("Πληκτρολογήστε το νέο ονοματεπώνυμο:");
        if (newName) {
          setNewUserName(newName);
        }
        handleClose();
      };

    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <>
        <HeaderProf/>
        <Breadcrumbs/>
        <div className='row-header-profprof'>
            <h2>Το προφίλ μου</h2><span style={{marginLeft:"83%",alignItems:"center",marginTop:"10px"}}><SettingsIcon onClick={handleClick} sx={{fontSize:"30px"}}/></span>
            <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList>
                                <MenuItem onClick={handleChangeProfilePicture}>Αλλαγή Εικόνας προφίλ</MenuItem>
                                <MenuItem onClick={handleChangeUserName}>Επεξεργασία Ονοματεπώνυμου</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                </Popover>
        </div>
        <div className='row-main-1-profprof'>
            <img src={newUserImg} alt="user"/>
        </div>
        <div className='row-name-status-profprof'>
            <h3>{newUserName}</h3>
            Ενεργός
        </div>
        
        <div className='empty-space-profprof'></div>
        <div className='row-info-profprof'>
            <Grid container textAlign="center" rowSpacing={1} columnSpacing={{ xs: 1}}>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
        </>
    )
    
       
}



export default ProfileProf;