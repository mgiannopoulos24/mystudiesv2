import "./DGrades.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button  from "@mui/material/Button";
import Header from "../../Header_Page/Header";
import  Card  from "@mui/material/Card";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React,{ useState} from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'
import  Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

function createData(title, sem1Data, sem2Data) {
    return {
      title,
      Sem1: sem1Data,
      Sem2: sem2Data,
    };
  }

const rows = [
  createData("Εξάμηνο 1", [
    {
        subject: "Γραμμική Άλγεβρα",
        id: "Κ03",
        professor: "Νάκος",
        period: "Εξεταστική 1",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 7,
    },
    {
        subject: "Διακριτά Μαθηματικά",
        id: "Κ09",
        professor: "Τζάμος",
        period: "Εξεταστική 2",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 8,
    },
    {
        subject: "Εισαγωγή στην πληροφορική και τις τηλεπικοινωνίες",
        id: "ΓΠ",
        professor: "Ρούσσου",
        period: "Εξεταστική 2",
        type: "Γενικής Παιδείας",
        points: 6,
        grade: 8,
    },
    {
        subject: "Εισαγωγή στον Προγραμματισμό",
        id: "Κ06",
        professor: "Αυγερινός",
        period: "Εξεταστική 2",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 8,
    },
    {
        subject: "Εργαστήριο Λογικής Σχεδίασης",
        id: "Κ02Ε",
        professor: "Βασιλόπουλος",
        period: "Εξεταστική 2",
        type: "Αυτοτελές Προαιρετικό Εργαστήριο",
        points: 6,
        grade: 8,
    },
    {
        subject: "Λογική Σχεδίαση",
        id: "Κ02",
        professor: "Καρακώστας",
        period: "Εξεταστική 2",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 8,
    },
    
  ]),
  createData("Εξάμηνο 2", [
    {
      subject: "Ανάλυση Ι",
      id: "Κ01",
      professor: "Δόδος",
      period: "Εξεταστική 3",
      type: "Υποχρεωτικό",
      points: 6,
      grade: 3,
    },
    {
      subject: "Αρχιτεκτονική Υπολογιστών Ι",
      id: "Κ14",
      professor: "Γκιζόπουλος",
      period: "Εξεταστική 4",
      type: "Υποχρεωτικό",
      points: 6,
      grade: 10,
    },
    {
        subject: "Δομές Δεδομένων και Τεχνικές Προγραμματισμού",
        id: "Κ08",
        professor: "Κουμπαράκης/Χατζηκοκολάκης",
        period: "Εξεταστική 4",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 10,
    },
    {
        subject: "Εφαρμοσμένα Μαθηματικά",
        id: "Κ20β",
        professor: "Λουκά",
        period: "Εξεταστική 4",
        type: "Προαιρετικό",
        points: 6,
        grade: 10,
    },
    {
        subject: "Ηλεκτρομαγνητισμός",
        id: "Κ12",
        professor: "Τσίπουρας",
        period: "Εξεταστική 4",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 10,
    },
  ]),
  createData("Εξάμηνο 3", [
    {
      subject: "Ανάλυση ΙΙ",
      id: "Κ06",
      professor: "Χαλικιάς",
      period: "Εξεταστική 5",
      type: "Υποχρεωτικό",
      points: 6,
      grade: 9,
    },
    {
        subject: "Αντικειμενοστραφής Προγραμματισμός",
        id: "Κ10",
        professor: "Λυγίζου",
        period: "Εξεταστική 5",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 9,
    },
    {
        subject: "Εργαστήριο Κυκλωμάτων και Συστήματων",
        id: "Κ11ε",
        professor: "Πίνο",
        period: "Εξεταστική 5",
        type: "Αυτοτελές Προαιρετικό Εργαστήριο",
        points: 6,
        grade: 9,
    },
    {
        subject: "Πιθανότητες και Στατιστική",
        id: "Κ13",
        professor: "Αχλιόπτας",
        period: "Εξεταστική 5",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 9,
    },
    {
        subject: "Σήματα και Συστήματα",
        id: "Κ11",
        professor: "Παναγάκης",
        period: "Εξεταστική 5",
        type: "Υποχρεωτικό",
        points: 6,
        grade: 9,
    },
  ]),
];


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    

    
    return (
      <React.Fragment>
        <TableRow sx={{ display: "flex" }}>
          <TableCell sx={{ display: "flex", flex: "10%",paddingRight:'0' }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell sx={{ display: "flex", flex: "150%", alignItems: "center",fontSize: 18,fontWeight: 'bold'}}>
            {row.title}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Μαθήματα
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ width: "15%", fontWeight: "bold" }}>
                        Μάθημα
                      </TableCell>
                      <TableCell style={{ width: "5%", fontWeight: "bold" }}>
                        Κωδικός
                      </TableCell>
                      <TableCell style={{ width: "10%", fontWeight: "bold" }}>
                        Διδάσκων
                      </TableCell>
                      <TableCell style={{ width: "10%", fontWeight: "bold" }}>
                        Εξεταστική
                      </TableCell>
                      <TableCell style={{ width: "10%", fontWeight: "bold" }}>
                        Τύπος
                      </TableCell>
                      <TableCell style={{ width: "10%", fontWeight: "bold" }}>
                        ΔΜ
                      </TableCell>
                      <TableCell style={{ width: "10%", fontWeight: "bold" }}>
                        Βαθμός
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.Sem1.map((Sem1, index) => (
                      <TableRow key={index}>
                        <TableCell>{Sem1.subject}</TableCell>
                        <TableCell>{Sem1.id}</TableCell>
                        <TableCell>{Sem1.professor}</TableCell>
                        <TableCell>{Sem1.period}</TableCell>
                        <TableCell>{Sem1.type}</TableCell>
                        <TableCell>{Sem1.points}</TableCell>
                        <TableCell>
                            <Typography variant="h6" style={{ color: Sem1.grade > 5 ? 'green' : 'red' }}>
                                {Sem1.grade}
                            </Typography>
                        </TableCell>
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

const title = [
    createData("Εξάμηνο 1"),
    createData("Εξάμηνο 2"),
    createData("Εξάμηνο 3"),
  ];
 




const DGrades =()=> {

    const [selectedOption, setSelectedOption] = useState(null);
    const [filterText, setFilterText] = useState("");
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const handleFilterChange = (event) => {
        setFilterText(event.target.value);
      };
    
    const filteredRows = rows.filter((row) =>
      row.Sem1.some(
        (subject) =>
          subject.subject.toLowerCase().includes(filterText.toLowerCase()) ||
          subject.professor.toLowerCase().includes(filterText.toLowerCase()) ||
          subject.id.toLowerCase().includes(filterText.toLowerCase())
      )
    );  


    
    
    return(
        <>
        <Header/>
        <div className="two-columns-dgrade">
            <div className="column-1-dgrade">
                    <div className="row-dgrade">
                        <h2>Αναλυτική Βαθμολογία</h2><span><Button variant="outlined" sx={{textTransform:"none",}}>Εκτύπωση Αναλυτικής</Button></span>
                    </div>
                    <div className="row-sort">
                    <Card sx={{width:'100%',display:'flex',background:""}}>
                        <div className="sort-column-1" style={{display:'flex',flex:"40%",alignItems:"center",justifyContent:"center"}}>
                            Ταξινόμηση κατά:
                            <span>
                                <div className="filter-select">
                                    <select value={selectedOption} onChange={handleDropdownChange}>
                                        <option value="Semester">Εξάμηνο</option>
                                        <option value="Points">Διδακτικές Μονάδες</option>
                                    </select>
                                </div>
                            </span>
                        </div>
                        <div className="sort-column-2" style={{display:'flex',flex:"60%",alignItems:"center"}}>
                            Αναζήτηση με:
                            <span>
                                <TextField 
                                type="text" 
                                label="Τίτλο μαθήματος, Διδάσκων, Κωδικό" 
                                variant="outlined" 
                                size="small" 
                                sx={{width:'600px', margin:'0 15px'}}
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                   
                                }}
                                value={filterText}
                                onChange={handleFilterChange}
                                />
                            </span>
                        </div>
                    </Card>
                    </div>
                    <div className="row-filter">

                    </div>
                    <br></br>
                    <div className="row-semesters">
                        <TableContainer component={Paper}>
                            <Table sx={{width: '100%'}}>
                                <TableHead>
                                </TableHead>
                                <TableBody>
                                {filteredRows.map((row, index) => (
                                    <Row key={index} row={row} />
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br></br>
                    </div>
            </div>    
            <div className="column-2-dgrade">
                <Card sx={{width:"90%", marginLeft:"25px"}}>
                    <div className="row-card-title"style={{display: 'flex',alignItems: 'center',justifyContent:"center"}}>
                        ΜΑΘΗΜΑΤΑ
                    </div><br></br>
                    <div className="row-round-progress" style={{display: 'flex',alignItems: 'center',justifyContent:"center"}}>
                        <div style={{ width: '150px', height: '150px' }}>
                            <CircularProgressbar 
                            value={75} 
                            text={
                                <tspan>
                                    <tspan x="50" dy="-0.4em" fontSize="18" fontWeight="bold">3/9</tspan>                                    
                                    <tspan x="50" dy="1.2em" fontSize="13" fontWeight="normal">Περασμένα</tspan>
                                </tspan>
                            }
                            styles={buildStyles({rotation:1,textSize: '16px', fontWeight: 'bold',pathTransitionDuration: 0.5})}
                            strokeWidth={8} 
                            trailWidth={8} 
                            />         
                        </div>   
                    </div><br></br>
                    <div className="declared-sub">
                        <div className="d-cell-1"style={{flex:"90%",marginLeft:"20px"}}>Δηλωμένα μαθήματα</div>
                        <div className="d-cell-2" style={{flex:"10%"}}>9</div>
                    </div>
                    <div className="passed-sub">
                        <div className="p-cell-1"style={{flex:"90%",marginLeft:"20px"}}>Περασμένα μαθήματα</div>
                        <div className="p-cell-2" style={{flex:"10%"}}>3</div>
                    </div>
                    <div className="dpoints-sub">
                        <div className="dp-cell-1"style={{flex:"90%",marginLeft:"20px"}}>ΕCTS δηλωμένων μαθημάτων</div>
                        <div className="dp-cell-2" style={{flex:"10%"}}>240</div>
                    </div>
                    <div className="ppoints-sub">
                        <div className="pp-cell-1"style={{flex:"90%",marginLeft:"20px"}}>ΕCTS περασμένων μαθημάτων</div>
                        <div className="pp-cell-2" style={{flex:"10%"}}>210</div>
                    </div>
                </Card>
            </div>
                
        </div>
        </>

    )
}

export default DGrades;