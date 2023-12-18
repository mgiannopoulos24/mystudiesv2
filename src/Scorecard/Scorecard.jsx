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
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import Button from '@mui/material/Button';

import {styled} from '@mui/material/styles'
import { useState } from 'react';
import './Scorecard.css'



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

const DropdownMenu = styled('select')({
  appearance: 'none',
  cursor: 'pointer',
  '&:hover': {
    background: '#333', // Replace with your desired darker color
    color: '#fff', // Replace with your desired text color
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '8px',
    transform: 'translateY(-50%)',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft: '6px solid #333', // Adjust the color and size as needed
  }
});

const CloseButton = styled(Button)({
  margin: '3px 3px 3px auto',
  padding: '3px 3px 5px 5px',
  color: 'black',
  '&:hover': {
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
    color: 'white',
    boxShadow: 'none',
  }, 
});

const HeaderColumns = styled('div')({
  display: 'flex',
  justifyContent: 'space-between', // Space columns evenly
  '& > div': {
    flex: '0 0 33%',
    display:'flex',
    flexDirection:'column', // Each column has a flex of 33%
    '&:last-child': {
      alignSelf: 'flex-end', // Align the last column to the end
    },
    '&:nth-child(2)': {
      alignItems: 'center',
      padding: '0', 
      margin: '0',// Align the content of the second column to the center
      '& h4': {
        margin: '0',
        marginTop: '7px' // Remove margin from h2 element to prevent extra space
      },
    },
  }
});


const AdditionalRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between', // Space columns evenly
  '& > div': {
    flex: '0 0 33%', // Each column has a flexible width
    '&:first-child': {
      display: 'flex',
      justifyContent:'center',
      alignSelf:'center',
    },
    '&:last-child': {
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight:'10px',
    },
  },
});


const OptionsBox = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '5px',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column', // Create two rows
  width: '600px',
  height: '500px',
});

function createData(semester, subjects) {
  return {
    semester,
    subjects,
  };
}

function Row(props) {
  const { row,userCourses } = props;
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
                      <TableCell>{userCourses.find((course) => course.name === subjectRow.title)?.grade || '-'}</TableCell>
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
      id: 'YΣ01',
      title: 'Εισαγωγή στην Πληροφορική',
      professor: 'Παπαδόπουλος',
      books: <a href="https://www.example.com/book1" target="_blank" rel="noreferrer">Βιβλίο 1</a>,
      points: 6,
      grade: 4,
    },
    // Add other subjects for the first semester
  ]),
  createData('Εξάμηνο 2', [
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
  // Repeat for other semesters
  createData('Εξάμηνο 3', [
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
  createData('Εξάμηνο 4', [
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
      id: 'YΣ02',
      title: 'Τεχνητή Νοημοσύνη',
      professor: 'Κουμπαράκης',
      books: <a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">ΑΙΜΑ</a>,
      points: 3,
      grade: 10,
    },
    // Add other subjects for the  semester
  ]),
  createData('Εξάμηνο 7', [
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
  createData('Εξάμηνο 8', [
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
];




export const Scorecard = ({userCourses}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showOptions, setShowOptions] = useState(false);
  const handleCloseOptions = () => {
    setShowOptions(false);
  };

  const handleGradesButtonClick = () => {
    setShowOptions(true);
  };

  return (
    <>
    <div className='three-column-score'>
      <div className='column-1-score'>
        <GradesButton variant="outlined" onClick={handleGradesButtonClick}>Εκτύπωση Βαθμολογίου</GradesButton>
        {showOptions && (
          <OptionsBox>
            <HeaderColumns>
              <div></div>
              <div><h4>Βαθμολόγιο</h4></div>
              <div><CloseButton onClick={handleCloseOptions}>X</CloseButton></div>
            </HeaderColumns>
            <AdditionalRow>
              <div>Προσπάθειες<span>
                <DropdownMenu>
                  <option value="All">Όλες</option>
                  <option value="Fail">Αποτυχία</option>
                  <option value="Pass">Επιτύχια</option>
                </DropdownMenu>
                </span></div>
              <div>
              </div>
              <div>
                <PrintRoundedIcon></PrintRoundedIcon><FileDownloadRoundedIcon></FileDownloadRoundedIcon>
              </div>
            </AdditionalRow>
          </OptionsBox>
        )}
      </div>
      <div className='column-2-score'></div>
      <div className='column-3-score'>
          <IconButton size="small" disabled><SearchIcon/></IconButton>
          <input type="text" placeholder="Κωδικός, Τίτλος ή Διδάσκων" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
      </div>
    </div>
    <div>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
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
                return <Row key={row.semester}row={{...row,subjects:filteredSubjects}} userCourses={userCourses}/>
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
