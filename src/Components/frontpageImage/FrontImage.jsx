import React, { useState } from "react";
import classes from "./frontImage.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { StyledH1, StyledH2 } from "../styled/StyledTypography";
import JolVideo from "../jolVideo/JolVideo";

import { Box, Typography } from "@mui/material";

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

const item = {
  initial: { opacity: 0, y: 20, scale: 1.9 },
  show: {
    y: 350,
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 3,
    },
  },
};

export default function FrontImage() {
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
    <Box
      as={motion.div}
      variants={entrance}
      initial="hidden"
      animate="visible"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography></Typography>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "100%",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.4)",
          zIndex: "3",
        }}
      ></Box>

      <div className={classes.imageContainer}>
        {showVideo && <JolVideo></JolVideo>}
      </div>

      <Box
        as={motion.div}
        variants={container}
        initial="initial"
        animate="show"
        sx={{
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
              variants={item}
              exit={{ opacity: 0, transition: { delay: 1, duration: 1 } }}
            >
              <StyledH1 sx={{ color: "white" }}>
                JOY OF LIFE CHRISTIAN MINISTRY
              </StyledH1>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showTitle && (
            <motion.div
              variants={item}
              exit={{ opacity: 0, transition: { delay: 1, duration: 1 } }}
            >
              <StyledH2 sx={{ color: "white" }}>WELCOME HOME</StyledH2>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}
