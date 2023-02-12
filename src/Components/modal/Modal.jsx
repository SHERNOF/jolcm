import classes from "./modal.module.css";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { events } from "../../data.js";

const event = events;

export default function Modal({ isOpen, isOpenClickHandler }) {
  const [scroll, setScroll] = useState(false);
  const [evntId, setevntId] = useState([]);

  const evntHandler = (e) => {};

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

          <div className={classes.modalBody}>
            <div
              className={`${classes.modalEventsContainer} ${
                scroll && classes.scroll
              }`}
              onMouseEnter={() => {
                setScroll(true);
                console.log("Enter");
              }}
              onMouseLeave={() => {
                setScroll(false);
                console.log("Leave");
              }}
            >
              {event.map((evnt) => (
                <div
                  className={classes.modalEvents}
                  style={{
                    backgroundImage: `url(${evnt.pic1})`,
                    size: "cover",
                  }}
                  key={evnt.eventNumber}
                >
                  <ul>
                    <li
                      style={{ fontSize: "1rem", cursor: "pointer" }}
                      onClick={() => {
                        setevntId(evnt.eventNumber);
                      }}
                    >
                      {evnt.eventTitle}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {event.map((evnt) => (
              <div className={classes.boxesContainer} key={evnt.eventNumber}>
                <div className={classes.mainBox}>
                  <div className={classes.imgContainer}></div>
                  <img
                    className={classes.activePhoto}
                    src="../wb/1.jpg"
                    alt="photos"
                  ></img>
                </div>
                <div className={classes.smallBoxes}>
                  <div className={classes.imgContainerSm}>
                    <img
                      src={evnt.pictures[evntId]}
                      alt="pictures"
                      className={classes.evntPictures}
                    ></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
