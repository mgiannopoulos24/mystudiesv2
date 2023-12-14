import React from "react"
import "./Main_Page.css"
import { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";


const MainPage = () => {


    const positionRef = React.useRef({
        x: 0,
        y: 0,
      });
      const popperRef = React.useRef(null);
      const areaRefs = [
        React.useRef(null),
        React.useRef(null),
        React.useRef(null),
      ];
    
      const handleMouseMove = (event) => {
        positionRef.current = { x: event.clientX, y: event.clientY };
    
        if (popperRef.current != null) {
          popperRef.current.update();
        }
      };

      const navigate = useNavigate();

      const handleButtonClick = (destination) => {
        // Perform any additional actions if needed
        navigate(destination);
      };

      const renderTooltip = (content, index, placement,destination) => (
        <Tooltip
          title={content}
          placement={placement}
          arrow
          PopperProps={{
            popperRef,
            anchorEl: {
              getBoundingClientRect: () => {
                if (index === 1 ){
                  return new DOMRect(
                    areaRefs[index].current.getBoundingClientRect().x,
                    positionRef.current.y,
                    0,
                    0
                  );
                } else if (index === 2) {
                  return new DOMRect(
                    areaRefs[index].current.getBoundingClientRect().x + 100, 
                    positionRef.current.y,                                       
                    0,
                    0
                  );
                } else {
                return new DOMRect(
                  positionRef.current.x,
                  areaRefs[index].current.getBoundingClientRect().y,
                  0,
                  0
                  );
                }
              },
            },
          }}
        > 
          <Link to={destination} style={{ textDecoration: "none" }}>
            <button
              className={`button button${index + 1}`}
              ref={areaRefs[index]}
              onMouseMove={handleMouseMove}
              onClick={() => handleButtonClick(destination)}
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                p: 2,
              }}
            >
              {index === 0 && "Φοιτητές"}
              {index === 1 && "Καθηγητές"}
              {index === 2 && "Γραμματεία"}
            </button>
          </Link>
        </Tooltip>
      );

    const [currentColorIndex, setCurrentColorIndex] = useState(0);

  
    const colorPattern = ['red', 'blue', 'green'];

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colorPattern.length);
        }, 1000); // Change color every 1000 milliseconds (1 second)

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [currentColorIndex, colorPattern.length]);


    return (
        <>
        <center>
        <div className="three-columns">
                <div className="column column-1">
                </div>
                <div className="column column-2">
                    <h1 className={`animated-text ${colorPattern[currentColorIndex]}`}>
                        My Studies Premium
                    </h1>
                    <div className="row row-1">
                        {renderTooltip(
                        <ul>
                        <li>Μαθήματα</li>
                        <li>Βαθμολόγιο</li>
                        <li>Δήλωση Μαθημάτων</li>
                        <li>Υποβολή Αίτησης</li>
                        <li>Ιστορικό Δηλώσεων</li>
                        </ul>,
                        0,
                        "top",
                        "/QuickAccessStud"
                        )}              
                    </div>
                    <div className="row row-2">
                        <div className="cell cell-1"> 
                          {renderTooltip(
                          <ul>
                          <li>Δημιουργία Νέου Βαθμολογίου</li>
                          <li>Παρακολούθηση Βαθμολογίου</li>
                          </ul>,
                          1,
                          "left",
                          "/QuickAccessProf"
                          )}
                           
                        </div>
                        <div className="cell cell-2"> 
                          {renderTooltip(
                          <ul>
                          <li>Ειδοποιήσεις</li>
                          <li>Ορισμός Προθεσμιών</li>
                          <li>Αναζήτηση Φοιτητών</li>
                          <li>Συμπλήρωση Εντύπων</li>
                          </ul>,
                          2,
                          "right",
                          "/QuickAccessSecr"
                          )}
                        </div>
                    </div>
                </div>
                <div className="column-3">
                </div>
            </div>
        </center>
        </>
    )

}

export default MainPage;
