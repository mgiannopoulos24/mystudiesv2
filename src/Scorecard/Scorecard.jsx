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
import './Scorecard.css'

function createData(semester, subjects) {
  return {
    semester,
    subjects,
  };
}

function Row(props) {
  const { row } = props;
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




export const Scorecard = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  return (
    <>
    <div className='row-1-sub'>
        <IconButton size="small"><SearchIcon/></IconButton>
        <input type="text" placeholder="Κωδικός, Τίτλος ή Διδάσκων" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
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

export default Scorecard;
