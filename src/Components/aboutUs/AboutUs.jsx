import React, { useEffect, useRef, useState } from "react";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  const mv = useRef(null);
  const [elVisible, setelVisible] = useState(false);
  console.log(elVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setelVisible(entry.isIntersecting);
    });

    observer.observe(mv.current);
  }, []);

  return (
    <div className={classes.about}>
      <div className={`${classes.mv} `} ref={mv}>
        <div style={{ margin: "1rem 1rem" }}>
          <div
            className={`
              ${classes.jol}  ${elVisible ? classes.show : classes.hide}
          `}
          >
            <h4>About Joy of Life</h4>
            <p className={classes.content}>
              Is a church and a community of imperfect people seeking to know
              and love JESUS more.
            </p>
          </div>
          <div
            className={`${classes.mission}  ${
              elVisible ? classes.show : classes.hide
            }`}
          >
            <h4>Mission</h4>
            <p className={classes.content}>
              To share life in Christ Jesus with great joy to all
            </p>
          </div>
          <div
            className={`${classes.vision}  ${
              elVisible ? classes.show : classes.hide
            }`}
          >
            <h4>Vision</h4>
            <p className={classes.content}>
              To see Christ-like people living in fullness of joy
            </p>
          </div>
        </div>
      </div>
      <div className={classes.bible}>
        <div className={classes.bibleContainer}>
          <img
            className={classes.test}
            src="../img/bible2.png"
            alt="bible"
          ></img>
        </div>
      </div>
    </div>
  );
}
