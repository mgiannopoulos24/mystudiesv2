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
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles'
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import {doc, getDoc, updateDoc} from 'firebase/firestore'



import './CoursesDec.css'

function createData(semester, subjects) {
  return {
    semester,
    subjects,
  };
}


const TemporaryButton = styled(Button)({
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

const DefiniteButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '2px 5px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#008000',
  borderColor: '#00FF00',
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
    backgroundColor: '#008000',
    borderColor: '#008000',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#00FF00',
    borderColor: '#00FF00',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
const OptionsBox = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '150px',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '5px',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
});

const TopRow = styled('div')({
  marginBottom: '10px', // Adjust as needed
});

const BottomRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between', // Align items with space between
});

const YesButton = styled(Button)({
  textTransform: 'none', // Keep the original case of the text
  // Add other button styles as needed
});

const EditButton = styled(Button)({
  textTransform: 'none', // Keep the original case of the text
  // Add other button styles as needed
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const handleCheckboxChange = (semester, subjectId) => {
    // Toggle the checkbox state
    const updatedSubjects = row.subjects.map(subject =>
      subject.id === subjectId
        ? {
            ...subject,
            checkbox: { ...subject.checkbox, checked: !subject.checkbox.checked },
          }
        : subject
    );

    // Update the state or perform any other actions based on the updatedSubjects
  };

  
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
                      <TableCell style={{ textAlign: 'right' }}>
                      <Checkbox checked={subjectRow.checkbox.checked} onChange={() => handleCheckboxChange(row.semester, subjectRow.id)}/></TableCell>
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
      checkbox: { label: 'Checkbox 1', checked: false },
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
    },
    // Add other subjects for the  semester
  ]),
];




export const CoursesDec = ({ db, userEmail }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleDefiniteButtonClick = () => {
    setShowOptions(true);
  };

  const handleEditClick = () => {
    setShowOptions(false);
    // Perform any additional actions when 'Edit' is clicked
  };

  const handleYesClick = async () => {
    // Assuming you have the user's email as a prop
    try {
      const userRef = doc(db, 'users', userEmail);

      // Get the user's current data
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();

      // Update the user's courses with the selected ones
      const updatedCourses = [...userData.courses, ...selectedCourses];

      // Update the user's data in the database
      await updateDoc(userRef, { courses: updatedCourses });

      // Close the options box
      setShowOptions(false);

    } catch (error) {
      console.error('Error updating user courses:', error);
    }
  };


  return (
    <>
    <div className="three-column-coursedec">
      <div className="column-1-coursedec"><TemporaryButton variant="outlined">Προσωρινή Υποβολή</TemporaryButton><span><DefiniteButton variant="contained" onClick={handleDefiniteButtonClick}>Οριστική Υποβολή</DefiniteButton></span>
      {showOptions && (
        <OptionsBox>
          <TopRow>
            <h2>Εν Χριστώ Αδερφέ μου, είσαι σίγουρος ότι θέλεις να υποβάλεις την αίτηση σου;</h2>
          </TopRow>
          <BottomRow>
            <YesButton variant="contained" onClick={handleYesClick}>ΝΑΙ.Είμαι έτοιμος για όλα</YesButton>
            <EditButton variant="outlined" onClick={handleEditClick}>Συγγνώμη αμάρτησα. Πάω πίσω</EditButton>
          </BottomRow>
        </OptionsBox>
      )}
      </div>
      <div className="column-2-coursedec"></div>
      <div className="column-3-coursedec">
        
        <IconButton size="small"><SearchIcon/></IconButton>
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

export default CoursesDec;
