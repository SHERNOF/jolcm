import React, { useEffect, useState } from "react";
import classes from "./events.module.css";
import Overlay from "../../UI/overlay/Overlay";
import Title from "../../UI/title/Title";

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
                <div className={classes.eachEvent}>
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
              </div>
            ))}
          </div>
        </div>
        <div className={classes.column2}>
          {churchEvents[indexNum].pictures.map((pics, index) => (
            <div className={classes.column2ImageContainer} key={index}>
              <img src={pics} alt="events" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* requested by the member to make the big picture to enlarge upon click. decided to included as a modal in the backdrop */
