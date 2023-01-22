import React from "react";
import AboutUs from "../../Components/aboutUs/AboutUs";
import ChurchServices from "../../Components/churchServices/ChurchServices";
import FrontImage from "../../Components/frontpageImage/FrontImage";
import Header from "../../Components/Header/Header";
import MainLogo from "../../Components/mainLogo/MainLogo";

export default function Home({ isMed, wheel, info }) {
  return (
    <div
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header isMed={isMed} wheel={wheel}></Header>
      <MainLogo></MainLogo>
      <FrontImage></FrontImage>
      <AboutUs></AboutUs>
      <ChurchServices info={info}></ChurchServices>
    </div>
  );
}
