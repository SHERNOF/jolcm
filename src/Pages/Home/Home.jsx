import { Box } from "@mui/material";
import React from "react";
import AboutUs from "../../Components/aboutUs/AboutUs";
import FrontImage from "../../Components/frontpageImage/FrontImage";
import Header from "../../Components/header/Header";
import MainLogo from "../../Components/mainLogo/MainLogo";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header></Header>
      <MainLogo></MainLogo>
      <FrontImage></FrontImage>
      <AboutUs></AboutUs>
    </Box>
  );
}
