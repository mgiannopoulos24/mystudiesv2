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
import BackToTop from "../../BackToTop/BackToTop";
import PrintIcon from '@mui/icons-material/Print';





const DGrades =()=> {

    const [selectedOption, setSelectedOption] = useState("All");
    const [filterText, setFilterText] = useState("");
    
    
    const handlePrintClick = () => {

        
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.querySelector(".row-sort").style.display = "none";
        document.querySelector(".column-2-dgrade").style.display = "none";
        document.querySelector(".printbutton").style.display = "none";
        document.querySelectorAll(".MuiCardContent-root").forEach((card) => {
            card.style.transform = "scale(0.6)";
        });
        document.querySelector(".header-and-breadcrumbs").classList.add("hide-print");
    
        

        window.print();

        // Revert styles after printing
        document.body.style.margin = "";
        document.body.style.padding = "";
        document.querySelector(".row-sort").style.display = "";
        document.querySelector(".column-2-dgrade").style.display = "";
        document.querySelector(".printbutton").style.display = "";
        document.querySelectorAll(".MuiCardContent-root").forEach((card) => {
            card.style.transform = "";
        });
        document.querySelector(".header-and-breadcrumbs").classList.remove("hide-print");

       
        
      };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const handleFilterChange = (event) => {
        setFilterText(event.target.value);
      };

    const subjects = [
    { title: "Εισαγωγή στον προγραμματισμό", id: "Κ04", professor: "Παναγιώτης Σταματόπουλος", period: "Φεβρουάριος 2023", points: "7", type: "Yποχρεωτικό", grade: "8" },
    { title:"Διακριτά Μαθηματικά", id:"Κ09", professor:"Χρήστος Τζάμος", period:"Φεβρουάριος 2023",points:"7",type:"Yποχρεωτικό",grade:"7"},
    { title:"Γραμμική Άλγεβρα", id:"Κ03", professor:"Αρχοντία Γιαννοπούλου", period:"Σεπτέμβριος 2023",points:"6" ,type:"Yποχρεωτικό", grade:"4"},
    { title:"Λογική Σχεδίαση", id:"Κ02", professor:"Αντώνιος Πασχάλης",period:"Σεπτέμβριος 2023", points:"6", type:"Yποχρεωτικό", grade:"10"},
    { title:"Ανάλυση Ι", id:"Κ01", professor:"Παντελεήμων Δοδός", period:"Σεπτέμβριος 2023", points:"8", type:"Yποχρεωτικό", grade:"3"},
    { title:"Εισαγωγή στην Πληροφορική και τις Τηλεπικοινωνίες", id:"ΓΠ07", professor:"Μαρία Ρούσσου", period:"Φεβρουάριος 2023", points:"2", type:"Γενικής Παιδείας", grade:"7"},
    { title:"Αρχιτεκτονική Υπολογιστών Ι", id:"Κ14", professor:"Δημήτριος Γκιζόπουλος", period:"Ιούνιος 2023", points:"7", type:"Yποχρεωτικό", grade:"5"},
    { title:"Δομές Δεδομένων και Τεχνικές Προγραμματισμού", id:"Κ08", professor:"Μανόλης Κουμπαράκης/Κωνσταντίνος Χατζηκοκολάκης",period:"Ιούνιος 2023", points:"7", type:"Yποχρεωτικό", grade:"9"},
    { title:"Ηλεκτρομαγνητισμός, Οπτική και Σύγχρονη φυσική", id:"Κ12", professor:"Αριστείδης Τσίπουρας", period:"Ιούνιος 2023", points:"8", type:"Yποχρεωτικό",grade:"10"},
    { title:"Εφαρμοσμένα Μαθηματικά", id:"Κ20β", professor:"Μαρία Λουκά", period:"Ιούνιος 2023", points:"6", type:"Προαιρετικό",grade:"9"},
    ];
    
    const filteredSubjects = subjects.filter((subject) => {
        const lowercaseFilterText = filterText.toLowerCase();
        const includesFilterText = (
            subject.title.toLowerCase().includes(lowercaseFilterText) ||
            subject.id.toLowerCase().includes(lowercaseFilterText) ||
            subject.professor.toLowerCase().includes(lowercaseFilterText) ||
            subject.period.toLowerCase().includes(lowercaseFilterText)
          );
    
        switch (selectedOption) {
          case "Passed":
            return includesFilterText && parseInt(subject.grade) >= 5;
          case "Not passed":
            return includesFilterText && parseInt(subject.grade) < 5;
          default:
            return includesFilterText;
        }
    });

    return(
        <>
        <div className="header-and-breadcrumbs">
        <Header />
        <Breadcrumbs />
        </div>
        <BackToTop/>
        <div className="two-columns-dgrade">
            <div className="column-1-dgrade">
                    <div className="row-dgrade">
                        <h2>Αναλυτική Βαθμολογία</h2><span><Button className="printbutton" variant="outlined" sx={{textTransform:"none"}} onClick={handlePrintClick}><PrintIcon/>&nbsp; Εκτύπωση Αναλυτικής</Button></span>
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
                                label="Τίτλο μαθήματος, Διδάσκων, Κωδικό,Εξεταστική" 
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
                        {filteredSubjects.map((subject, index) => (
                            <SubjectCard key={index} {...subject} />
                         ))}
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
                            value={80} 
                            text={
                                <tspan>
                                    <tspan x="50" dy="-0.4em" fontSize="18" fontWeight="bold">8/10</tspan>                                    
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
                        <div className="d-cell-2" style={{flex:"10%"}}>10</div>
                    </div>
                    <div className="passed-sub">
                        <div className="p-cell-1"style={{flex:"90%",marginLeft:"20px"}}>Περασμένα μαθήματα</div>
                        <div className="p-cell-2" style={{flex:"10%"}}>8</div>
                    </div>
                    <div className="dpoints-sub">
                        <div className="dp-cell-1"style={{flex:"90%",marginLeft:"20px"}}>ΕCTS δηλωμένων μαθημάτων</div>
                        <div className="dp-cell-2" style={{flex:"10%"}}>64</div>
                    </div>
                    <div className="ppoints-sub">
                        <div className="pp-cell-1"style={{flex:"90%",marginLeft:"20px"}}>ΕCTS περασμένων μαθημάτων</div>
                        <div className="pp-cell-2" style={{flex:"10%"}}>50</div>
                    </div>
                </Card>
            </div>
                
        </div>
        </>

    )
}

export default DGrades;