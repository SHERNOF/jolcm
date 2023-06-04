import React, { useState } from "react";
import classes from "./wf.module.css";
import MinistryOverlay from "./MinistryOverlay";
import { useSpring, a } from "@react-spring/web";

export default function Wf() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      className={classes.wf}
      onMouseEnter={() => set((state) => !state)}
      onMouseLeave={() => set((state) => !state)}
    >
      <MinistryOverlay>Women's Fellowship</MinistryOverlay>
      <a.div
        className={`${classes.imgContainer}  ${classes.back}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />

      <a.div
        className={`${classes.imgContainer}  ${classes.front}`}
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      />
    </div>
  );
}
