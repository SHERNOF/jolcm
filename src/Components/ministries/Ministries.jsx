import React, { useEffect, useRef, useState } from "react";
import Title from "../../UI/title/Title";

import Kids from "./Kids";
import Mf from "./Mf";
import classes from "./ministries.module.css";
import Sunday from "./Sunday";
import Tbs from "./Tbs";
import Wf from "./Wf";

export default function Ministries() {
  const ministries = useRef();
  const [isIntersecting, setisIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setisIntersecting(entry.isIntersecting);
      },
      { threshold: ".1" }
    );
    observer.observe(ministries.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div className={classes.ministries}>
      <Title className={classes.title}>Ministries</Title>
      <div
        className={classes.ministryContainer}
        style={{
          transform: `${
            isIntersecting ? "translateX(0px)" : "translateX(-300px)"
          }`,
          opacity: `${isIntersecting ? "1" : "0"}`,
        }}
        ref={ministries}
      >
        <div className={classes.frames}>
          <Sunday />
          <Kids />
          <Tbs />
          <div className={classes.pm}>
            <Mf />
            <Wf />
            <div className={classes.gf}>
              <div className={classes.imgContainer}>
                <img src="./ministry/golden1.jpeg" alt="photo0"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
