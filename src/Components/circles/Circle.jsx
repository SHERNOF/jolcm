import React from "react";
import classes from "./circles.module.css";

export default function Circle() {
  return (
    <div className={classes.circlebg}>
      <div className={`${classes.circle} ${classes.circleRed}`}></div>
      <div className={`${classes.circle} ${classes.circleGreen}`}></div>
      <div className={`${classes.circle} ${classes.circleBlue}`}></div>

      {/* <div className={`${classes.circle} ${classes.circleYellow}`}></div> */}
    </div>
  );
}
