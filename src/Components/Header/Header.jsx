import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./header.module.css";
import {
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DrawerComp from "../drawerComp/DrawerComp";

export default function Header({ styleHeader }) {
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: styleHeader
            ? theme.palette.primary.main
            : theme.palette.primary.dark,
          transition: "all .2s",
        }}
        as={motion.div}
        variants={logo}
        initial="hidden"
        animate="visible"
      >
        <Toolbar>
          <div className={classes.logoContainer}>
            <img className={classes.myImg} src="../pics/logo.png" alt="img" />
          </div>

          {isMatch ? (
            <DrawerComp sx={{ marginLeft: "auto" }}></DrawerComp>
          ) : (
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              {pages.map((page, index) => (
                <Tab key={index} label={page}></Tab>
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
