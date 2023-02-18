import classes from "./modal.module.css";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { event } from "../../data.js";

const eventContents = event;

export default function Modal({ isOpen, isOpenClickHandler, eventInitialPic }) {
  const [disp, setDisp] = useState(false);
  const [evntId, setevntId] = useState([]);
  const [ind, setInd] = useState();
  const [indI, setindI] = useState(true);
  console.log(evntId);

  const activePhotoInitial = (
    <img
      className={classes.activePhoto}
      src={indI ? eventInitialPic.pictures[0] : eventInitialPic.pictures[ind]}
      alt="photos"
    ></img>
  );

  const initial = (
    <ul>
      {eventInitialPic.pictures.map((evntI, index) => (
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
    <ul>
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

  const activePhotoLoaded = (
    <img className={classes.activePhoto} src={evntId[ind]} alt="photos"></img>
  );

  return (
    <>
      <div className={`${classes.modalContainer} ${isOpen && classes.appear}`}>
        <div
          className={`${classes.modalContent} `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${classes.modalHeader} `}>
            <CloseIcon
              sx={{ marginRight: "2rem", cursor: "pointer" }}
              onClick={isOpenClickHandler}
            ></CloseIcon>
          </div>
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
                  }}
                >
                  <li className={classes.eventTitle}>
                    {eventContent.eventTitle}
                  </li>
                </ul>
              ))}
            </div>

            {/*  */}

            <div className={classes.boxesContainer}>
              <div className={classes.mainBox}>
                <div className={classes.imgContainer}></div>
                {disp ? activePhotoLoaded : activePhotoInitial}
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
