import React, { useState } from "react";
import classes from "./frontImage.module.css";
import { AnimatePresence, motion } from "framer-motion";
import JolVideo from "../jolVideo/JolVideo";

const entrance = {
  hidden: { opacity: 0, y: -700 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 3,
      delay: 5,
    },
  },
};

const container = {
  initial: { opacity: 0 },

  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 2.5,
      duration: 2,
    },
  },
};
const item = {
  initial: { opacity: 0, y: 1000, scale: 1.2 },

  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    delay: 5,
    transition: {
      ease: "easeInOut",
      duration: 3.2,
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
        {showVideo && <JolVideo autoplay></JolVideo>}
      </div>

      <motion.div
        variants={container}
        initial="initial"
        animate="show"
        className={classes.titleContainer}
      >
        <AnimatePresence>
          {showTitle && (
            <motion.div
              variants={item}
              exit={{ opacity: 0, transition: { delay: 1, duration: 1 } }}
            >
              <h1 className={classes.title}>JOY OF LIFE CHRISTIAN MINISTRY</h1>
              <h2 className={classes.subTitle}>WELCOME HOME</h2>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
