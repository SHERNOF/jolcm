import classes from "./modal.module.css";
import React, { useState } from "react";
import { event } from "../../data.js";
import { RiCloseLine } from "react-icons/ri";

const eventContents = event;

export default function Modal({ isOpen, isOpenClickHandler, eventSet }) {
  const [disp, setDisp] = useState(false);
  const [evntId, setevntId] = useState([]);
  const [ind, setInd] = useState(0);
  const [indI, setindI] = useState(true);
  const [eventTitle, seteventTitle] = useState();

  const activePhotoInitial = (
    <img
      className={classes.activePhoto}
      src={indI ? eventSet.pictures[0] : eventSet.pictures[ind]}
      alt="photos"
    ></img>
  );

  const activePhotoLoaded = (
    <img className={classes.activePhoto} src={evntId[ind]} alt="photos"></img>
  );
  const initial = (
    <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
      {eventSet.pictures.map((evntI, index) => (
        <li key={index} className={classes.imgContainerSm}>
          <img
            src={evntI}
            alt="pictures"
            className={classes.evntPictures}
            onClick={() => {
              setindI(!indI);
              setInd(index);
            }}
          ></img>
        </li>
      ))}
    </ul>
  );

  const loaded = (
    <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
      {evntId.map((evntI, index) => (
        <li key={index} className={classes.imgContainerSm}>
          <img
            src={evntI}
            alt="pictures"
            className={classes.evntPictures}
            onClick={() => {
              setInd(index);
            }}
          ></img>
        </li>
      ))}
    </ul>
  );
  const headerLoaded = (
    <div className={`${classes.modalHeader} `}>
      <h4 style={{ paddingLeft: "2rem" }}>{eventTitle}</h4>
      <RiCloseLine className={classes.icon} onClick={isOpenClickHandler} />
    </div>
  );

  const headerInitial = (
    <div className={`${classes.modalHeader} `}>
      <h4 style={{ paddingLeft: "2rem" }}>{eventSet.eventTitle}</h4>
      <RiCloseLine className={classes.icon} onClick={isOpenClickHandler} />
    </div>
  );

  return (
    <>
      <div className={`${classes.modalContainer} ${isOpen && classes.appear}`}>
        <div
          className={`${classes.modalContent} `}
          onClick={(e) => e.stopPropagation()}
        >
          {disp ? headerLoaded : headerInitial}
          {/*  */}

          <div className={classes.modalBody}>
            <div className={classes.modalEventsContainer}>
              {eventContents.map((eventContent) => (
                <ul
                  className={classes.modalEvents}
                  style={{
                    size: "cover",
                    listStyleType: "none",
                    paddingLeft: "0",
                  }}
                  key={eventContent.eventNumber}
                  onClick={() => {
                    setDisp(true);
                    setevntId(eventContent.pictures);
                    seteventTitle(eventContent.eventTitle);
                  }}
                >
                  <li className={classes.eventTitle}>
                    <div className={classes.bkg}>
                      <img
                        src={eventContent.pictures[0]}
                        className={classes.eventImage}
                        alt="eventImage"
                      />
                      <h6 className={classes.title}>
                        {eventContent.eventTitle}
                      </h6>
                    </div>
                  </li>
                </ul>
              ))}
            </div>

            {/*  */}

            <div className={classes.boxesContainer}>
              <div className={classes.mainBox}>
                <div className={classes.imgContainer}></div>
                {disp ? activePhotoLoaded : activePhotoInitial}
                {/* {activePhotoInitial} */}
              </div>
              <div className={classes.smallBoxes}>
                {disp ? loaded : initial}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
