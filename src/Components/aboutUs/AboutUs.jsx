import React, { useEffect, useRef, useState } from "react";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const [oneVisible, setoneVisible] = useState(false);
  const [twoVisible, settwoVisible] = useState(false);
  const [threeVisible, setthreeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setoneVisible(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    observer.observe(one.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        settwoVisible(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );
    observer.observe(two.current);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        settwoVisible(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );
    observer.observe(two.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setthreeVisible(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );
    observer.observe(three.current);
  }, []);

  return (
    <div className={classes.about}>
      <div className={`${classes.mv} `}>
        <div className={classes.jol} ref={one}>
          <div
            className={`${classes.amvContainer} ${
              oneVisible ? classes.show : classes.hide
            }`}
          >
            <h5>About Joy of Life</h5>
            <p className={classes.content}>
              Is a church and a community of imperfect people seeking to know
              and love JESUS more.
            </p>
          </div>

          <div className={classes.imageContainer}>
            <img
              className={`${classes.imageContained} 
               ${oneVisible ? classes.imgShow : classes.imgHide}
              `}
              src="../img/bible2.png"
              alt="bible"
            ></img>
          </div>
        </div>

        <div
          className={classes.mission}
          style={{ border: "1px soloid blue" }}
          ref={two}
        >
          <div className={classes.imageContainer}>
            <img
              className={`${classes.imageContained} 
               ${twoVisible ? classes.show : classes.hide}
              `}
              src="../img/share.png"
              alt="bible"
            ></img>
          </div>

          <div
            className={`${classes.amvContainer} 
            ${twoVisible ? classes.imgShow : classes.imgHide}
            `}
          >
            <h5>Mission</h5>
            <p className={classes.content}>
              To share life in Christ Jesus with great joy to all
            </p>
          </div>
        </div>

        <div className={classes.vision} ref={three}>
          <div
            className={`${classes.amvContainer} 
            ${threeVisible ? classes.show : classes.hide}
            `}
          >
            <h5>Vision</h5>
            <p className={classes.content}>
              To see Christ-like people living in fullness of joy
            </p>
          </div>

          <div className={classes.imageContainer}>
            <img
              className={`${classes.imageContained} 
              ${threeVisible ? classes.imgShow : classes.imgHide}
                
              `}
              src="../img/fullness.png"
              alt="bible"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
