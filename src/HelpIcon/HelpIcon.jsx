import React, { useState} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./HelpIcon.css"; 

const HelpIcon = () => {
  
    const [open, setOpen] = useState(false);
    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [collapse3, setCollapse3] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCollapseToggle = (collapseNumber) => {
    switch (collapseNumber) {
      case 1:
        setCollapse1(!collapse1);
        break;
      case 2:
        setCollapse2(!collapse2);
        break;
      case 3:
        setCollapse3(!collapse3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="helpicon">
      <Button color="primary" variant="contained" onClick={handleOpen} sx={{ borderRadius: "100%", width: "10px", height: "60px", backgroundColor: 'rgba(33, 150, 243, 0.8)' }}>
        <QuestionMarkOutlinedIcon sx={{fontSize:"xlarge"}}/>
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", top: 5, right: 5 }}
          >
            <CloseIcon />
          </IconButton>
          Βοήθεια
        </DialogTitle>
        <div style={{ padding: 16 }}>
          <Typography variant="h6" paragraph style={{marginLeft:"20px",alignItems:"center"}}>Πως δηλώνω τα μαθήματα που με ενδιαφέρουν;
          <IconButton
              onClick={() => handleCollapseToggle(1)}
              aria-label="toggle-collapse"
              sx={{ marginLeft: "30px", marginBottom:"2px"}}
            >
              {collapse1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Typography>
          <Collapse in={collapse1} >
            <Typography variant="body1" paragraph style={{alignItems:"center",display: "flex", justifyContent: "space-between" }}>
                <ol>
                    <li>Κατευθυνθείτε στην κατηγορία <strong>Δηλώσεις</strong>.</li>
                    <li>Κάντε κλικ στην επιλογή <strong>Δήλωση Μαθημάτων</strong>.</li>
                    <li>Δηλώστε τα μαθημάτα που σας ενδιαφέρουν, κάνοντας κλικ στο κουτάκι που βρίσκεται στην στήλη <strong>Δήλωση</strong>.</li>
                    <li>Τέλος, κάντε κλικ είτε στην επιλογή <strong>Προσωρινή αποθήκευση</strong>, είτε στην επιλογή <strong>Οριστική αποθήκευση</strong>.</li><br></br>
                    <i>Αν κάνετε κλικ στην επιλογή <strong>Οριστική αποθήκευση</strong>, θα σας εμφανιστεί μια λίστα με τα μαθήματα που έχετε δηλώσει και θα πρέπει να πατήσετε την επιλογή <strong>Υποβολή</strong> για να επιβεβαιώσετε την δήλωση.</i>
                </ol>
            </Typography>
          </Collapse>
          

          <Typography variant="h6" paragraph style={{marginLeft:"20px",alignItems:"center"}}>Πως κάνω αίτηση προς την γραμματεία;
          <IconButton
              onClick={() => handleCollapseToggle(2)}
              aria-label="toggle-collapse"
              sx={{ marginLeft: "103px", marginBottom:"2px"}}
            >
              {collapse2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Typography>
          <Collapse in={collapse2}>
            <Typography variant="body1" paragraph style={{alignItems:"center",display: "flex", justifyContent: "space-between" }}>
              <ol>
                <li>Κατευθυνθείτε στην κατηγορία <strong>Εξυπηρέτηση</strong>.</li>
                <li>Κάντε κλικ στην επιλογή <strong>Αιτήσεις</strong>.</li>
                <li>Κάντε κλικ στο κουμπί <strong>Νέα αίτηση</strong>.</li>
                <li>Στο μενού που θα σας εμφανιστεί διαλέξτε τον τύπο του πιστοποιητικού που θέλετε.</li>
                <li>Τέλος, θα εμφανιστεί το μενού με τα στοιχεία σας και πατώντας <strong>Αποστολή</strong> επιβεβαιώνετε την δήλωση σας.</li>
              </ol>
            </Typography>
          </Collapse>


          <Typography variant="h6" paragraph style={{marginLeft:"20px",alignItems:"center"}}>Πως μπορώ να δω την αναλυτική βαθμολογία μου;
          <IconButton
              onClick={() => handleCollapseToggle(3)}
              aria-label="toggle-collapse"
              sx={{ marginLeft: "7px", marginBottom:"2px"}}
            >
              {collapse3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Typography>
          <Collapse in={collapse3}>
            <Typography variant="body1" paragraph style={{alignItems:"center",display: "flex", justifyContent: "space-between" }}>
              <ol>
                <li>Κατευθυνθείτε στην κατηγορία <strong>Βαθμολογία</strong>.</li>
                <li>Κάντε κλικ στην επιλογή <strong>Αναλυτική Βαθμολογία</strong></li>
                <li>Σε αυτή την σελίδα μπορείτε να φιλτράρετε την βαθμολογία σας με διάφορα κριτήρια καθώς και να την εκτυπώσετε.</li>
              </ol>
            </Typography>
          </Collapse>
        </div>
      </Dialog>
    </div>
  );
};

export default HelpIcon;
