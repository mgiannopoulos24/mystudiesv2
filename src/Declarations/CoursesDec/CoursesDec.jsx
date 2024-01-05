import Checkbox from '@mui/material/Checkbox';
import Header from "../../Header_Page/Header";
import "./CoursesDec.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import { useState } from 'react';


function createData(subject, id, professor, period, type,points,declare) {
    return {subject, id, professor, period, type,points,declare};
}

const rowsSem1 = [
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, ),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, ),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, ),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, ),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, ),
];

const rowsSem2 = [
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΑΝΑΛΥΣΗ 2', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
];

const rowsSem3 = [
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΑΝΤΙΚΕΙΜΕΝΟΣΤΡΑΦΗΣ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
];

const CoursesDec=()=>{
    const [checkedCourses, setCheckedCourses] = useState([]);

    const handleCheckboxChange = (row) => {
        const isChecked = checkedCourses.includes(row);
        setCheckedCourses((prevCheckedCourses) => {
        if (isChecked) {
            return prevCheckedCourses.filter((course) => course !== row);
        } else {
            return [...prevCheckedCourses, row];
        }
        });
    };

    const isCheckboxDisabled = (row) => checkedCourses.length >= 8 && !checkedCourses.includes(row);
    const isLimitReached = checkedCourses.length >= 8;
    return(
        <>
            <Header/>
            <div className="row-coursesdec-title">
                <div className='row-coursesdec-title-col1' style={{flex:'33%'}}>
                <h2>Δήλωση Μαθημάτων</h2>    
                </div>
                <div className='row-coursesdec-title-col2' style={{flex:'33%'}}>
                {isLimitReached && (
                    <div style={{ color: "red", marginTop: "10px" }}>
                        Το όριο δηλωμένων μαθημάτων σας είναι τα 8 μαθήματα
                    </div>
                )}
                </div>
                <div className='row-coursesdec-title-col3' style={{display:'flex',flex:'33%',justifyContent:'flex-end',alignItems:'center',marginRight:'10px'}}>
                <Button variant='outlined' color="success" sx={{textTransform:"none", marginRight:'10px'}}>Προσωρινή Αποθήκευση</Button><Button variant="contained" color="success" sx={{textTransform:"none"}}>Οριστική Αποθήκευση</Button>
                </div>
            </div>
            <div className="row-coursesdec-1">
                <h3>1ο Εξάμηνο</h3>
                <TableContainer component={Paper}>
                        <Table sx={{width:"100%"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                    <TableCell style={{ width: '5%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '10%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsSem1.map((row)=>(
                                <TableRow key={row.name}>
                                    <TableCell>{row.subject}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.professor}</TableCell>
                                    <TableCell>{row.period}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.points}</TableCell>
                                    <TableCell><Checkbox 
                                    checked={checkedCourses.includes(row)}
                                    onChange={() => handleCheckboxChange(row)}
                                    disabled={isCheckboxDisabled(row)}/>
                                    </TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="row-coursesdec-2">
                <h3>2ο Εξάμηνο</h3>
                    <TableContainer component={Paper}>
                    <Table sx={{width:"100%"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                    <TableCell style={{ width: '5%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '10%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsSem2.map((row)=>(
                                <TableRow key={row.name}>
                                    <TableCell>{row.subject}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.professor}</TableCell>
                                    <TableCell>{row.period}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.points}</TableCell>
                                    <TableCell><Checkbox
                                    checked={checkedCourses.includes(row)}
                                    onChange={() => handleCheckboxChange(row)}
                                    disabled={isCheckboxDisabled(row)}/>
                                    </TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="row-coursesdec-3">
                <h3>3ο Εξάμηνο</h3>
                    <TableContainer component={Paper}>
                    <Table sx={{width:"100%"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                    <TableCell style={{ width: '5%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '10%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsSem3.map((row)=>(
                                <TableRow key={row.name}>
                                    <TableCell>{row.subject}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.professor}</TableCell>
                                    <TableCell>{row.period}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.points}</TableCell>
                                    <TableCell><Checkbox
                                    checked={checkedCourses.includes(row)}
                                    onChange={() => handleCheckboxChange(row)}
                                    disabled={isCheckboxDisabled(row)}/>
                                    </TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                                

                
            </div>
        </>
    )
}



export default CoursesDec;