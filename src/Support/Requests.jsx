import Header from "../Header_Page/Header";
import Button from "@mui/material/Button";
import "./Requests.css";
import  Card  from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";




const Requests=()=>{
    const [selectedOption, setSelectedOption] = useState("All");
    const [filterText, setFilterText] = useState("");
    
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const handleFilterChange = (event) => {
        setFilterText(event.target.value);
      };
    
      const visibleResultsCount = [
        {
          title: "Βεβαίωση Σπουδών",
          date: "10/10/2022",
          status: "Εγκρίθηκε",
        },
        {
          title: "Πιστοποιητικό Στρατολογικής Χρήσης",
          date: "12/10/2022",
          status: "Σε εκκρεμότητα",
        },
        {
          title: "Πιστοποιητικό Φοιτητικής Ιδιότητας",
          date: "15/10/2022",
          status: "Εγκρίθηκε",
        },
      ].reduce((count, request) => {
        const shouldDisplay =
          ((selectedOption === "Approved" && request.status === "Εγκρίθηκε") ||
            (selectedOption === "In progress" && request.status === "Σε εκκρεμότητα") ||
            selectedOption === "All") &&
          (filterText === "" ||
            request.title.toLowerCase().includes(filterText.toLowerCase()) ||
            request.date.includes(filterText));
    
        return shouldDisplay ? count + 1 : count;
      }, 0);

      const [openDialog, setOpenDialog] = useState(false);


      const handleNewRequestClick = (event) => {
        setOpenDialog(true);
      };


      const handleCloseDialog = () => {
        setOpenDialog(false);
      };
      
      const newRequestMenu = (
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xl" fullWidth>
          <DialogTitle sx={{fontWeight:"bold"}}>Νέα Αίτηση προς την Γραμματεία</DialogTitle>
          <DialogContent className="new-request-menu">
          <Card sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
            <div style={{ flex: '70%', padding: '16px' }}>
              <CardContent>
                  <Typography variant="h6">Βεβαίωση Σπουδών</Typography>
              </CardContent>
            </div>
            <div style={{ flex: '30%', padding: '16px', display:"flex",justifyContent:"flex-end" }}>
              <CardActions>
                <Button sx={{textTransform:"none"}}variant="contained">Επιλογή</Button>
              </CardActions>
            </div>
          </Card>
          <Card sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
            <div style={{ flex: '70%', padding: '16px' }}>
              <CardContent>
                  <Typography variant="h6">Φορολογικής Χρήσης</Typography>
              </CardContent>
            </div>
            <div style={{ flex: '30%', padding: '16px', display:"flex",justifyContent:"flex-end" }}>
              <CardActions>
                <Button sx={{textTransform:"none"}}variant="contained">Επιλογή</Button>
              </CardActions>
            </div>
          </Card>
          <Card sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
            <div style={{ flex: '70%', padding: '16px' }}>
              <CardContent>
                  <Typography variant="h6">Στρατολογικής Χρήσης (Αναλυτική)</Typography>
              </CardContent>
            </div>
            <div style={{ flex: '30%', padding: '16px', display:"flex",justifyContent:"flex-end" }}>
              <CardActions>
                <Button sx={{textTransform:"none"}}variant="contained">Επιλογή</Button>
              </CardActions>
            </div>
          </Card>
          <Card sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
            <div style={{ flex: '70%', padding: '16px' }}>
              <CardContent>
                  <Typography variant="h6">Στρατολογικής Χρήσης (Συνοπτική)</Typography>
              </CardContent>
            </div>
            <div style={{ flex: '30%', padding: '16px', display:"flex",justifyContent:"flex-end" }}>
              <CardActions>
                <Button sx={{textTransform:"none"}}variant="contained">Επιλογή</Button>
              </CardActions>
            </div>
          </Card>
          <Card sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
            <div style={{ flex: '70%', padding: '16px' }}>
              <CardContent>
                  <Typography variant="h6">Αναλυτικής Βαθμολογίας με προβιβάσιμους βαθμούς</Typography>
              </CardContent>
            </div>
            <div style={{ flex: '30%', padding: '16px', display:"flex",justifyContent:"flex-end" }}>
              <CardActions>
                <Button sx={{textTransform:"none"}}variant="contained">Επιλογή</Button>
              </CardActions>
            </div>
          </Card>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleCloseDialog} sx={{textTransform:"none"}}>Ακύρωση</Button>
          </DialogActions>
        </Dialog>
      );

    return(

        <>
        <Header/>
        <Breadcrumbs/>
        <div className="row-requests">
            <h2>Αιτήσεις προς την Γραμματεία</h2><span style={{marginRight:"30px",marginTop:"5px"}}><Button variant="contained" color="success" sx={{textTransform:"none",fontSize:16}} onClick={handleNewRequestClick}>Νέα αίτηση</Button></span>
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
                    label="Τύπο αίτησης, ημερομηνία αίτησης" 
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
            <h2 style={{marginLeft:'10px'}}>{visibleResultsCount} {visibleResultsCount === 1 ? 'Αποτέλεσμα' : 'Αποτελέσματα'}</h2>
        </div>
        <br></br>
        <div className="row-req-list">
        {[
          {
            title: "Βεβαίωση Σπουδών",
            date: "10/10/2022",
            status: "Εγκρίθηκε",
          },
          {
            title: "Πιστοποιητικό Στρατολογικής Χρήσης",
            date: "12/10/2022",
            status: "Σε εκκρεμότητα",
          },
          {
            title: "Πιστοποιητικό Φοιτητικής Ιδιότητας",
            date: "15/10/2022",
            status: "Εγκρίθηκε",
          },
        ].map((request, index) => {
          // Check if the request should be displayed based on the selected option
          const shouldDisplay =
            ((selectedOption === "Approved" && request.status === "Εγκρίθηκε") ||
            (selectedOption === "In progress" && request.status === "Σε εκκρεμότητα") ||
            selectedOption === "All") &&
            (filterText === "" ||
              request.title.toLowerCase().includes(filterText.toLowerCase()) ||
              request.date.includes(filterText));

          // Render the card only if it should be displayed
          return shouldDisplay ? (
            <div key={index} className="individual-card">
              <Card sx={{ width: 1860, display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <div style={{ flex: '50%' }}>
                  <CardContent sx={{ fontSize: 18, fontWeight: 'bold' }}>
                    {request.title}
                  </CardContent>
                  <p style={{ marginLeft: '20px', fontSize: 18 }}>{request.date}</p>
                </div>
                <div style={{ display: 'flex', flex: '50%', justifyContent: 'flex-end', alignItems: 'center', marginRight: '60px' }}>
                  <p style={{ color: request.status === 'Εγκρίθηκε' ? 'green' : 'orange', fontSize: 20 }}>{request.status}</p>
                </div>
              </Card>
            </div>
          ) : null;
        })}
        </div>
        {newRequestMenu}
        </>
    )
}

export default Requests;