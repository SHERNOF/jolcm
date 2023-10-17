import React, { useState } from "react";
import classes from "./frontImage.module.css";
import { motion } from "framer-motion";
import JolVideo from "../jolVideo/JolVideo";

import Overlay from "../../UI/overlay/Overlay";

const entrance = {
  hidden: { opacity: 0, y: 3200 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 5,
      delay: 0.5,
    },
  },
};

const container = {
  initial: { opacity: 0 },

  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 2,
      delay: 0.2,
    },
  },
};
const item = {
  initial: { opacity: 0, y: -2200, scale: 1.2 },

  show: {
    y: 200,
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 4,
    },
  },
};

export default function FrontImage() {
  const [showVideo, setShowVideo] = useState(false);
  setTimeout(() => {
    setShowVideo(true);
  }, 3000);

  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      animate="visible"
      className={classes.videoContainer}
      style={{ background: "brown" }}
    >
      <Overlay></Overlay>
      <div className={classes.imageContainer}>
        {showVideo && <JolVideo autoplay></JolVideo>}
      </div>

      <motion.div
        variants={container}
        initial="initial"
        animate="show"
        className={classes.titleContainer}
      >
        <motion.div variants={item}>
          <h1 className={classes.title}>JOY OF LIFE CHRISTIAN MINISTRY</h1>
          <h5 className={classes.subTitle}>
            A church and a community of imperfect people seeking to know and
            love JESUS more.
          </h5>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
