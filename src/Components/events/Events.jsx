import React, { useEffect, useRef, useState } from "react";
import classes from "./events.module.css";
import Overlay from "../../UI/overlay/Overlay";
import Title from "../../UI/title/Title";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ImageSlider from "./ImageSlider";

export default function Events({ evs }) {
  const churchEvents = evs;

  const [indexNum, setindexNum] = useState(0);
  console.log(indexNum);

  const slides = churchEvents[indexNum].pictures.length;
  const pics = churchEvents[indexNum].pictures;
  console.log(slides);
  console.log(typeof pics);

  const previous = () => {
    const isSlide1 = indexNum === 0;
    const newIndex = isSlide1 ? slides.length - 1 : indexNum - 1;
    setindexNum(newIndex);
  };
  const next = () => {
    const isLastSlide = indexNum === slides.length - 1;
    const newIndex = isLastSlide ? 0 : slides.length + 1;
    setindexNum(newIndex);
  };

  return (
    <div className={classes.events}>
      <Title>EVENTS</Title>
      <div className={classes.eventsContainer}>
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
            {/* <div className={classes.arrowRight} onClick={next}>
              <KeyboardArrowRightIcon />
            </div>
            <div className={classes.arrowLeft} onClick={previous}>
              <KeyboardArrowLeftIcon />
            </div> */}

            {/* {churchEvents[indexNum].pictures.map((pic, index) => ( */}
            {/* <div
              className={`${classes.sliderContainer} ${classes.fade}`}
              key={index}
            >
              {pics.map((pic, index) => (
                <img
                  key={index}
                  src={pic}
                  alt="events"
                  className={classes.bigImages}
                />
              ))}
            </div> */}
            <div className={classes.containerStyles}>
            <ImageSlider slides={pics} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* requested by the member to make the big picture to enlarge upon click. decided to included as a modal in the backdrop */
{
  /* <div
                  key={index}
                  style={{ backgroundImage: `url(${pic[index]})` }}
                ></div> */
}

// https://www.youtube.com/watch?v=SK9AlIbexOE&list=LL&index=3
