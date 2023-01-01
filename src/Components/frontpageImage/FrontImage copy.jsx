import React, { useState } from "react";
import classes from "./frontImage.module.css";
import { AnimatePresence, motion } from "framer-motion";
import JolVideo from "../jolVideo/JolVideo";

import { Typography } from "@mui/material";

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

const container = {
  initial: { opacity: 0 },

  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 3,
      duration: 2,
    },
  },
};

// const item = {
//   initial: { opacity: 0, y: 20, scale: 1.9 },

//   show: {
//     y: 350,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       ease: "easeInOut",
//       duration: 3,
//     },
//   },
// };

export default function FrontImage({ isMatch }) {
  const item = isMatch
    ? {
        initial: { opacity: 0, y: 20, scale: 1.9 },

        show: {
          y: 150,
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeInOut",
            duration: 3,
          },
        },
      }
    : {
        initial: { opacity: 0, y: 20, scale: 1.9 },

        show: {
          y: 50,
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeInOut",
            duration: 3,
          },
        },
      };

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
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* <Typography></Typography> */}
      <div className={classes.overlay}></div>

      <div className={classes.imageContainer}>
        {showVideo && <JolVideo></JolVideo>}
      </div>

      <motion.div
        variants={container}
        initial="initial"
        animate="show"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          bottom: "50%",
          transform: "translate(50% 50%)",
          zIndex: "3",
        }}
      >
        <AnimatePresence>
          {showTitle && (
            <motion.div
            // variants={item}
            // exit={{ opacity: 0, transition: { delay: 1, duration: 1 } }}
            >
              <h1 className={classes.title}>JOY OF LIFE CHRISTIAN MINISTRY</h1>
              {/* <Typography
                variant={isMatch ? "h4" : "h3"}
                sx={{ color: "white" }}
              >
                JOY OF LIFE CHRISTIAN MINISTRY
              </Typography> */}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showTitle && (
            <motion.div
            // variants={item}
            // exit={{ opacity: 0, transition: { delay: 1, duration: 1 } }}
            >
              <Typography
                variant={isMatch ? "h5" : "h4"}
                sx={{ color: "white" }}
              >
                WELCOME HOME
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
