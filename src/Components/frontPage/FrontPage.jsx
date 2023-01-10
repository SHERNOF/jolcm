import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./frontImage.module.css";
import JolVideo from "../jolVideo/JolVideo";

export default function FrontPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowVideo(true);
  }, 3000);

  setTimeout(() => {
    if (!showTitle) {
      setShowTitle(true);
    }
  }, 30000);

  const container = {
    initial: { opacity: 0 },

    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 1,
        duration: 2,
      },
    },
  };
  const item = {
    initial: { opacity: 0, y: 20, scale: 1.3 },

    show: {
      y: 250,
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 3,
      },
    },
  };
  const entrance = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 3,
        delay: 4.5,
      },
    },
  };
  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      animate="visible"
      className={classes.videoContainer}
    >
      <div className={classes.overlay}></div>

      <div className={classes.imageContainer}>
        {showVideo && <JolVideo></JolVideo>}
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
              style={{
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",

                position: "absolute",
              }}
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
