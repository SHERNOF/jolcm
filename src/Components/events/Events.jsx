import React, { useState } from "react";
import classes from "./events.module.css";
import Overlay from "../../UI/overlay/Overlay";
import Title from "../../UI/title/Title";

export default function Events({ evs }) {
  const churchEvents = evs;
  console.log(churchEvents)

  // const [indexNum, setindexNum] = useState(0);
  // const [bigPicFromSlider, setbigPicFromSlider] = useState(0);
  return (
    <div className={classes.events}>
      <Title>EVENTS</Title>
      <div className={classes.eventsContainer}>
        <div className={classes.column1}>
        <div className={classes.column1Container}>
   
          { churchEvents.map((churchEvent)=>(
            <div key={churchEvent.eventNumber} className={classes.eventsLineup}>
              <div className={classes.eachEvent}>
                <Overlay></Overlay>
                    
                      <div
                        className={classes.imgOverlay}
                        // onClick={() => {
                        //   setindexNum(index);
                        // }}
                      >
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
        <div className={classes.column2}>Column 2</div>
      </div>
    </div>
    
  );
}


/* requested by the member to make the big picture to enlarge upon click. decided to included as a modal in the backdrop */
