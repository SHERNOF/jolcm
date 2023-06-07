import React, { useState } from "react";
import classes from "./frontImage.module.css";
import { motion } from "framer-motion";
import JolVideo from "../jolVideo/JolVideo";

import Overlay from "../UI/overlay/Overlay";

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
  initial: { opacity: 0, y: -3200, scale: 1.2 },

  show: {
    y: 300,
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
  // const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowVideo(true);
  }, 3000);

  // setTimeout(() => {
  //   if (showTitle) {
  //     setShowTitle(false);
  //   }
  // }, 30000);

  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      animate="visible"
      className={classes.videoContainer}
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
        {/* <AnimatePresence> */}
        {/* {showTitle && ( */}
        <motion.div
          variants={item}
          // exit={{
          //   opacity: 0,
          //   y: 200,
          //   transition: { delay: 1, duration: 1 },
          // }}
        >
          <h1 className={classes.title}>JOY OF LIFE CHRISTIAN MINISTRY</h1>
          <h5 style={{ color: "white" }}>
            A church, community of imperfect people seeking to know and love
            <strong
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                color: "#3776ff",
              }}
            >
              JESUS
            </strong>{" "}
            more.
          </h5>
        </motion.div>
        {/* )} */}
        {/* </AnimatePresence> */}
      </motion.div>
    </motion.div>
  );
}
