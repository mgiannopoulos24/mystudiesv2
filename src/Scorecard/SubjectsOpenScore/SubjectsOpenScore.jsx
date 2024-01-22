import "./SubjectsOpenScore.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HeaderProf from "../../Header_Page/HeaderProf";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Button from "@mui/material/Button";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SchoolIcon from '@mui/icons-material/School';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


const SubjectsOpenScore=()=>{
    return(
        <>
            <HeaderProf/>
            <Breadcrumbs/>
            <div className="subopen-title">
                <h2>Δημιουργία Βαθμολογίου</h2>
            </div>
            <div className="subopen-desc">
                <p>Παρακάτω εμφανίζονται τα μαθήματα που δεν έχετε βαθμολογήσει.</p>
            </div><br></br>
            <div className="subopen-subj-list">
                <Card sx={{width:"99%",display: 'flex'}}>
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
                <Card sx={{width:"99%",display: 'flex'}}>
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
                </Card>
            </div>
        </>
    )
}

export default SubjectsOpenScore;
