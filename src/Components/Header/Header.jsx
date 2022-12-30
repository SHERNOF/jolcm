import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./header.module.css";
import {
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  useMediaQuery,
  // useTheme,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import DrawerComp from "../drawerComp/DrawerComp";

// import { MyButton } from "../styled/MyButton";

export default function Header({ styleHeader }) {
  const theme = useTheme();
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [value, setValue] = useState();

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
      <AppBar>
        <Toolbar>
          <div className={classes.logoContainer}>
            <img className={classes.myImg} src="../pics/logo.png" alt="img" />
          </div>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            value={value}
            indicatorColor="secondary"
            onChange={(e, value) => setValue(value)}
          >
            {pages.map((page, index) => (
              <Tab key={index} label={page}></Tab>
            ))}
          </Tabs>
        </Toolbar>
        <DrawerComp></DrawerComp>
      </AppBar>
    </React.Fragment>
  );
}
