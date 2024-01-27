import React, { useState,useEffect} from "react";
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
import "./HelpIconProf.css"; 

const HelpIconProf = () => {
  
    const [open, setOpen] = useState(false);
    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
      default:
        break;
      
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`helpicon-prof ${scrolled ? 'scrolled' : ''}`}>
      <Button color="primary" variant="contained" onClick={handleOpen} 
        sx={{
          borderRadius: scrolled ? "100%" : "5px",
          width: scrolled ? "30px" : "100px",
          height: scrolled ? "60px" : "50px",
          backgroundColor: "rgba(33, 150, 243, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: scrolled ? "flex-start":"center", // Centering both icon and text horizontally
         
        }}>
        <QuestionMarkOutlinedIcon sx={{fontSize:"xlarge", marginLeft: scrolled ? "3px" : "0"}}/>
        <span className="help-text-prof">Βοήθεια</span>
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
          <Typography variant="h6" paragraph style={{marginLeft:"20px",alignItems:"center"}}>Πως δημιουργώ νέο βαθμολόγιο;
          <IconButton
              onClick={() => handleCollapseToggle(1)}
              aria-label="toggle-collapse"
              sx={{ marginLeft: "136px", marginBottom:"2px"}}
            >
              {collapse1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Typography>
          <Collapse in={collapse1} >
            <Typography variant="body1" paragraph style={{alignItems:"center",display: "flex", justifyContent: "space-between" }}>
                <ol>
                    <li>Κατευθυνθείτε στην κατηγορία <strong>Βαθμολογία</strong>.</li>
                    <li>Κάντε κλικ στην επιλογή <strong>Δημιουργία Βαθμολογίου</strong>.</li>
                    <li>Κάντε κλικ στην επιλογή <strong>Βαθμολόγηση</strong>για το μάθημα που σας ενδιαφέρει να υποβάλλετε βαθμολογία.</li>
                    <li>Πληκτρολογήστε είτε για κάθε φοιτητή τον βαθμό στο πλαίσιο στην στήλη <strong>Βαθμός</strong>,είτε επιλέξτε ένα αρχείο για να εισάγετε βαθμούς για όλους τους μαθητές.</li><br></br>
                    <li>Τέλος, κάντε κλικ στο κουμπί <strong>Προσωρινή Αποθήκευση</strong> ή στο κουμπί <strong>Οριστική Αποθήκευση</strong>.</li>
                </ol>
            </Typography>
          </Collapse>
          

          <Typography variant="h6" paragraph style={{marginLeft:"20px",alignItems:"center"}}>Πως επεξεργάζομαι ένα βαθμολόγιο;
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
                <li>Κατευθυνθείτε στην κατηγορία <strong>Βαθμολογία</strong>.</li>
                <li>Κάντε κλικ στην επιλογή <strong>Παρακολούθηση Βαθμολογίου</strong>για το μάθημα που σας ενδιαφέρει να επεξεργαστείτε την βαθμολογία.</li>
                <li>Αλλάξτε τους βαθμούς που επιθυμείτε και ύστερα κάντε κλικ στο κουμπί <strong>Προσωρινή Αποθήκευση</strong> ή στο κουμπί <strong>Οριστική Αποθήκευση</strong>.</li><br></br>
                <i>Αν θέλετε μπορείτε να κάνετε και λήψη του βαθμολογίου πατώντας το κουμπί <strong>Λήψη Βαθμολογίου</strong></i>
              </ol>
            </Typography>
          </Collapse>


          
        </div>
      </Dialog>
    </div>
  );
};

export default HelpIconProf;
