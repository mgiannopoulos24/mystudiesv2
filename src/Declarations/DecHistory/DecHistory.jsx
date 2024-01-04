import Header from "../../Header_Page/Header";
import  Card  from "@mui/material/Card";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useState } from "react";
import "./DecHistory.css"




function createData(subject, id, professor, period, type,points) {
    return {subject, id, professor, period, type,points};
}

const rowsSem1 = [
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
];

const rowsSem2 = [
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΑΝΑΛΥΣΗ 2', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
];

const rowsSem3 = [
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΑΝΤΙΚΕΙΜΕΝΟΣΤΡΑΦΗΣ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6),
];


const DecHistory=()=>{
    
    const [selectedYear, setSelectedYear] = useState('2023-24');

    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    return(
        
        <>
            <Header/>
            <div className="row-dhis-title">
                <h2>Ιστορικό Δηλώσεων</h2>
            </div>
            <div className="row-dhis-desc">
                Παρακάτω εμφανίζεται το ιστορικό των δηλώσεων σας ανά ακαδημαϊκό έτος
            </div><br></br>
            <div className="two-col-dhis">
                <div className="col-dhis-1">
                    <ul style={{listStyle:"none"}}>
                        <li onClick={() => handleYearChange('2023-24')}>2023-24</li>
                        <li onClick={() => handleYearChange('2022-23')}>2022-23</li>
                    </ul>
                </div>
                <div className="col-dhis-2">
                    <Card style={{width:"98%",alignItems:"center"}}>
                        <h4 style={{marginLeft:"10px"}}>ΧΕΙΜΕΡΙΝΟ ΕΞΑΜΗΝΟ 2023-24</h4>
                        <div className="row-table-dhis-1" style={{ display: selectedYear === '2023-24' ? 'block' : 'none' }}>
                        <TableContainer sx={{margin: "0 25px"}}>
                            <Table sx={{width:"100%"}}>
                                <TableHead >
                                    <TableRow>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                        <TableCell style={{ width: '5%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                        <TableCell style={{ width: '10%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                        <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                        <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                        <TableCell style={{ width: '3%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{border: '2px solid #ddd'}}>
                                    {rowsSem3.map((row)=>(
                                    <TableRow key={row.name}>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.professor}</TableCell>
                                        <TableCell>{row.period}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.points}</TableCell>
                                    </TableRow>))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </div><br></br>
                        <div className="row-table-dhis-2" style={{ display: selectedYear === '2022-23' ? 'block' : 'none' }}>
                        <TableContainer sx={{margin: "0 25px"}}>
                            <Table sx={{width:"100%"}}>
                                <TableHead >
                                    <TableRow>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                        <TableCell style={{ width: '5%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                        <TableCell style={{ width: '10%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                        <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                        <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                        <TableCell style={{ width: '3%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{border: '2px solid #ddd'}}>
                                    {rowsSem2.map((row)=>(
                                    <TableRow key={row.name}>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.professor}</TableCell>
                                        <TableCell>{row.period}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.points}</TableCell>
                                    </TableRow>))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </div><br></br>
                        <h4 style={{marginLeft:"10px"}}>ΕΑΡΙΝΟ ΕΞΑΜΗΝΟ 2022-23</h4>
                        <div className="row-table-dhis-3" style={{ display: selectedYear === '2023-24' ? 'block' : 'none' }}>
                        <TableContainer sx={{margin: "0 25px"}}>
                            <Table sx={{width:"100%"}}>
                                <TableHead >
                                    <TableRow>
                                        <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                        <TableCell style={{ width: '5%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                        <TableCell style={{ width: '10%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                        <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                        <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                        <TableCell style={{ width: '3%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{border: '2px solid #ddd'}}>
                                    {rowsSem3.map((row)=>(
                                    <TableRow key={row.name}>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.professor}</TableCell>
                                        <TableCell>{row.period}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.points}</TableCell>
                                    </TableRow>))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </div><br></br>

                    </Card>
                </div>

            </div>
        </>
        
    )
}


export default DecHistory;