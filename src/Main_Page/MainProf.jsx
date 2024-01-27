import HeaderProf from "../Header_Page/HeaderProf";
import "./MainProf.css"
import Card from "@mui/material/Card"
import { CardContent } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Button from "@mui/material/Button";
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import HelpIconProf from "../HelpIcon/HelpIconProf";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


const MainProf=()=>{
    return(

        <>
        <HeaderProf/>
        <Breadcrumbs/>
        <HelpIconProf/>
        <div className="row-prof">
            <h2>Αρχική Σελίδα</h2>
        </div>
        <div className="two-col-prof">
            <div className="col-subject-prof">
                <div className="row-subject-prof">
                    <h3>Τρέχοντα Μαθήματα</h3>
                    Χειμερινό Εξάμηνο 2023-24
                </div><br></br>
                <Card sx={{width:"97%",display: 'flex'}}>
                <div style={{ flex: '70%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                            <CardContent sx={{fontSize:14}}>
                                <h3 style={{ margin: 0 }}>Αντικειμενοστραφής Προγραμματισμός</h3>
                            </CardContent>
                    </div>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <span style={{marginLeft:"20px"}}/><FlagOutlinedIcon/>300 φοιτητές
                    </div>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <span style={{marginLeft:"20px"}}/><SchoolIcon style={{marginRight:"10px"}}/>Χειμερινό 2023-24<AccountBalanceOutlinedIcon style={{marginRight:"10px",marginLeft:'10px'}}/>Πληροφορικής και Τηλεπικοινωνιών
                    </div><br></br>
                </div>
                <div style={{ flex: '30%', display: 'flex', flexDirection: 'column',alignItems:"center",justifyContent:'center'}}>
                    <Button variant="outlined" style={{textTransform:"none",borderRadius: '25px'}}>Περισσότερα</Button>
                </div>
                </Card><br></br>
                <Card sx={{width:"97%",display: 'flex'}}>
                <div style={{ flex: '70%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                            <CardContent sx={{fontSize:14}}>
                                <h3 style={{ margin: 0 }}>Εργαστήριο Συστημάτων Επικοινωνιών</h3>
                            </CardContent>
                    </div>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <span style={{marginLeft:"20px"}}/><FlagOutlinedIcon/>300 φοιτητές
                    </div>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <span style={{marginLeft:"20px"}}/><SchoolIcon style={{marginRight:"10px"}}/>Χειμερινό 2023-24<AccountBalanceOutlinedIcon style={{marginRight:"10px",marginLeft:'10px'}}/>Πληροφορικής και Τηλεπικοινωνιών
                    </div><br></br>
                </div>
                <div style={{ flex: '30%', display: 'flex', flexDirection: 'column',alignItems:"center",justifyContent:'center'}}>
                    <Button variant="outlined" style={{textTransform:"none",borderRadius: '25px'}}>Περισσότερα</Button>
                </div>
                </Card><br></br>
                <Card sx={{width:"97%",display: 'flex'}}>
                <div style={{ flex: '70%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                            <CardContent sx={{fontSize:14}}>
                                <h3 style={{ margin: 0 }}>Εργαστήριο Κυκλωμάτων και Συστημάτων</h3>
                            </CardContent>
                    </div>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <span style={{marginLeft:"20px"}}/><FlagOutlinedIcon/>300 φοιτητές
                    </div>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <span style={{marginLeft:"20px"}}/><SchoolIcon style={{marginRight:"10px"}}/>Χειμερινό 2023-24<AccountBalanceOutlinedIcon style={{marginRight:"10px",marginLeft:'10px'}}/>Πληροφορικής και Τηλεπικοινωνιών
                    </div><br></br>
                </div>
                <div style={{ flex: '30%', display: 'flex', flexDirection: 'column',alignItems:"center",justifyContent:'center'}}>
                    <Button variant="outlined" style={{textTransform:"none",borderRadius: '25px'}}>Περισσότερα</Button>
                </div>
                </Card><br></br>
                <Card sx={{width:"97%",display: 'flex'}}>
                <div style={{ flex: '70%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                            <CardContent sx={{fontSize:14}}>
                                <h3 style={{ margin: 0 }}>Μηχανική Μάθηση</h3>
                            </CardContent>
                    </div>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <span style={{marginLeft:"20px"}}/><FlagOutlinedIcon/>300 φοιτητές
                    </div>
                    <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <span style={{marginLeft:"20px"}}/><SchoolIcon style={{marginRight:"10px"}}/>Χειμερινό 2023-24<AccountBalanceOutlinedIcon style={{marginRight:"10px",marginLeft:'10px'}}/>Πληροφορικής και Τηλεπικοινωνιών
                    </div><br></br>
                </div>
                <div style={{ flex: '30%', display: 'flex', flexDirection: 'column',alignItems:"center",justifyContent:'center'}}>
                    <Button variant="outlined" style={{textTransform:"none",borderRadius: '25px'}}>Περισσότερα</Button>
                </div>
                </Card><br></br>
                
            
            </div>
            <div className="col-grades-prof">
                <div className="row-grades-prof">
                    <h3>Βαθμολογίες</h3>
                    <strong className="prof-prog">Σεπτέμβριος 2023-24</strong>
                </div><br></br>
                <Card sx={{width:"97%",display: 'flex'}}>
                    <div style={{ flex: '70%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                                <CardContent sx={{fontSize:14}}>
                                    <h3 style={{ margin: 0 }}>Μεταγλωττιστές</h3>
                                </CardContent>
                        </div>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                            <span style={{marginLeft:"20px"}}/><SchoolIcon style={{marginRight:"10px"}}/>Eαρινό 2022-23<AccountBalanceOutlinedIcon style={{marginRight:"10px",marginLeft:'10px'}}/>Πληροφορικής και Τηλεπικοινωνιών
                        </div><br></br>
                    </div>
                    <div style={{ flex: '30%', display: 'flex', flexDirection: 'column',alignItems:"center",justifyContent:'center'}}>
                        <Link to="/MainProf/SubjectsOpenScore/Compilers"><ColorButton variant="contained" style={{textTransform:"none",borderRadius: '25px'}}>Βαθμολόγηση</ColorButton></Link>
                    </div>
                </Card><br></br>
                <Card sx={{width:"97%",display: 'flex'}}>
                    <div style={{ flex: '70%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                                <CardContent sx={{fontSize:14}}>
                                    <h3 style={{ margin: 0 }}>Αρχιτεκτονική ΙΙ</h3>
                                </CardContent>
                        </div>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                            <span style={{marginLeft:"20px"}}/><SchoolIcon style={{marginRight:"10px"}}/>Eαρινό 2022-23<AccountBalanceOutlinedIcon style={{marginRight:"10px",marginLeft:'10px'}}/>Πληροφορικής και Τηλεπικοινωνιών
                        </div><br></br>
                    </div>
                    <div style={{ flex: '30%', display: 'flex', flexDirection: 'column',alignItems:"center",justifyContent:'center'}}>
                        <Link to="/MainProf/SubjectsSubmittedScore/Arch"><ColorButton variant="contained" style={{textTransform:"none",borderRadius: '25px'}}>Παρακολούθηση</ColorButton></Link>
                    </div>
                </Card><br></br>
                <Card sx={{width:"97%",display: 'flex'}}>
                    <div style={{ flex: '70%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                                <CardContent sx={{fontSize:14}}>
                                    <h3 style={{ margin: 0 }}>Γραφικά Ι</h3>
                                </CardContent>
                        </div>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                            <span style={{marginLeft:"20px"}}/><SchoolIcon style={{marginRight:"10px"}}/>Eαρινό 2022-23<AccountBalanceOutlinedIcon style={{marginRight:"10px",marginLeft:'10px'}}/>Πληροφορικής και Τηλεπικοινωνιών
                        </div><br></br>
                    </div>
                    <div style={{ flex: '30%', display: 'flex', flexDirection: 'column',alignItems:"center",justifyContent:'center'}}>
                        <Link to="/MainProf/SubjectsOpenScore/Graphics"><ColorButton variant="contained"  style={{textTransform:"none",borderRadius: '25px'}}>Βαθμολόγηση</ColorButton></Link>
                    </div>
                </Card><br></br>
                <Card sx={{width:"97%",display: 'flex'}}>
                    <div style={{ flex: '70%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                                <CardContent sx={{fontSize:14}}>
                                    <h3 style={{ margin: 0 }}>Προγραμματισμός Συστήματος</h3>
                                </CardContent>
                        </div>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                            <span style={{marginLeft:"20px"}}/><SchoolIcon style={{marginRight:"10px"}}/>Eαρινό 2022-23<AccountBalanceOutlinedIcon style={{marginRight:"10px",marginLeft:'10px'}}/>Πληροφορικής και Τηλεπικοινωνιών
                        </div><br></br>
                    </div>
                    <div style={{ flex: '30%', display: 'flex', flexDirection: 'column',alignItems:"center",justifyContent:'center'}}>
                        <Link to="/MainProf/SubjectsSubmittedScore/Syspro"><ColorButton  variant="contained" style={{textTransform:"none",borderRadius: '25px'}}>Παρακολούθηση</ColorButton></Link>
                    </div>
                </Card>
            </div>
        </div>
        
        </>
    )
}

export default MainProf;