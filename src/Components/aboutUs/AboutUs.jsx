import React, { useEffect, useRef, useState } from "react";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  const one = useRef(null);
  const two = useRef(null);
  // const three = useRef(null);
  const [isIntersecting, setisIntersecting] = useState(false);
  // const [oneVisible, setoneVisible] = useState(false);
  const [twoVisible, settwoVisible] = useState(false);
  // const [threeVisible, setthreeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setisIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-65px" }
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
      { rootMargin: "-70px" }
    );
    console.log(isIntersecting);
    observer.observe(two.current);
    return () => observer.disconnect();
  }, [twoVisible]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setisIntersecting(entry.isIntersecting);
  //     },
  //     { rootMargin: "-200px" }
  //   );
  //   observer.observe(two.current);
  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setthreeVisible(entry.isIntersecting);
  //     },
  //     { rootMargin: "-200px" }
  //   );
  //   observer.observe(three.current);
  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  return (
    <div className={classes.about}>
      <div className={`${classes.mv} `}>
        <div className={classes.jol} ref={one}>
          <div
            className={`${classes.amvContainer} 
            
            ${isIntersecting && classes.slideIn}`}
          >
            <h5>About Joy of Life</h5>
            <p className={classes.content}>
              Is a church and a community of imperfect people seeking to know
              and love JESUS more.
            </p>
          </div>

          <div
            className={`${classes.imageContainer} 
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

        <div
          className={classes.mission}
          style={{ border: "1px soloid blue" }}
          ref={two}
        >
          <div className={classes.imageContainer}>
            <img
              className={`${classes.imageContained} 
              ${twoVisible && classes.slideIn}
              `}
              src="../img/share.png"
              alt="bible"
            ></img>
          </div>

          <div
            className={`${classes.amvContainer} 
            ${twoVisible && classes.slideIn}
            `}
          >
            <h5>Mission</h5>
            <p className={classes.content}>
              To share life in Christ Jesus with great joy to all
            </p>
          </div>
        </div>

        {/* <div className={classes.vision} ref={three}>
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
        </div> */}
      </div>
    </div>
  );
}
