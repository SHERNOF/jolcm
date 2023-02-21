import React from "react";
import Circle from "../circles/Circle";
import Card from "../UI/card/Card";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={classes.aboutContainer}>
      <Circle></Circle>
      <div className={classes.title}>
        <h3>ABOUT JOY OF LIFE</h3>
      </div>
      <div className={classes.content}>
        <Card className={classes.contentContainer}>
          <h4>MISSION</h4>
          <h5>To share life in Christ Jesus with great joy to all.</h5>
        </Card>
        <Card
          className={`${classes.contentContainer} ${classes.contentContainer2}`}
        >
          <h4>VISION</h4>
          <h5>To see Christ-like people living in fullness of joy.</h5>
        </Card>
      </div>
    </div>
  );
}
