import React from "react";
import classes from "./boxerContainer.module.css";

export default function BoxesContainer() {
  return (
    <div className={classes.boxesContainer}>
      <div className={classes.mainBox}>
        <div className={classes.imgContainer}></div>
        <img
          className={classes.activePhoto}
          src="../wb/1.jpg"
          alt="photos"
        ></img>
      </div>
      <div className={classes.smallBoxes}>
        <ul>
          {evntId.map((evntI, index) => (
            <li key={index} className={classes.imgContainerSm}>
              <img
                src={evntI}
                alt="pictures"
                className={classes.evntPictures}
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
