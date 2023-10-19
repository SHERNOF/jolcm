import React, { useEffect, useRef, useState } from "react";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const [isIntersecting, setisIntersecting] = useState(false);
  const [twoVisible, settwoVisible] = useState(false);
  const [threeVisible, setthreeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setisIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-20px", threshold: ".5" }
    );
    console.log(isIntersecting);
    observer.observe(one.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        settwoVisible(entry.isIntersecting);
      },
      { threshold: ".9", rootMargin: "5px" }
    );
    console.log(isIntersecting);
    observer.observe(two.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setthreeVisible(entry.isIntersecting);
      },
      { rootMargin: "30px", threshold: ".5" }
    );
    console.log(isIntersecting);
    observer.observe(three.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div className={classes.about}>
      <div className={`${classes.mv} `}>
        <div className={classes.jol} ref={one}>
          <div
            className={`${classes.leftDiv} 
            ${isIntersecting && classes.slideIn}`}
          >
            <h5>About Joy of Life</h5>
            <p className={classes.content}>
              Is a church and a community of imperfect people seeking to know
              and love JESUS more.
            </p>
          </div>

          <div
            className={`${classes.rightDiv} 
               ${isIntersecting && classes.slideIn}`}
          >
            <img
              className={`${classes.imageContained} 
              `}
              src="../img/bible2.png"
              alt="bible"
            ></img>
          </div>
        </div>

        <div className={classes.mission}>
          <div
            ref={two}
            className={`${classes.rightDiv} ${twoVisible && classes.slideIn}`}
          >
            <img
              className={`${classes.imageContained} 
              ${twoVisible && classes.slideIn}
              `}
              src="../img/share.PNG"
              alt="share"
            ></img>
          </div>

          <div
            className={`${classes.leftDiv} 
            ${twoVisible && classes.slideIn}
            `}
          >
            <h5>Mission</h5>
            <p className={classes.content}>
              To share life in Christ Jesus with great joy to all
            </p>
          </div>
        </div>

        <div className={classes.vision}>
          <div
            className={`${classes.leftDiv} 
            ${threeVisible && classes.slideIn}
            `}
          >
            <h5>Vision</h5>
            <p className={classes.content}>
              To see Christ-like people living in fullness of joy
            </p>
          </div>

          <div
            ref={three}
            className={`${classes.rightDiv} ${threeVisible && classes.slideIn}`}
          >
            <img
              className={`${classes.imageContained} 
              
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
