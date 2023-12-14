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

import './Subjects.css';

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
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.semester}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Μαθήματα
              </Typography>
              <Table size="small" aria-label="subjects">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
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

export const Subjects = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell><h1>Μαθήματα</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.semester} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Subjects;
