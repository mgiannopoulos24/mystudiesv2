import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./BackToTop.css"; 

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? "visible" : "hidden"}`}>
      <Button onClick={scrollToTop} color="primary" variant="contained" sx={{ borderRadius: "100%", width: "10px", height: "60px", backgroundColor: 'rgba(33, 150, 243, 0.8)' }}>
        <ArrowUpwardIcon sx={{fontSize:"xlarge"}}/>
      </Button>
    </div>
  );
};

export default BackToTop;
