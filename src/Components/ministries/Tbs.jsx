import React, { useState } from "react";
import MinistryOverlay from "./MinistryOverlay";
import classes from "./tbs.module.css";
import { useSpring, a } from "@react-spring/web";

export default function Tbs() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      className={classes.tbs}
      onMouseEnter={() => set((state) => !state)}
      onMouseLeave={() => set((state) => !state)}
    >
      <MinistryOverlay>Thursday Bible Study</MinistryOverlay>
      <a.div
        className={`${classes.imgContainer}  ${classes.back}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />

      <a.div
        className={`${classes.imgContainer}  ${classes.front}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      />
    </div>
  );
}
