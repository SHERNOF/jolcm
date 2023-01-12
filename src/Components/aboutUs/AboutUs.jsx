import React from "react";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.circlebg}>
        <div className={`${classes.circle} ${classes.circleRed}`}></div>
        <div className={`${classes.circle} ${classes.circleGreen}`}></div>
        <div className={`${classes.circle} ${classes.circleBlue}`}></div>
        <div className={`${classes.circle} ${classes.circleYellow}`}></div>
      </div>
      <div className={classes.title}>
        <h3>ABOUT JOY OF LIFE</h3>
      </div>
      <div className={classes.content}>
        <div className={classes.contentContainer}>
          <h4>MISSION</h4>
          <p>
            Is a community church of imperfect people seeking to know and love
            <strong> Jesus </strong> more. We gather and serve in Craigieburn,
            Victoria, Australia. We meet each Sunday, connect during the week in
            Care Groups/Prayer Meetings and serve in the community and
            surrounding areas.
          </p>
        </div>

        <div className={classes.contentContainer}>
          <h4>VISION</h4>
          <p>
            A group of people who are joyfully together and we’re together with
            God because of His kindness and commitment to humanity. Together as
            a family learning to embody this kindness and commitment one to
            another and beyond into the wider world. All this is only possible
            because of Jesus, the One who brings us together in life and keeps
            us together joyfully.
          </p>
        </div>
      </div>
    </div>
  );
}
