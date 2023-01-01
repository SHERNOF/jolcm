import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./header.module.css";
import { Toolbar, AppBar, Tabs, Tab, useTheme } from "@mui/material";
import DrawerComp from "../drawerComp/DrawerComp";
export default function Header({ styleHeader, isMatch }) {
  const theme = useTheme();
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [value, setValue] = useState(0);

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
            ? theme.palette.primary.dark
            : theme.palette.primary.light,

          color: styleHeader
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
          transition: "all .2s",
        }}
      >
        <Toolbar
          as={motion.div}
          variants={logo}
          initial="hidden"
          animate="visible"
        >
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
                <Tab
                  key={index}
                  label={page}
                  sx={{ color: "theme.palette.text.primary" }}
                ></Tab>
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
