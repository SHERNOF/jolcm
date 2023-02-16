import classes from "./modal.module.css";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { events } from "../../data.js";

export default function Modal({ isOpen, isOpenClickHandler }) {
  const event = events;

  const [evntId, setevntId] = useState([]);
  return (
    <>
      <div
        className={`${classes.modalContainer} ${isOpen && classes.appear}`}
        onClick={isOpenClickHandler}
      >
        <div
          className={`${classes.modalContent} `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.modalHeader}>
            <CloseIcon
              sx={{ marginRight: "2rem", cursor: "pointer" }}
            ></CloseIcon>
          </div>
          {/*  */}

          <div className={classes.modalBody}>
            <div className={classes.modalEventsContainer}>
              {event.map((evnt) => (
                <ul
                  className={classes.modalEvents}
                  style={{ size: "cover" }}
                  key={evnt.eventNumber}
                  onClick={() => {
                    setevntId(evnt.pictures);
                  }}
                >
                  <li>{evnt.eventTitle}</li>
                </ul>
              ))}
            </div>

            {/*  */}

            <div className={classes.boxesContainer}>
              <div className={classes.mainBox}>
                <div className={classes.imgContainer}></div>
                <img
                  className={classes.activePhoto}
                  src="../wb/1.jpg"
                  alt="photos"
                ></img>
              </div>
              <div className={classes.smallBoxes}>
                <ul>
                  {evntId.map((evntI, index) => (
                    <li key={index} className={classes.imgContainerSm}>
                      <img
                        src={evntI}
                        alt="pictures"
                        className={classes.evntPictures}
                      ></img>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
