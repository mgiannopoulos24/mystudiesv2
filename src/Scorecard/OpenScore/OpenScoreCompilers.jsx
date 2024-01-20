import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import HeaderProf from "../../Header_Page/HeaderProf";
import "./OpenScoreCompilers.css";
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

function createData(id, name, surname, semester, grade) {
    return { id, name, surname, semester,  };
  }

const rows = [
    createData(111520230001, "Μαρία", "Σκεύη", 3, ),
    createData(111520230002, "Δανάη", "Μαυρομάτττη", 1, ),
    createData(111520230003, "Λάκης", "Λαλάκης", 24, 6.0),
    createData(111520230004, "Παναγιώτης", "Λυμπερόπουλος", 4 , 4.3),
    createData(111520230005, "Mιράντα", "Mωβγατιτοπούλου", 8, ),
    createData(1115202369420, "Δημήτριος (Μαστερμαϊντ)", "Κοσμοναύτης", 8, ),
    createData(111520230006, "Κάγγελος", "Ajelman", 8, ),
];


  

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.lightgray,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));


const OpenScoreCompilers=()=>{

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return(
        <>
        
        <HeaderProf/>
        <Breadcrumbs/>
        <div className="row-compilers">
            <h2>Μεταγλωττιστές</h2>
        </div>
        <div className="tabs-compilers">
            <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab label="Eαρινό 2022-23" sx={{textTransform:"none", fontSize:18}} />
            </Tabs>
        </div>
        <div className="row-compilers-grade">
            <div className="status-compilers">
                <div className="status-compilers-col-1">
                    <h3>Κατάσταση Βαθμολογίας</h3>
                    <strong className="prof-pending">Σε εκκρεμότητα</strong>
                </div>
                <div className="status-compilers-col-2">
                    <Button variant='outlined' color="success" sx={{textTransform:"none", marginRight:'10px'}}>Προσωρινή Αποθήκευση</Button>
                    <Button variant="contained" color="success" sx={{textTransform:"none"}}>Οριστική Αποθήκευση</Button>
                </div>
            </div><br></br>
            <div className="students-compilers">
            <p>Παρακάτω εμφανίζονται οι μαθητές που δήλωσαν το μάθημα <strong style={{color:"purple"}}>Μεταγλωττιστές</strong></p>
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
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.surname}</TableCell>
                            <TableCell>{row.semester}</TableCell>
                            <TableCell>{row.grade}</TableCell>
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

export default OpenScoreCompilers;