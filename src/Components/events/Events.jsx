import React, { useState } from "react";

import classes from "./events.module.css";
import Overlay from "../../UI/overlay/Overlay";
import Title from "../../UI/title/Title";

export default function Events({ evs }) {
  const churchEvents = evs;

  const [indexNum, setindexNum] = useState(0);
  const [bigPicFromSlider, setbigPicFromSlider] = useState(0);
  return (
    <div className={classes.events}>
      <Title>
        <h5>Events</h5>
      </Title>
      <div className={classes.eventsLineUp}>
        <div className={classes.eventBody}>
          {/* order reversed */}
          <div className={classes.picBox}>
            <div className={classes.bigPic}>
              <img
                alt="event header"
                src={churchEvents[indexNum].pictures[bigPicFromSlider]}
                className={classes.bigPicImg}
                loading="lazy"
              ></img>
            </div>

            <div className={classes.picSlider}>
              {churchEvents[indexNum].pictures.map((picture, index) => (
                <ul
                  key={index}
                  style={{
                    listStyleType: "none",
                    margin: "0",
                    padding: "0",
                    marginLeft: "2rem",
                    height: "90%",
                  }}
                >
                  <li
                    className={classes.picSliderPictures}
                    onClick={() => setbigPicFromSlider(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      loading="lazy"
                      alt="each event photos"
                      src={picture}
                      className={classes.picSliderPicturesImg}
                    ></img>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className={classes.eventSelections}>
            <div
              className={classes.imgContainer}
              // style={{ border: "1px solid red" }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  margin: "0",
                  padding: "0",
                  // marginTop: "2rem",
                }}
              >
                {churchEvents.map((churchEvent, index) => (
                  <li key={churchEvent._id}>
                    <Overlay></Overlay>
                    <div
                      style={{
                        position: "relative",
                        marginBottom: "1rem",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className={classes.imgOverlay}
                        onClick={() => {
                          setindexNum(index);
                        }}
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
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
