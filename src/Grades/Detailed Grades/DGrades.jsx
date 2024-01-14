import "./DGrades.css"
import Button  from "@mui/material/Button";
import Header from "../../Header_Page/Header";
import  Card  from "@mui/material/Card";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React,{ useState} from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SubjectCard from "../../SubjectCard/SubjectCard";





const DGrades =()=> {

    const [selectedOption, setSelectedOption] = useState("All");
    const [filterText, setFilterText] = useState("");
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const handleFilterChange = (event) => {
        setFilterText(event.target.value);
      };
    
    return(
        <>
        <Header/>
        <Breadcrumbs/>
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
                                  <Select value={selectedOption} onChange={handleDropdownChange} sx={{width:'250px', margin:'0 15px',size:"xsmall",height:"40px"}}>
                                    <MenuItem value="All">Όλη η Βαθμολογία</MenuItem>
                                    <MenuItem value="Passed">Περασμένα μόνο</MenuItem>
                                    <MenuItem value="Not passed">Χρωστούμενα</MenuItem>
                                  </Select>
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
                    <br></br>
                    <div className="row-semesters">
                        <SubjectCard title={"Εισαγωγή στον προγραμματισμό"} id={"Κ04"} professor={"Παναγιώτης Σταματόπουλος"} period={"Φεβρουάριος 2023"} points={"7"} type={"Yποχρεωτικό"} grade={"8"}/>
                        <SubjectCard title={"Γραμμική Άλγεβρα"} id={"Κ03"} professor={"Αρχοντία Γιαννοπούλου"} period={"Σεπτέμβριος 2023"} points={"6"} type={"Yποχρεωτικό"} grade={"4"}/>
                        <SubjectCard title={"Διακριτά Μαθηματικά"} id={"Κ09"} professor={"Χρήστος Τζάμος"} period={"Φεβρουάριος 2023"} points={"7"} type={"Yποχρεωτικό"} grade={"7"}/>
                        <SubjectCard title={"Λογική Σχεδίαση"} id={"Κ02"} professor={"Αντώνιος Πασχάλης"} period={"Σεπτέμβριος 2023"} points={"6"} type={"Yποχρεωτικό"} grade={"10"}/>
                        <SubjectCard title={"Ανάλυση Ι"} id={"Κ01"} professor={"Παντελεήμων Δοδός"} period={"Σεπτέμβριος 2023"} points={"8"} type={"Yποχρεωτικό"} grade={"3"}/>
                        <SubjectCard title={"Αρχιτεκτονική Υπολογιστών Ι"} id={"Κ14"} professor={"Δημήτριος Γκιζόπουλος"} period={"Ιούνιος 2023"} points={"7"} type={"Yποχρεωτικό"} grade={"5"}/>
                        <SubjectCard title={"Δομές Δεδομένων και Τεχνικές Προγραμματισμού"} id={"Κ08"} professor={"Μανόλης Κουμπαράκης"} period={"Ιούνιος 2023"} points={"7"} type={"Yποχρεωτικό"} grade={"9"}/>
                        <SubjectCard title={"Ηλεκτρομαγνητισμός, Οπτική και Σύγχρονη φυσική"} id={"Κ12"} professor={"Αριστείδης Τσίπουρας"} period={"Ιούνιος 2023"} points={"8"} type={"Yποχρεωτικό"} grade={"10"}/>
                    </div>
                    <br></br>
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