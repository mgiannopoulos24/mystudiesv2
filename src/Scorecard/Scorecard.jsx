import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
//import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
//import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import Button from '@mui/material/Button';
//import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {styled} from '@mui/material/styles'
import { useState, useRef } from 'react';
import './Scorecard.css'
//import PrintableTable from './PrintableTable';


const GradesButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '2px 5px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  borderColor: '#008000',
  color:'#008000',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgba(0, 99, 204, 0.2)',
    borderColor: '#008000',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#008000',
    borderColor: '#008000',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

// const DropdownMenu = styled('select')({
//   appearance: 'none',
//   cursor: 'pointer',
//   '&:hover': {
//     background: '#333', // Replace with your desired darker color
//     color: '#fff', // Replace with your desired text color
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     top: '50%',
//     right: '8px',
//     transform: 'translateY(-50%)',
//     borderTop: '6px solid transparent',
//     borderBottom: '6px solid transparent',
//     borderLeft: '6px solid #333', // Adjust the color and size as needed
//   }
// });

function createData(semester, subjects) {
  return {
    semester,
    subjects,
  };
}

function Row(props) {
  const { row} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell style={{ width: '33%'}}>  
        {row.semester === 'Πρόγραμμα Σπουδών'?(
          <span>{row.semester}</span>
        ):(     
          <>
          
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <span>{row.semester}</span>
          </> 
        )}
        </TableCell>
        <TableCell style={{ width: '33%' }}></TableCell> {/*spacing*/}
        <TableCell style={{ width: '33%' }}></TableCell> {/*spacing*/}
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} style={{ paddingBottom: 0, paddingTop: 0 }} >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Μαθήματα
              </Typography>
              <Table size="small" aria-label="subjects">
                <TableHead>
                  <TableRow>
                    <TableCell>Κωδικός</TableCell>
                    <TableCell>Τίτλος</TableCell>
                    <TableCell>Διδάσκων</TableCell>
                    <TableCell>Συγγράμματα</TableCell>
                    <TableCell>ECTS</TableCell>
                    <TableCell>Βαθμός</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.subjects.map((subjectRow) => (
                    <TableRow key={subjectRow.id}>
                      <TableCell>{subjectRow.id}</TableCell>
                      <TableCell>{subjectRow.title}</TableCell>
                      <TableCell>{subjectRow.professor}</TableCell>
                      <TableCell>{subjectRow.books}</TableCell>
                      <TableCell>{subjectRow.points}</TableCell>
                      <TableCell>{subjectRow.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    semester: PropTypes.string.isRequired,
    subjects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        professor: PropTypes.string.isRequired,
        books: PropTypes.node.isRequired,
        points: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};


const rows = [
  createData('Εξάμηνο 1', [
    {
      id: 'Κ04',
      title: 'Εισαγωγή στον Προγραμματισμό',
      professor: 'Σταματόπουλος',
      books: <a href="https://www.example.com/book1" target="_blank" rel="noreferrer">Βιβλίο 1</a>,
      points: 6,
      grade: 4,
    },
    // Add other subjects for the first semester
  ]),
  createData('Εξάμηνο 2', [
    {
      id: 'K01',
      title: 'Ανάλυση Ι',
      professor: 'Δοδός',
      books: <a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">ΑΙΜΑ</a>,
      points: 3,
      grade: 10,
    },
    // Add other subjects for the  semester
  ]),
  // Repeat for other semesters
  createData('Εξάμηνο 3', [
    {
      id: 'Κ10',
      title: 'Αντικειμενοστραφής Προγραμματισμός',
      professor: 'Καράλη',
      books: <a href="" target="_blank" rel="noreferrer">Βιβλίο</a>,
      points: 3,
      grade: 10,
    },
    // Add other subjects for the  semester
  ]),
  createData('Εξάμηνο 4', [
    {
      id: 'Κ29',
      title: 'Σχεδίαση και Χρήση Βάσεων Δεδομένων',
      professor: 'Γουνόπουλος',
      books: <a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">Βιβλίο</a>,
      points: 3,
      grade: 10,
    },
    // Add other subjects for the  semester
  ]),
  createData('Εξάμηνο 5', [
    {
      id: 'YΣ02',
      title: 'Τεχνητή Νοημοσύνη',
      professor: 'Κουμπαράκης',
      books: <a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">ΑΙΜΑ</a>,
      points: 3,
      grade: 10,
    },
    // Add other subjects for the  semester
  ]),
  createData('Εξάμηνο 6', [
    {
      id: 'ΥΣ05',
      title: 'Προγραμματισμός Συστήματος',
      professor: 'Ρουσσοπούλου',
      books: <a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">ΑΙΜΑ</a>,
      points: 3,
      grade: 10,
    },
    // Add other subjects for the  semester
  ]),
  createData('Εξάμηνο 7', [
    {
      id: 'ΥΣ08',
      title: 'Επικοινωνία Ανθρώπου Μηχανής',
      professor: 'Ρούσσου',
      books: <a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">ΑΙΜΑ</a>,
      points: 3,
      grade: 10,
    },
    // Add other subjects for the  semester
  ]),
  createData('Εξάμηνο 8', [
    {
      id: 'ΘΠ05',
      title: 'Κρυπτογραφία',
      professor: 'Χατζηκοκολάκης',
      books: <a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">ΑΙΜΑ</a>,
      points: 3,
      grade: 10,
    },
    // Add other subjects for the  semester
  ]),
];




export const Scorecard = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  //const [showOptions, setShowOptions] = useState(false);
  const tableRef = useRef(null);

  const handlePrint = () => {
    // Open a new window for printing
    const printWindow = window.open('', '');
    // Render the printable component in the new window
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<div style="margin: 20px;">');
    printWindow.document.write('<style>@media print{body{margin:0;padding:0}.no-print, .no-print *{display:none !important;}}</style>');
    printWindow.document.write('<PrintableTable rows={rows} />');
    printWindow.document.write('</div></body></html>');
    // Close the document stream
    printWindow.document.close();
    // Print the window
    printWindow.print();
  };

  return (
    <>
    <div className='three-column-score'>
      <div className='column-1-score'>
        <GradesButton variant="outlined" onClick={handlePrint}>Εκτύπωση Βαθμολογίου</GradesButton>
      </div>
      <div className='column-2-score'></div>
      <div className='column-3-score'>
          <IconButton size="small" disabled><SearchIcon/></IconButton>
          <input type="text" placeholder="Κωδικός, Τίτλος ή Διδάσκων" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
      </div>
    </div>
    <div>
    <TableContainer component={Paper}>
      <Table ref={tableRef} aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={3}><h2>Πρόγραμμα Σπουδών</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const filteredSubjects=row.subjects.filter((subject)=>
                Object.values(subject).some(
                  (value)=>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchTerm.toLowerCase())
                  ) ||
                  (subject.id &&
                    subject.id.toLowerCase().includes(searchTerm.toLowerCase()))
                );
            if (filteredSubjects.length>0){
                return <Row key={row.semester}row={{...row,subjects:filteredSubjects}}/>
            }

            return null;
          })}
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
};

export default Scorecard;
