import React from "react";
import AboutUs from "../../Components/aboutUs/AboutUs";
import ChurchServices from "../../Components/churchServices/ChurchServices";
import Events from "../../Components/events/Events";
import FrontImage from "../../Components/frontpageImage/FrontImage";

import MainLogo from "../../Components/mainLogo/MainLogo";

export default function Home({ isMed, wheel, info, modalProps }) {
  return (
    <div
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MainLogo></MainLogo>
      <FrontImage></FrontImage>
      <AboutUs></AboutUs>
      <ChurchServices info={info}></ChurchServices>
      <Events></Events>
    </div>
  );
}
