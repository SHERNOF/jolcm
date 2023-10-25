import React, { useEffect, useRef, useState } from "react";
import classes from "./events.module.css";
import Overlay from "../../UI/overlay/Overlay";
import Title from "../../UI/title/Title";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export default function Events({ evs }) {
  const churchEvents = evs;
  console.log(churchEvents);

  const [indexNum, setindexNum] = useState(0);
  console.log(indexNum);
  const [bigPicFromSlider, setbigPicFromSlider] = useState(0);

  return (
    <div className={classes.events}>
      <Title>EVENTS</Title>
      <div className={classes.eventsContainer}>
        <div className={classes.column1}>
          <div className={classes.column1Container}>
            {churchEvents.map((churchEvent, index) => (
              <div
                key={churchEvent.eventNumber}
                className={classes.eventsLineup}
                onClick={() => {
                  setindexNum(index);
                }}
              >
                <Overlay></Overlay>

                <div className={classes.imgOverlay}>
                  {churchEvent.eventTitle}
                </div>
                <img
                  loading="lazy"
                  src={churchEvent.pictures[0]}
                  alt="events"
                  className={classes.eventImage}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.column2}>
          <div className={classes.column2Container}>
            <div className={classes.arrowRight}>
              <KeyboardArrowRightIcon />
            </div>
            <div className={classes.arrowLeft}>
              <KeyboardArrowLeftIcon />
            </div>
            {churchEvents[indexNum].pictures.map((pics, index) => (
              <div
                // ref={divRef}
                className={`${classes.mainPic} ${classes.fade}`}
                key={index}
              >
                <img src={pics} alt="events" className={classes.bigImages} />
                {/* <Overlay></Overlay> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* requested by the member to make the big picture to enlarge upon click. decided to included as a modal in the backdrop */
