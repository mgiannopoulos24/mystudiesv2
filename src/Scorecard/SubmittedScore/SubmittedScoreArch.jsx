import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import HeaderProf from "../../Header_Page/HeaderProf";
import "./SubmittedScoreArch.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import  Button  from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import  TextField  from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import HelpIconProf from "../../HelpIcon/HelpIconProf";

function createData(id, name, surname, semester, grade) {
    return { id, name, surname, semester, grade };
  }

const rows = [
    createData(111520230099, "Μαγδαληνή", "Λύτρα", 8, 3),
    createData(111520230100, "Έλλη", "Θεολόγα", 8, 10),
    
];


  

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.lightgray,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));


const SubmittedScoreArch=()=>{

    const [activeTab, setActiveTab] = useState(0);
    const [disableTextboxes, setDisableTextboxes] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleSave = () => {
        // Disable textboxes after saving
        setDisableTextboxes(true);
        setSuccessMessage("Η οριστική αποθήκευση έγινε με επιτυχία");
        setTimeout(() => {
            setSuccessMessage(null);
        }, 2000);
    };

    const handleTemporarySave = () => {

        // Display success message
        setSuccessMessage("Η προσωρινή αποθήκευση έγινε με επιτυχία");
        setTimeout(() => {
            setSuccessMessage(null);
        }, 2000);
    }
    
    return(
        <>
        
        <HeaderProf/>
        <Breadcrumbs/>
        <HelpIconProf/>
        <div className="row-arch">
            <h2>Αρχιτεκτονική ΙΙ</h2>
        </div>
        {successMessage && (
                <Alert severity="success" sx={{position: 'fixed', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000,}}>
                    {successMessage}
                </Alert>
        )}
        <div className="tabs-arch">
            <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab label="Eαρινό 2022-23" sx={{textTransform:"none", fontSize:18}} />
            </Tabs>
        </div>
        <div className="row-arch-grade">
            <div className="status-arch">
                <div className="status-arch-col-1">
                    <h3>Κατάσταση Βαθμολογίας</h3>
                    <strong className="prof-subbed">Υποβληθείσα</strong>
                </div>
                <div className="status-arch-col-2">
                    <div className="status-arch-col-2-row-1">
                        <Button variant='outlined' color="success" sx={{textTransform:"none", marginRight:'10px'}} onClick={handleTemporarySave}>Προσωρινή Αποθήκευση</Button>
                        <Button variant="contained" color="success" sx={{textTransform:"none"}} onClick={handleSave}>Οριστική Αποθήκευση</Button>
                    </div><br></br>
                    <div className="status-arch-col-2-row-2">
                        <Button variant="contained" color="secondary" sx={{textTransform:"none"}}>Λήψη βαθμολογίου</Button>
                    </div>
                    
                </div>
            </div><br></br>
            <div className="students-arch">
            <p>Παρακάτω εμφανίζονται οι μαθητές που δήλωσαν το μάθημα <strong style={{color:"purple"}}>Αρχιτεκτονική ΙΙ</strong></p>
            <TableContainer component={Paper} sx={{ width: "99%"}}>
                <Table size="normal">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell style={{ width: '20%', fontWeight: 'bold'}}>AM</StyledTableCell>
                        <StyledTableCell style={{ width: '20%', fontWeight: 'bold'}}>Όνομα</StyledTableCell>
                        <StyledTableCell style={{ width: '20%', fontWeight: 'bold'}}>Επώνυμο</StyledTableCell>
                        <StyledTableCell style={{ width: '20%', fontWeight: 'bold'}}>Εξάμηνο</StyledTableCell>
                        <StyledTableCell style={{ width: '20%', fontWeight: 'bold'}}>Βαθμός</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell style={{fontSize:16}} component="th" scope="row">{row.id}</TableCell>
                            <TableCell style={{fontSize:16}}>{row.name}</TableCell>
                            <TableCell style={{fontSize:16}}>{row.surname}</TableCell>
                            <TableCell style={{fontSize:16}}>{row.semester}</TableCell>
                            <TableCell style={{fontSize:16}}>
                            <TextField  
                            type="text"
                            variant="outlined"
                            size="small" 
                            sx={{width:"80px",height:"45px"}}  
                            disabled={disableTextboxes} 
                            value={row.grade !== null ? row.grade : ""}                   
                            />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer><br></br>
            </div>
        </div>
        </>
    )
}

export default SubmittedScoreArch;