import Header from "../Header_Page/Header";
import Button from "@mui/material/Button";
import "./Requests.css";
import  Card  from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { CardContent } from "@mui/material";

const Requests=()=>{
    const [selectedOption, setSelectedOption] = useState(null);
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
        <div className="row-requests">
            <h2>Αιτήσεις προς την Γραμματεία</h2><span style={{marginRight:"30px",marginTop:"5px"}}><Button variant="contained" color="success" sx={{textTransform:"none",fontSize:16}}>Νέα αίτηση</Button></span>
        </div>
        <div className="row-filter-req">
        <Card sx={{width:'97%',display:'flex'}}>
            <div className="filter-req-column-1" style={{display:'flex',flex:"40%",alignItems:"center",justifyContent:"center"}}>
                Ταξινόμηση κατά:
                <span>
                    <div className="filter-select-req">
                        <select value={selectedOption} onChange={handleDropdownChange}>
                            <option value="All">Όλες</option>
                            <option value="Approved">Εγκεκριμένες</option>
                            <option value="In progress">Σε εκκρεμότητα</option>
                        </select>
                    </div>
                </span>
            </div>
            <div className="filter-req-column-2" style={{display:'flex',flex:"60%",alignItems:"center"}}>
                Αναζήτηση με:
                <span>
                    <TextField 
                    type="text" 
                    label="Τύπο αίτησης" 
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
        <div className="req-results">
            <h2 style={{marginLeft:'10px'}}>3 Αποτελέσματα</h2>
        </div>
        <br></br>
        <div className="row-req-list">
        <Card sx={{width:1860,display:'flex',justifyContent:"center"}}>
            <div style={{flex:'50%'}}>
                <CardContent sx={{fontSize:18,fontWeight:"bold"}}>
                    Βεβαίωση Σπουδών
                </CardContent>
                <p style={{marginLeft:"20px", fontSize:18}}>10/10/2022</p>
            </div>
            <div style={{display:'flex',flex:'50%',justifyContent:"flex-end",alignItems:"center",marginRight:"60px"}}>
                <p style={{color:"green",fontSize:20}}>Εγκρίθηκε</p>
            </div>
        </Card>
        <br></br>
        <Card sx={{width:1860,display:'flex',justifyContent:"center"}}>
            <div style={{flex:'50%'}}>
                <CardContent sx={{fontSize:18,fontWeight:"bold"}}>
                    Πιστοποιητικό Στρατολογικής Χρήσης
                </CardContent>
                <p style={{marginLeft:"20px", fontSize:18}}>12/10/2022</p>
            </div>
            <div style={{display:'flex',flex:'50%',justifyContent:"flex-end",alignItems:"center",marginRight:"30px"}}>
                <p style={{color:"orange",fontSize:20}}>Σε εκκρεμότητα</p>
            </div>
        </Card>
        <br></br>
        <Card sx={{width:1860,display:'flex',justifyContent:"center"}}>
            <div style={{flex:'50%'}}>
                <CardContent sx={{fontSize:18,fontWeight:"bold"}}>
                    Πιστοποιητικό Φοιτητικής Ιδιότητας
                </CardContent>
                <p style={{marginLeft:"20px", fontSize:18}}>15/10/2022</p>
            </div>
            <div style={{display:'flex',flex:'50%',justifyContent:"flex-end",alignItems:"center",marginRight:"60px"}}>
                <p style={{color:"green",fontSize:20}}>Εγκρίθηκε</p>
            </div>
        </Card>
        </div>
            
        
         
        

        
        </>
    )
}

export default Requests;