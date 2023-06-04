import React, { useState } from "react";
import Container from "../common/container/Container";
import Section from "../common/section/Section";
import Title from "../common/title/Title";
import classes from "./events.module.css";

export default function Events({ evs }) {
  const churchEvents = evs;
  const [indexNum, setindexNum] = useState(0);
  const [bigPicFromSlider, setbigPicFromSlider] = useState(0);
  console.log(churchEvents[0].eventNumber);
  return (
    <Section>
      <Container>
        <div className={classes.events}>
          <div className={classes.eventsContainer}>
            <Title>
              <h3>Events</h3>
            </Title>
            <div className={classes.eventBody}>
              <div className={classes.eventSelections}>
                <div className={classes.imgContainer}>
                  <ul
                    style={{
                      listStyleType: "none",
                      margin: "0",
                      padding: "0",
                      marginTop: "2rem",
                    }}
                  >
                    {churchEvents.map((churchEvent, index) => (
                      <li key={churchEvent.eventNumber}>
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
                            src={churchEvent.pictures[0]}
                            alt="events"
                            className={classes.eventImage}
                          ></img>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                ;
              </div>
              ;{/* order reversed */}
              <div className={classes.picBox}>
                <div className={classes.bigPic}>
                  <img
                    alt="event header"
                    src={churchEvents[indexNum].pictures[bigPicFromSlider]}
                    className={classes.bigPicImg}
                  ></img>
                </div>

                <div className={classes.picSlider}>
                  {churchEvents[indexNum].pictures.map((picture, index) => (
                    <ul
                      style={{
                        listStyleType: "none",
                        margin: "0",
                        padding: "0",
                        marginLeft: "2rem",
                        height: "90%",
                        // border: "1px solid rgb(85, 83, 83)",
                      }}
                    >
                      <li
                        className={classes.picSliderPictures}
                        key={picture.index}
                        onClick={() => setbigPicFromSlider(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          alt="each event photos"
                          src={picture}
                          className={classes.picSliderPicturesImg}
                        ></img>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
