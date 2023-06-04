import React from "react";
import AboutUs from "../../Components/aboutUs/AboutUs";
import ChurchServices from "../../Components/churchServices/ChurchServices";
import Events from "../../Components/events/Events";
import FrontImage from "../../Components/frontpageImage/FrontImage";

import MainLogo from "../../Components/mainLogo/MainLogo";
import Ministries from "../../Components/ministries/Ministries";

export default function Home({ isMed, wheel, info, modalProps, evs }) {
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
      <Events evs={evs}></Events>
      <Ministries></Ministries>
      {/* <ChurchServices info={info}></ChurchServices> */}
    </div>
  );
}
