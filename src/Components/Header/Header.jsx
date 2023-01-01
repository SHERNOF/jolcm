import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./header.module.css";
import { Toolbar, AppBar, Tabs, Tab, useTheme } from "@mui/material";
import DrawerComp from "../drawerComp/DrawerComp";

export default function Header({ styleHeader, isMed }) {
  console.log(isMed);
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
            ? "transparent"
            : theme.palette.primary.dark,

          color: styleHeader ? "white" : theme.palette.primary.light,
          width: "100%",
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

          {isMed ? (
            <DrawerComp
              styleHeader={styleHeader}
              sx={{ marginLeft: "auto" }}
            ></DrawerComp>
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
