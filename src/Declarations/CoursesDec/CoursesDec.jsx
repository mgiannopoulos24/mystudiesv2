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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Alert from '@mui/material/Alert';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';

function createData(subject, id, professor,  type,points,declare) {
    return {subject, id, professor,  type,points,declare};
}

const rowsSem1 = [
    createData('Εισαγωγή στον Προγραμματισμό', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',   'Υ', 6, ),
    createData('Γραμμική Άλγεβρα', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',   'Υ', 6, ),
    createData('Διακριτά Μαθηματικά', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',  'Υ', 6, ),
    createData('Εισαγωγή στην πληροφορική και τις τηλεπικοινωνίες', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',  'Υ', 6, ),
    createData('Λογική Σχεδίαση', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',  'Υ', 6, ),
];

const rowsSem2 = [
    createData('Ανάλυση Ι', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',  'Υ', 6, ),
    createData('Αρχιτεκτονική Υπολογιστών Ι', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',  'Υ', 6, ),
    createData('Δομές Δεδομένων και Τεχνικές Προγραμματισμού', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',  'Υ', 6, ),
    createData('Εφαρμοσμένα Μαθηματικά', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'Υ', 6, ),
    createData('Ηλεκτρομαγνητισμός', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',  'Υ', 6, ),
];

const rowsSem3 = [
    createData('Ανάλυση ΙΙ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'Υ', 6, ),
    createData('Αντικειμενοστραφής Προγραμματισμός', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'Υ', 6,),
    createData('Πιθανότητες και Στατιστική', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ',  'Υ', 6, ),
    createData('Σήματα και Συστήματα', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'Υ', 6, ),
    createData('Εργαστήριο Κυκλωμάτων και Συστήματων', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'Υ', 6,),
];

const CoursesDec=()=>{
    const [checkedCourses, setCheckedCourses] = useState([]);
    const [temporarySaveMessage, setTemporarySaveMessage] = useState(null);
    const [submissionSuccessMessage, setSubmissionSuccessMessage] = useState('');
    const handleCheckboxChange = (row) => {
        // Check if the checkbox should be disabled
        if (isCheckboxDisabled(row)) {
          return;
        }
      
        // Toggle the checkbox status
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

    const handleTemporarySave = () => {
        setTemporarySaveMessage('Η προσωρινή αποθήκευση έγινε με επιτυχία');
        setTimeout(() => {
            setTemporarySaveMessage(null);
          }, 3000);
      };

      const [openDialog, setOpenDialog] = useState(false);

      const handleOpenDialog = () => {
        setOpenDialog(true);
      };
    
      const handleCloseDialog = () => {
        setOpenDialog(false);
      };
    
      const handleFinalSubmit = () => {
        handleOpenDialog(); // Open the dialog after submission
      };
    

      const handleSubmission = () => {
        
      
        // Set the success message
        setSubmissionSuccessMessage('Η δήλωση σας έγινε με επιτυχία');
        setTimeout(() => {
            setSubmissionSuccessMessage(null);
          }, 3000);
      
        // Reset the checked courses or perform any other necessary actions
        setCheckedCourses([]);
      
        // Close the dialog or perform any other necessary actions
        handleCloseDialog();
      };
      
    return(
        <>
            <Header/>
            <Breadcrumbs/>
            <div className="row-coursesdec-title">
                <div className='row-coursesdec-title-col1' style={{flex:'33%'}}>
                <h2>Δήλωση Μαθημάτων</h2>    
                </div>
                <div className='row-coursesdec-title-col2' style={{flex:'33%',textAlign:'center'}}>
                {isLimitReached && (
                    <Alert severity="error" style={{ marginTop: "10px" }}>
                            Το όριο δηλωμένων μαθημάτων σας είναι τα 8 μαθήματα
                    </Alert>
                )}
                {temporarySaveMessage && (
                    <Alert severity="success" style={{ marginTop: "10px" }}>
                        {temporarySaveMessage}
                    </Alert>
                )}
                {submissionSuccessMessage && (
                    <Alert severity="success" style={{ marginTop: "10px" }}>
                        {submissionSuccessMessage}
                    </Alert>
                )}
                </div>
                <div className='row-coursesdec-title-col3' style={{display:'flex',flex:'33%',justifyContent:'flex-end',alignItems:'center',marginRight:'10px'}}>
                <Button variant='outlined' color="success" sx={{textTransform:"none", marginRight:'10px'}} onClick={handleTemporarySave}>Προσωρινή Αποθήκευση</Button><Button variant="contained" color="success" sx={{textTransform:"none"}} onClick={handleFinalSubmit}>Οριστική Αποθήκευση</Button>
                </div>
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle sx={{display:"flex",justifyContent:"center"}}>Οριστική Υποβολή</DialogTitle>
                        <DialogContent>
                        <p>Είστε σίγουρος ότι θέλετε να υποβάλετε τις επιλογές σας;</p>
                        <ul>
                            {checkedCourses.map((course) => (
                            <li key={course.id}>{course.subject}</li>
                            ))}
                        </ul>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseDialog} variant="contained" color='error' sx={{textTransform:"none"}}>
                            Ακύρωση
                        </Button>
                        <Button onClick={handleSubmission}  variant="contained" color='success' sx={{textTransform:"none"}}>
                            Υποβολή
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className="row-coursesdec-1">
                <h3>1ο Εξάμηνο</h3>
                <TableContainer component={Paper}>
                        <Table sx={{width:"100%"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '20%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '15%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsSem1.map((row)=>(
                                <TableRow key={row.name}>
                                    <TableCell>{row.subject}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.professor}</TableCell>
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
                                    <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '20%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '15%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsSem2.map((row)=>(
                                <TableRow key={row.name}>
                                    <TableCell>{row.subject}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.professor}</TableCell>
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
                                    <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '20%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '15%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsSem3.map((row)=>(
                                <TableRow key={row.name}>
                                    <TableCell>{row.subject}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.professor}</TableCell>
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