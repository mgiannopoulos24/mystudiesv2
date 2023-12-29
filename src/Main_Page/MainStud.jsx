import "./MainStud.css"
import user_img from "./assets/user.png"
import Header from "../Header_Page/Header"
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const MainStud = () =>{
    return(
        <>
        <Header/>
        <div className="row-header">
            <img src={user_img} alt="user"/><span><h2>Αρχική Σελίδα</h2></span>
        </div>
        <div className="row-progress">
            <div className='track-progress'>
                <li className='done'>
                    <span>1ο Εξάμηνο</span>           
                </li> 
                <li className='done'>
                    <span>Εξάμηνο 2</span>
                </li>
                <li className='done'>
                    Τώρα<span>Εξάμηνο 3</span>
                </li>
                <li className='todo'>
                    <span>Εξάμηνο 4</span>
                </li>
                <li className='todo'>
                    <span>Εξάμηνο 5</span>
                </li>
                <li className='todo'>
                    <span>Εξάμηνο 6</span>
                </li>
                <li className='todo'>
                    <span>Εξάμηνο 7</span>
                </li>
                <li className='todo'>
                    <span>Αποφοίτηση</span>
                </li>
            </div>
        </div>
        <div className="two-columns">
            <div className="column-subjects">
                <div className="row-subject">
                    <h3>Τα μαθήματα μου</h3><br></br>
                    ΧΕΙΜΕΡΙΝΟ ΕΞΑΜΗΝΟ 2023-24<br></br>
                    <strong>Σε εκκρεμότητα</strong>
                </div>
                <Card sx={{width:750,display: 'flex'}}>
                    <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <CardContent sx={{fontSize:14}}>
                            <h3 style={{ margin: 0 }}>Αντικειμενοστραφής Προγραμματισμός</h3>
                        </CardContent>
                        </div>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                            <span style={{ marginLeft: '20px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΑΝΑΣΤΑΣΙΑ ΛΥΓΙΖΟΥ
                        </div>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center' }}>
                            <span style={{ marginLeft: '20px' }}/><FlagOutlinedIcon style={{fontSize: '15px'}}/>300
                        </div>
                    </div>
                    <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                        <Button variant="outlined" component={Link} to="https://eclass.uoa.gr/courses/DI632/"sx={{ borderRadius: '25px', textTransform:'none'}}>E-Class</Button>
                    </div>
                </Card><br></br>
                <Card sx={{width:750,display: 'flex'}}>
                    <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <CardContent sx={{fontSize:14}}>
                            <h3 style={{ margin: 0 }}>Ανάλυση ΙΙ</h3>
                        </CardContent>
                        </div>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                            <span style={{ marginLeft: '20px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΓΕΩΡΓΙΟΣ ΧΑΛΙΚΙΑΣ
                        </div>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center' }}>
                            <span style={{ marginLeft: '20px' }}/><FlagOutlinedIcon style={{fontSize: '15px'}}/>260
                        </div>
                    </div>
                    <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                        <Button variant="outlined" component={Link} to="https://eclass.uoa.gr/courses/D260/"sx={{ borderRadius: '25px', textTransform:'none'}}>E-Class</Button>
                    </div>
                </Card><br></br>
                <Card sx={{width:750,display: 'flex'}}>
                    <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <CardContent sx={{fontSize:14}}>
                            <h3 style={{ margin: 0 }}>Σήματα & Συστήματα</h3>
                        </CardContent>
                        </div>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                            <span style={{ marginLeft: '20px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΙΩΑΝΝΗΣ ΠΑΝΑΓΑΚΗΣ
                        </div>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center' }}>
                            <span style={{ marginLeft: '20px' }}/><FlagOutlinedIcon style={{fontSize: '15px'}}/>180
                        </div>
                    </div>
                    <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                        <Button variant="outlined" component={Link} to="https://eclass.uoa.gr/courses/DI539/"sx={{ borderRadius: '25px', textTransform:'none'}}>E-Class</Button>
                    </div>
                </Card><br></br>
                <Card sx={{width:750,display: 'flex'}}>
                    <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                        <CardContent sx={{fontSize:14}}>
                            <h3 style={{ margin: 0 }}>Πιθανότητες και Στατιστική</h3>
                        </CardContent>
                        </div>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center'}}>
                            <span style={{ marginLeft: '20px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΔΗΜΗΤΡΙΟΣ ΑΧΛΙΟΠΤΑΣ
                        </div>
                        <div style={{ flex: '33%',display: 'flex',alignItems: 'center' }}>
                            <span style={{ marginLeft: '20px' }}/><FlagOutlinedIcon style={{fontSize: '15px'}}/>69
                        </div>
                    </div>
                    <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                        <Button variant="outlined" component={Link} to="https://eclass.uoa.gr/courses/DI617/"sx={{ borderRadius: '25px', textTransform:'none'}}>E-Class</Button>
                    </div>
                </Card>
            </div>
            <div className="column-grades">
                <div className="row-grades">
                    <h3>Οι πρόσφατοι βαθμοί μου</h3><br></br>
                    Σεπτέμβριος 2023-24
                </div><br></br>
                <Card sx={{width:500,display: 'flex'}}>
                    <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                        <CardContent sx={{fontSize:14}}>
                        <h3 style={{ margin: 0 }}>Εισαγωγή στον Προγραμματισμό</h3>
                        </CardContent>
                        </div>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center' }}>
                            <span style={{ marginLeft: '20px' }}/><PersonIcon style={{fontSize: '15px'}}/>111<span style={{ marginLeft: '5px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΠΑΝΑΓΙΩΤΗΣ ΣΤΑΜΑΤΟΠΟΥΛΟΣ
                        </div>
                    </div>
                    <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center', color: 'green' }}>
                        <h1>10</h1>
                    </div>
                </Card><br></br>
                <Card sx={{width:500,display: 'flex'}}>
                    <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                        <CardContent sx={{fontSize:14}}>
                        <h3 style={{ margin: 0 }}>Γραμμική Άλγεβρα</h3>
                        </CardContent>
                        </div>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center' }}>
                            <span style={{ marginLeft: '20px' }}/><PersonIcon style={{fontSize: '15px'}}/>250<span style={{ marginLeft: '5px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΝΑΚΟΣ
                        </div>
                    </div>
                    <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center', color: 'green' }}>
                        <h1>6</h1>
                    </div>
                </Card><br></br>
                <Card sx={{width:500,display: 'flex'}}>
                    <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                        <CardContent sx={{fontSize:14}}>
                        <h3 style={{ margin: 0 }}>Εισαγωγή στις Τηλεπικοινωνίες</h3>
                        </CardContent>
                        </div>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center' }}>
                            <span style={{ marginLeft: '20px' }}/><PersonIcon style={{fontSize: '15px'}}/>124<span style={{ marginLeft: '5px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΜΑΡΙΑ ΡΟΥΣΣΟΥ
                        </div>
                    </div>
                    <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center', color: 'green' }}>
                        <h1>7</h1>
                    </div>
                </Card><br></br>
                <Card sx={{width:500,display: 'flex'}}>
                    <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                        <CardContent sx={{fontSize:14}}>
                        <h3 style={{ margin: 0 }}>Λογική Σχεδίαση</h3>
                        </CardContent>
                        </div>
                        <div style={{ flex: '50%',display: 'flex',alignItems: 'center' }}>
                            <span style={{ marginLeft: '20px' }}/><PersonIcon style={{fontSize: '15px'}}/>67<span style={{ marginLeft: '5px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΒΑΣΙΛΕΙΟΣ ΚΑΡΑΚΩΣΤΑΣ
                        </div>
                    </div>
                    <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center', color: 'red' }}>
                        <h1>4</h1>
                    </div>
                </Card>

            </div>
        </div>
        </>

    )
}

export default MainStud;