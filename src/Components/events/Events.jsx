import React, { useEffect, useRef, useState } from "react";
import classes from "./events.module.css";
import Overlay from "../../UI/overlay/Overlay";
import Title from "../../UI/title/Title";
import ImageSlider from "../../UI/imageSlider/ImageSlider";

export default function Events({ evs }) {
  // const events = useRef(null);

  // const [isIntersecting, setisIntersecting] = useState(false);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setisIntersecting(entry.isIntersecting);
  //     },
  //     { threshold: ".1" }
  //   );
  //   observer.observe(events.current);
  //   return () => observer.disconnect();
  // }, []);

  const churchEvents = evs;

  const [indexNum, setindexNum] = useState(0);

  const pics = churchEvents[indexNum].pictures;

  return (
    <div className={classes.events}>
      <Title>EVENTS</Title>
      <div
        className={classes.eventsContainer}
        // style={{
        //   transform: `${
        //     isIntersecting ? "translateX(0px)" : "translateX(300px)"
        //   }`,
        //   opacity: `${isIntersecting ? "1" : "0"}`,
        // }}
        // ref={events}
      >
        <div className={classes.column1}>
          <div className={classes.column1Container}>
            {churchEvents.map((churchEvent, index) => (
              <div
                key={index}
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
            <ImageSlider slides={pics} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* requested by the member to make the big picture to enlarge upon click. decided to included as a modal in the backdrop

decided to remove the entry animation; seems too much

*/

// https://www.youtube.com/watch?v=SK9AlIbexOE&list=LL&index=3
