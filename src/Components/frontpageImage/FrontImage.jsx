import React, { useState } from "react";
import classes from "./frontImage.module.css";
import { AnimatePresence, motion } from "framer-motion";
import JolVideo from "../jolVideo/JolVideo";

const entrance = {
  hidden: { opacity: 0, y: -1800 },
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
  initial: { opacity: 0, y: 300, scale: 1.2 },

  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 4,
    },
  },
};

export default function FrontImage({ isMed }) {
  const [showVideo, setShowVideo] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowVideo(true);
  }, 3000);

  setTimeout(() => {
    if (showTitle) {
      setShowTitle(false);
    }
  }, 30000);

  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      animate="visible"
      className={classes.videoContainer}
    >
      <div className={classes.overlay}></div>
      <div className={classes.imageContainer}>
        {/* {showVideo && <JolVideo autoplay></JolVideo>} */}
        <div className={classes.contained}>
          <img alt="announcement" src="./announcements/em1.png" />
          <div className={classes.verse}>JUDE 1:2</div>
          <span>May GOD give youmore and more mercy, peace and love</span>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="initial"
        animate="show"
        className={classes.titleContainer}
      >
        {/* <AnimatePresence> */}
        {/* {showTitle && ( */}
        <motion.div
          variants={item}
          exit={{
            opacity: 0,
            y: -1200,
            transition: { delay: 0.5, duration: 1 },
          }}
        >
          <h1 className={classes.title}>JOY OF LIFE CHRISTIAN MINISTRY</h1>
          <p className={classes.subTitle1}>19th Year</p>
          <p className={classes.subTitle2}>Anniversary</p>
        </motion.div>
        {/* )} */}
        {/* </AnimatePresence> */}
      </motion.div>
    </motion.div>
  );
}
