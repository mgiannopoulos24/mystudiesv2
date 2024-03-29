import Header from "../../Header_Page/Header";
import  Card  from "@mui/material/Card";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import HelpIcon from '../../HelpIcon/HelpIcon';
import { useState } from "react";
import "./DecHistory.css"
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import BackToTop from "../../BackToTop/BackToTop";
import  Button from "@mui/material/Button";




function createData(subject, id, professor, type,points) {
    return {subject, id, professor,  type,points};
}

const rowsSem1 = [
    createData('Ανάλυση ΙΙ', 'Κ06', 'Γεώργιος Χαλικιάς', 'Υποχρεωτικό', 8),
    createData('Αντικειμενοστραφής Προγραμματισμός', 'Κ10', 'Αναστασία Λυγίζου', 'Υποχρεωτικό', 8),
    createData('Σήματα και Συστήματα', 'Κ11', 'Ιωάννης Παναγάκης', 'Υποχρεωτικό', 6),
    createData('Τεχνητή Νοημοσύνη', 'Κ13', 'Δημήτριος Αχλιόπτας', 'Υποχρεωτικό', 6),
    createData('Πιθανότητες και Στατιστική', 'ΥΣ02', 'Μανόλης Κουμπαράκης', 'Προαιρετικό', 6),
];

const rowsSem2 = [
    createData('Ανάλυση Ι', 'Κ08', 'Παντελεήμων Δοδός', 'Υποχρεωτικό', 6),
    createData('Αρχιτεκτονική Υπολογιστών Ι', 'Κ01', 'Δημήτριος Γκιζόπουλος','Υποχρεωτικό', 6),
    createData('Ηλεκτρομαγνητισμός, Οπτική και Σύγχρονη φυσική', 'Κ08', 'Αριστείδης Τσίπουρας', 'Υποχρεωτικό', 6),
    createData('Εφαρμοσμένα Μαθηματικά', 'Κ08', 'Μαρία Λουκά', 'Υποχρεωτικό', 6),
    createData('Δομές Δεδομένων και Τεχνικές Προγραμματισμού', 'Κ08', 'Μανόλης Κουμπαράκης/Κωνσταντίνος Χατζηκοκολάκης', 'Υποχρεωτικό', 7),
];

const rowsSem3 = [
    createData('Εισαγωγή στον Προγραμματισμό', 'Κ04', 'Παναγιώτης Σταματόπουλος',  'Υποχρεωτικό', 7),
    createData('Γραμμική Άλγεβρα', 'Κ03', 'Αρχοντία Γιαννοπούλου',  'Υποχρεωτικό', 6),
    createData('Διακριτά Μαθηματικά', 'Κ09', 'Χρήστος Τζάμος',  'Υποχρεωτικό', 7),
    createData('Λογική Σχεδίαση', 'Κ08', 'Αντώνιος Πασχάλης',  'Υποχρεωτικό', 6),
    createData('Εισαγωγή στην Πληροφορική και τις Τηλεπικοινωνίες', 'ΓΠ07', 'Μαρία Ρούσσου',  'Γενικής Παιδείας', 2),
];


const DecHistory=()=>{
    
    const [selectedYear, setSelectedYear] = useState('2023-24');

    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    return(
        
        <>
            <Header/>
            <Breadcrumbs/>
            <BackToTop/>
            <HelpIcon/>
            <div className="row-dhis-title">
                <h2>Ιστορικό Δηλώσεων</h2>
            </div>
            <div className="row-dhis-desc">
                Παρακάτω εμφανίζεται το ιστορικό των δηλώσεων σας ανά ακαδημαϊκό έτος
            </div><br></br>
            <div className="two-col-dhis">
                <div className="col-dhis-1">
                    <ul style={{listStyle:"none",fontSize:18,marginLeft:"20px"}}>
                        <Button variant="outlined" sx={{marginBottom:"10px"}}><li style={{ cursor: "pointer"}} onClick={() => handleYearChange('2023-24')}>2023-24</li></Button>
                        <Button variant="outlined"><li style={{ cursor: "pointer" }} onClick={() => handleYearChange('2022-23')}>2022-23</li></Button>
                    </ul>
                </div>
                <div className="col-dhis-2">
                    <Card style={{width:"98%",alignItems:"center"}}>
                        <h4 style={{marginLeft:"10px"}}>{selectedYear === '2023-24' ? 'ΧΕΙΜΕΡΙΝΟ ΕΞΑΜΗΝΟ 2023-24' : 'ΧΕΙΜΕΡΙΝΟ ΕΞΑΜΗΝΟ 2022-23'}</h4>
                        <div className="row-table-dhis-1" style={{ display: selectedYear === '2023-24' ? 'block' : 'none' }}>
                        <TableContainer sx={{margin: "0 25px"}}>
                            <Table sx={{width:"100%"}}>
                                <TableHead >
                                    <TableRow>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                        <TableCell style={{ width: '15%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                        <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{border: '2px solid #ddd'}}>
                                    {rowsSem1.map((row)=>(
                                    <TableRow key={row.name}>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.professor}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.points}</TableCell>
                                    </TableRow>))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </div>
                        <div className="row-table-dhis-2" style={{ display: selectedYear === '2022-23' ? 'block' : 'none' }}>
                        <TableContainer sx={{margin: "0 25px"}}>
                            <Table sx={{width:"100%"}}>
                                <TableHead >
                                    <TableRow>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                        <TableCell style={{ width: '15%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                        <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{border: '2px solid #ddd'}}>
                                    {rowsSem3.map((row)=>(
                                    <TableRow key={row.name}>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.professor}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.points}</TableCell>
                                    </TableRow>))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </div><br></br>
                        <h4 style={{marginLeft:"10px"}}>{selectedYear === '2023-24' ? 'ΕΑΡΙΝΟ ΕΞΑΜΗΝΟ 2023-24' : 'ΕΑΡΙΝΟ ΕΞΑΜΗΝΟ 2022-23'}</h4>
                        <div className="row-table-dhis-3" style={{ display: selectedYear === '2023-24' ? 'block' : 'none'  }}>
                        <p style={{marginLeft:"20px",fontStyle:"italic"}}>Δεν υπάρχουν δεδομένα δηλώσεων</p>
                        </div>
                        <div className="row-table-dhis-4" style={{ display: selectedYear === '2022-23' ? 'block' : 'none' }}>
                        <TableContainer sx={{margin: "0 25px"}}>
                            <Table sx={{width:"100%"}}>
                                <TableHead >
                                    <TableRow>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                        <TableCell style={{ width: '15%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                        <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{border: '2px solid #ddd'}}>
                                    {rowsSem2.map((row)=>(
                                    <TableRow key={row.name}>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.professor}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.points}</TableCell>
                                    </TableRow>))}
                                </TableBody>
                            </Table>
                        </TableContainer><br></br>
                        </div>

                    </Card>
                </div>

            </div>
        </>
        
    )
}


export default DecHistory;