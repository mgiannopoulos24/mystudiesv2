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

function createData(subject, id, professor, period, type,points,grade) {
    return {subject, id, professor, period, type,points,grade};
}

const rowsSem1 = [
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
    createData('ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ', 'Κ08', 'ΑΥΓΕΡΙΝΟΣ', 'ΣΕΠΤΕΜΒΡΙΟΣ 2023-24', 'Υ', 6, 6),
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

const DGrades =()=> {


    return(
        <>
        <Header/>
        <div className="two-columns-dgrade">
            <div className="column-1-dgrade">
                <div className="row-dgrade">
                    <h2>Αναλυτική Βαθμολογία</h2><span><Button variant="outlined" sx={{textTransform:"none"}}>Εκτύπωση Αναλυτικής</Button></span>
                </div>
                <div className="row-sort">
                <Card sx={{width:'100%',display:'flex',background:""}}>
                    <div className="sort-column-1" style={{display:'flex',flex:"40%",alignItems:"center"}}>
                        Ταξινόμηση κατά 
                    </div>
                    <div className="sort-column-2" style={{display:'flex',flex:"60%",alignItems:"center"}}>
                        Αναζήτηση με:
                    </div>
                </Card>
                </div>
                <div className="row-filter">

                </div>
                <div className="row-sem-1">
                    <h3>1ο Εξάμηνο</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{width: '100%'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '15%', fontWeight: 'bold'}}>Μάθημα</TableCell>
                                    <TableCell style={{ width: '5%', fontWeight: 'bold' }}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '10%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Βαθμός</TableCell>
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
                                    <TableCell><h2 style={{ color: 'green' }}>{row.grade}</h2></TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="row-sem-2">
                <h3>2ο Εξάμηνο</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{width: '100%'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '15%' , fontWeight: 'bold'}}>Μάθημα</TableCell>
                                    <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Βαθμός</TableCell>
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
                                    <TableCell><h2 style={{ color: 'green' }}>{row.grade}</h2></TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="row-sem-3">
                <h3>3ο Εξάμηνο</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{width: '100%'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '15%' , fontWeight: 'bold'}}>Μάθημα</TableCell>
                                    <TableCell style={{ width: '5%' , fontWeight: 'bold'}}>Κωδικός</TableCell>
                                    <TableCell style={{ width: '10%', fontWeight: 'bold' }}>Διδάσκων</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Εξεταστική</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Τύπος</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>ΔΜ</TableCell>
                                    <TableCell style={{ width: '10%' , fontWeight: 'bold'}}>Βαθμός</TableCell>
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
                                    <TableCell><h2 style={{ color: 'green' }}>{row.grade}</h2></TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            
            <div className="column-2-dgrade">
                <Card sx={{width:"90%",height:"25%", marginLeft:"25px"}}>
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