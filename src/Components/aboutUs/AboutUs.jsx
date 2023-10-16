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
        
          <div  className={classes.jol}>
            <div className={`${classes.amvContainer} ${elVisible ? classes.show : classes.hide}`}>
              <h5>About Joy of Life</h5>
              <p className={classes.content}>
                Is a church and a community of imperfect people seeking to know
                and love JESUS more.
              </p>
            </div>
            
            <div className={classes.imageContainer}>
              <img
                className={`${classes.imageContained} ${elVisible ? classes.imgShow : classes.imgHide}`}
                src="../img/bible2.png"
                alt="bible"
              ></img>
            </div>
          </div>

          <div  className={classes.mission}>
          <div className={classes.imageContainer}>
              <img
                className={`${classes.imageContained} ${elVisible ? classes.imgShow : classes.imgHide}`}
                src="../img/share.png"
                alt="bible"
              ></img>
            </div>

            <div className={`${classes.amvContainer} ${elVisible ? classes.show : classes.hide}`}>
              <h5>Mission</h5>
              <p className={classes.content}>
              To share life in Christ Jesus with great joy to all
              </p>
            </div>
            
       
          </div>


          
          <div  className={classes.vision}>
            <div className={`${classes.amvContainer} ${elVisible ? classes.show : classes.hide}`}>
              <h5>Vision</h5>
              <p className={classes.content}>
              To see Christ-like people living in fullness of joy
              </p>
            </div>
            
            <div className={classes.imageContainer}>
              <img
                className={`${classes.imageContained} ${elVisible ? classes.imgShow : classes.imgHide}`}
                src="../img/fullness.png"
                alt="bible"
              ></img>
            </div>
          </div>

        </div>
      

    </div>
  );
}
