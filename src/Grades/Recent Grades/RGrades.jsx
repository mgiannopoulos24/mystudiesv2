import "./RGrades.css"
import Header from "../../Header_Page/Header";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  Card  from "@mui/material/Card";
import { CardContent } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

const RGrades=()=>{
    return(
        <>
        <Header/>
        <div className="two-columns-rgrade">
            <div className="column-1-rgrade">
                <div className="row-rgrade">
                    <h2>Πρόσφατη Βαθμολογία</h2>
                </div>
                <div className="row-period">
                    <h3>Εξεταστική: Σεπτέμβριος 2023-24</h3>
                </div>
                <div className="row-rec-subject">
                    <Card sx={{width:'80%',display: 'flex',height:'150px'}}>
                        <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                            <CardContent sx={{fontSize:14}}>
                            <h3 style={{ margin: 0 }}>Εισαγωγή στον Προγραμματισμό</h3>
                            </CardContent>
                            </div>
                            <div style={{ flex: '50%',display: 'flex',alignItems: 'center' }}>
                                <span style={{ marginLeft: '20px' }}/><FlagOutlinedIcon style={{fontSize: '15px'}}/>111<span style={{ marginLeft: '5px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΠΑΝΑΓΙΩΤΗΣ ΣΤΑΜΑΤΟΠΟΥΛΟΣ
                            </div>
                        </div>
                        <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center', color: 'green' }}>
                            <h1>10</h1>
                        </div>
                    </Card><br></br>
                    <Card sx={{width:'80%',display: 'flex',height:'150px'}}>
                        <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                            <CardContent sx={{fontSize:14}}>
                            <h3 style={{ margin: 0 }}>Γραμμική Άλγεβρα</h3>
                            </CardContent>
                            </div>
                            <div style={{ flex: '50%',display: 'flex',alignItems: 'center' }}>
                                <span style={{ marginLeft: '20px' }}/><FlagOutlinedIcon style={{fontSize: '15px'}}/>250<span style={{ marginLeft: '5px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΝΑΚΟΣ
                            </div>
                        </div>
                        <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center', color: 'green' }}>
                            <h1>6</h1>
                        </div>
                    </Card><br></br>
                    <Card sx={{width:'80%',display: 'flex',height:'150px'}}>
                        <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                            <CardContent sx={{fontSize:14}}>
                            <h3 style={{ margin: 0 }}>Εισαγωγή στις Τηλεπικοινωνίες</h3>
                            </CardContent>
                            </div>
                            <div style={{ flex: '50%',display: 'flex',alignItems: 'center' }}>
                                <span style={{ marginLeft: '20px' }}/><FlagOutlinedIcon style={{fontSize: '15px'}}/>124<span style={{ marginLeft: '5px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΜΑΡΙΑ ΡΟΥΣΣΟΥ
                            </div>
                        </div>
                        <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center', color: 'green' }}>
                            <h1>7</h1>
                        </div>
                    </Card><br></br>
                    <Card sx={{width:'80%',display: 'flex',height:'150px'}}>
                        <div style={{ flex: '80%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{ flex: '50%',display: 'flex',alignItems: 'center'}}>
                            <CardContent sx={{fontSize:14}}>
                            <h3 style={{ margin: 0 }}>Λογική Σχεδίαση</h3>
                            </CardContent>
                            </div>
                            <div style={{ flex: '50%',display: 'flex',alignItems: 'center' }}>
                                <span style={{ marginLeft: '20px' }}/><FlagOutlinedIcon style={{fontSize: '15px'}}/>67<span style={{ marginLeft: '5px' }}/><SchoolIcon style={{fontSize:'15px'}}/><span style={{ marginLeft: '5px' }}/>ΒΑΣΙΛΕΙΟΣ ΚΑΡΑΚΩΣΤΑΣ
                            </div>
                        </div>
                        <div style={{ flex: '20%', display: 'flex',alignItems: 'center', justifyContent: 'center', color: 'red' }}>
                            <h1>4</h1>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="column-2-rgrade">
                <Card sx={{width:"90%",height:"60%"}}>
                    <div className="row-card-title"style={{display: 'flex',alignItems: 'center',justifyContent:"center"}}>
                        ΑΠΟΤΕΛΕΣΜΑΤΑ<br></br>
                        Σεπτέμβριος 2023-24
                    </div><br></br>
                    <div className="row-round-progress" style={{display: 'flex',alignItems: 'center',justifyContent:"center"}}>
                        <div style={{ width: '150px', height: '150px' }}>
                            <CircularProgressbar 
                            value={75} 
                            text={
                                <tspan>
                                    <tspan x="50" dy="-0.4em" fontSize="18" fontWeight="bold">3/9</tspan>                                    
                                    <tspan x="50" dy="1.2em" fontSize="13" fontWeight="normal">Περασμένα</tspan>
                                </tspan>
                            }
                            styles={buildStyles({rotation:1,pathTransitionDuration: 0.5})}
                            strokeWidth={8} 
                            trailWidth={8} 
                            />         
                        </div>   
                    </div><br></br>
                    <div className="exam-sub">
                        <div className="d-cell-1"style={{flex:"90%",marginLeft:"20px"}}>Δηλωμένα μαθήματα</div>
                        <div className="d-cell-2" style={{flex:"10%"}}>9</div>
                    </div>
                    <div className="passed-sub">
                        <div className="p-cell-1"style={{flex:"90%",marginLeft:"20px"}}>Περασμένα μαθήματα</div>
                        <div className="p-cell-2" style={{flex:"10%"}}>3</div>
                    </div>
                    <hr></hr>
                    <div className="gpa">
                        <div className="gpa-cell-1"style={{flex:"90%",marginLeft:"20px",alignItems:'center',justifyContent:"center",marginTop:'10px'}}>Μέσος όρος</div>
                        <div className="gpa-cell-2" style={{flex:"10%",fontSize:"30px",alignItems:'center',justifyContent:"center"}}>10</div>
                    </div>
                </Card>
            </div>
        </div>

        
        
        </>


    )
}


export default RGrades;