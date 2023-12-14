import React from "react";
import "./Test.css";
import Tooltip from "@mui/material/Tooltip";

const Test = () => {
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

  const renderTooltip = (content, index, placement) => (
    <Tooltip
      title={content}
      placement={placement}
      arrow
      PopperProps={{
        popperRef,
        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(
              positionRef.current.x,
              areaRefs[index].current.getBoundingClientRect().y,
              0,
              0
            );
          },
        },
      }}
    >
      <button
        className={`button button${index + 1}`}
        ref={areaRefs[index]}
        onMouseMove={handleMouseMove}
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
    </Tooltip>
  );


  return (
    <>
      <center>
        <div className="three-columns">
          <div className="column column-1"></div>
          <div className="column column-2">
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
                "top"
              )}
            </div>
            <div className="row row-2">
              {renderTooltip("Καθηγητές", 1, "left")}
              <div className="cell cell-1"></div>
              <div className="cell cell-2">
                {renderTooltip("Γραμματεία", 2, "right")}
              </div>
            </div>
          </div>
          <div className="column-3"></div>
        </div>
      </center>
    </>
  );
};

export default Test;
