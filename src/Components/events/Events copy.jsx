import React, { useEffect, useReducer, useState } from "react";
import Container from "../common/container/Container";
import Section from "../common/section/Section";
import Title from "../common/title/Title";
import classes from "./events.module.css";
import Overlay from "../UI/overlay/Overlay";
import axios from "axios";
import logger from "use-reducer-logger";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state };
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload };
    case "FETCH_FAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default function Events({ evs }) {
  // const churchEvents = evs;

  const [indexNum, setindexNum] = useState(0);
  const [bigPicFromSlider, setbigPicFromSlider] = useState(0);

  // const [churchEvents, setchurchEvents] = useState([]);

  const [{ churchEvents, error, loading }, dispatch] = useReducer(
    logger(reducer),
    {
      churchEvents: [],
      error: "",
    }
  );

  // console.log(churchEvents);
  useEffect(() => {
    const fetches = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const r = await axios.get("/churchevents");
        dispatch({ type: "FETCH_SUCCESS", payload: r.churchEvents });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setchurchEvents(r.data);
    };
    fetches();
  }, []);

  return (
    <Section>
      <Container>
        <div className={classes.events}>
          <Title>
            <h5>Events</h5>
          </Title>
          <div className={classes.eventsContainer}>
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
