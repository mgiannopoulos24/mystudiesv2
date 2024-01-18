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
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Alert from '@mui/material/Alert';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import BackToTop from '../../BackToTop/BackToTop';


function createData(subject, id, professor,  type,points,declare) {
    return {subject, id, professor,  type,points,declare};
}

const rowsSem1 = [
    createData('Εισαγωγή στον Προγραμματισμό', 'Κ04', 'Αυγερινός','Υποχρεωτικό', 7,),
    createData('Γραμμική Άλγεβρα', 'Κ03', 'Νάκος',   'Υποχρεωτικό', 6, ),
    createData('Διακριτά Μαθηματικά', 'Κ09', 'Τζάμος',  'Υποχρεωτικό', 7, ),
    createData('Εισαγωγή στην πληροφορική και τις τηλεπικοινωνίες', 'ΓΠ07', 'Ρούσσου',  'Γενικής Παιδείας',2, ),
    createData('Λογική Σχεδίαση', 'Κ02', 'Καρακώστας',  'Υποχρεωτικό', 6, ),
];

const rowsSem2 = [
    createData('Ανάλυση Ι', 'Κ01', 'Δοδός',  'Υποχρεωτικό', 8, ),
    createData('Αρχιτεκτονική Υπολογιστών Ι', 'Κ14', 'Γκιζόπουλος',  'Υποχρεωτικό', 7, ),
    createData('Δομές Δεδομένων και Τεχνικές Προγραμματισμού', 'Κ08', 'Κουμπαράκης/Χατζηκοκολάκης',  'Υποχρεωτικό', 7, ),
    createData('Εφαρμοσμένα Μαθηματικά', 'Κ20β', 'Λουκά', 'Προαιρετικό', 6, ),
    createData('Ηλεκτρομαγνητισμός', 'Κ12', 'Τσίπουρας',  'Υποχρεωτικό', 8, ),
];

const rowsSem3 = [
    createData('Ανάλυση ΙΙ', 'Κ06', 'Χαλικιάς', 'Υποχρεωτικό', 8, ),
    createData('Αντικειμενοστραφής Προγραμματισμός', 'Κ10', 'Λυγίζου', 'Υποχρεωτικό', 8,),
    createData('Πιθανότητες και Στατιστική', 'Κ13', 'Αχλιόπτας',  'Υποχρεωτικό', 6, ),
    createData('Σήματα και Συστήματα', 'Κ11', 'Παναγάκης', 'Υποχρεωτικό', 6, ),
    createData('Εργαστήριο Κυκλωμάτων και Συστήματων', 'Κ11ε', 'Πίνο', 'Προαιρετικό Εργαστήριο', 2,),
];

const rowsSem5=[
    createData('Τεχνητή Νοημοσύνη','ΥΣ02', 'Κουμπαράκης','Προαιρετικό', 6,),
    createData('Γραφικά Ι','ΘΠ02','Θεοχάρης','Προαιρετικό',6),
    createData('Λειτουργικά Συστήματα','Κ22','Δελής/Χατζηευθυμιάδης','Υποχρεωτικό',8,),
]
const CoursesDec=()=>{
    const [checkedCourses, setCheckedCourses] = useState([]);
    const [temporarySaveMessage, setTemporarySaveMessage] = useState(null);
    const [submissionSuccessMessage, setSubmissionSuccessMessage] = useState('');
    const [limitReachedMessage, setLimitReachedMessage] = useState('');
    const [showNotification, setShowNotification] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    
    

    const handleNotificationResponse = (autoSelect) => {
        setShowNotification(false);

        if (autoSelect) {
            // Auto-select the checkbox for the specified course (e.g., "Ανάλυση Ι")
            const courseToAutoSelect = rowsSem2.find((row) => row.subject === 'Ανάλυση Ι');
            if (courseToAutoSelect) {
              // Update the state to check the checkbox
              setCheckedCourses((prevCheckedCourses) => {
                if (!prevCheckedCourses.some((course) => course.subject === courseToAutoSelect.subject)) {
                  return [...prevCheckedCourses, courseToAutoSelect];
                }
                return prevCheckedCourses;
              });
            }
          }
        
      };

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


    const handleLimitReachedMessage = () => {
        setLimitReachedMessage("Tο όριο μαθημάτων που μπορείτε να δηλώσετε είναι 8.");
    };

    useEffect(() => {
        if (isLimitReached) {
            handleLimitReachedMessage();
            setTimeout(() => {
                setLimitReachedMessage(null);
              }, 3000);
        }
    }, [isLimitReached]);

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
        setSubmitted(true); // Set submitted to true on submission

        
        // Set the success message
        setSubmissionSuccessMessage('Η δήλωση σας έγινε με επιτυχία');
        
        setTimeout(() => {
          setSubmissionSuccessMessage(null);
        }, 3000);
      

      
        // Close the dialog or perform any other necessary actions
        handleCloseDialog();
      };

      
    return(
        <>
            <Header/>
            <Breadcrumbs/>
            <BackToTop/>
            <div className="row-coursesdec-title">
                <div className='row-coursesdec-title-col1' style={{flex:'33%'}}>
                <h2>Δήλωση Μαθημάτων</h2>    
                </div>
                <div className='row-coursesdec-title-col2' style={{flex:'33%',textAlign:'center'}}>
                {limitReachedMessage && (
                    <Alert severity="warning" style={{ marginTop: "10px" }}>
                        {limitReachedMessage}
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
                        <p>Είστε σίγουρος ότι θέλετε να δηλώσετε τα παρακάτω μαθήματα;</p>
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
            {showNotification && (
                <Alert severity="warning" sx={{
                    position: 'absolute',
                    top: 10,
                    left: 30,
                    zIndex: 1000,
                    width: '20%',
                    opacity:"0.9",
                    
                  }} onClose={() => handleNotificationResponse(false)}>
                <p>
                    Δεν έχετε περάσει τα μαθήματα Ανάλυση Ι. Θα θέλατε να δηλωθεί αυτόματα;
                </p>
                <div className="notification-buttons" style={{display:"flex",justifyContent:"center"}}>
                    <Button sx={{textTransform:"none"}}variant="contained" color="success" onClick={() => handleNotificationResponse(true)}>
                        Εντάξει
                    </Button>
                </div>
                </Alert>
            )}
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
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
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
                                    <TableCell>{row.subject === 'Γραμμική Άλγεβρα' ? (
                                        <Checkbox
                                            checked={checkedCourses.includes(row)}
                                            onChange={() => handleCheckboxChange(row)}
                                            disabled={submitted || isCheckboxDisabled(row)}
                                        />
                                        ) : (
                                        'Το έχετε περάσει'
                                        )}
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
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
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
                                    <TableCell>{row.subject === 'Ανάλυση Ι' ? (
                                        <Checkbox
                                            checked={checkedCourses.includes(row)}
                                            onChange={() => handleCheckboxChange(row)}
                                            disabled={submitted || isCheckboxDisabled(row)}
                                        />
                                        ) : (
                                        'Το έχετε περάσει'
                                        )}
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
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
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
                                    disabled={submitted || isCheckboxDisabled(row)}/>
                                    </TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className='row-coursesdec-4'>
                <h3>5ο Εξάμηνο</h3>
                    <TableContainer component={Paper}>
                    <Table sx={{width:"100%"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '20%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '20%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Δήλωση</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsSem5.map((row)=>(
                                <TableRow key={row.name}>
                                    <TableCell>{row.subject}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.professor}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.points}</TableCell>
                                    <TableCell><Checkbox
                                    checked={checkedCourses.includes(row)}
                                    onChange={() => handleCheckboxChange(row)}
                                    disabled={submitted || isCheckboxDisabled(row)}/>
                                    </TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div><br></br>
        </>
    )
}



export default CoursesDec;