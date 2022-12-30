import React from "react";
import { motion } from "framer-motion";
import classes from "./header.module.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import { MyButton } from "../styled/MyButton";

export default function Header({ styleHeader }) {
  const theme = useTheme();

  const logo = {
    hidden: {
      opacity: 0,
      y: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        as={motion.div}
        variants={logo}
        initial="hidden"
        animate="visible"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: styleHeader
            ? theme.palette.primary.main
            : theme.palette.primary.dark,
          position: "fixed",
          top: "0",
          zIndex: "100",
          alignItems: "center",
          height: "8vh",
          width: "100vw",
          // transition: "all .5s",
        }}
      >
        <Box></Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            // color: theme.text.primary,
            mixBlendMode: "screen",
            marginTop: "8px",
            backdropFilter: "blur(50px)",
          }}
        >
          <Typography
            variant="h3"
            style={{
              position: "absolute",
              fontWeight: "bold",
              marginLeft: "35px",
              textShadow: "0 5px 3px rgba(0,0,0,.3)",
              opacity: styleHeader ? "1" : ".1",
            }}
          >
            JOY OF LIFE
          </Typography>
          {/* <Typography
            variant="h3"
            style={{
              position: "absolute",
              fontWeight: "bold",
              marginLeft: "35px",
              mixBlendMode: "normal",
              background: "none",
              opacity: styleHeader ? "1" : ".8",
            }}
          >
            JOY OF LIFE
          </Typography> */}
        </Box>

        <div
          className={classes.headerLinks}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: ".4rem",
          }}
        >
          <ul
            style={{
              display: "flex",
              fontSize: "3.5rem",
              marginRight: "2rem",
            }}
          >
            <li>
              <MyButton variant="text" activeclass="active" to="home">
                Home
              </MyButton>
            </li>
            <li>
              <MyButton variant="text" to="about">
                About us
              </MyButton>
            </li>
            <li>
              <MyButton
                className={classes.myBtn}
                variant="text"
                to="ministries"
              >
                Ministries
              </MyButton>
            </li>
            <li>
              <MyButton className={classes.myBtn} variant="text" href="events">
                Contact Us
              </MyButton>
            </li>
            <li>
              <MyButton
                className={classes.myBtn}
                variant="text"
                to="events"
                href="events"
              >
                Events
              </MyButton>
            </li>
          </ul>
        </div>
      </Box>
    </Box>
  );
}
