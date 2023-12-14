import "./Header.css"
import logo_img from "../Header_Page/assets/logo.png"
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";
import gr_flag from "../Header_Page/assets/flag_gr.png"
import us_flag from "../Header_Page/assets/flag_us.png"
import user_icon from "../Header_Page/assets/user_icon.png"



export const Header = () => {

  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme=createTheme({
    palette: {
        mode: toggleDarkMode  ? 'dark' : 'light', //default theme
      },
    }
  
  );


  return (
    <>
    <div className="three-columns-header">
        <div className="column-1-header">
          <div className="image logo">
            <img src={logo_img} alt="NKUA Logo" title="NKUA Logo"/>
          </div>
        </div>
        <div className="column-2-header">
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
              <div className="row-1-header">
                <h3>Dark Mode</h3>
                  <span>               
                    <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
                  </span>
              </div>
          </ThemeProvider>
        </div>
        <div className="column-3-header">
          <div className="row-2-header">
              <img src={gr_flag} alt="GR-Flag" title="GR-Flag"/>
              <img src={us_flag} alt="US-Flag" title="US-Flag"/>
              <img src={user_icon} alt="user-icon" title="user-icon"/>
            </div>
        </div>
    </div>

    </>
  )
};

export default Header;

