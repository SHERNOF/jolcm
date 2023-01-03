import classes from "./header.module.css";
import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import DrawerComp from "../drawerComp/DrawerComp";

export default function Header() {
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMed);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Box className={classes.logoContainer}>
            <img
              className={classes.myImg}
              src="../pics/logo.png"
              alt="img"
            ></img>
          </Box>
          {isMed ? (
            <DrawerComp></DrawerComp>
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
