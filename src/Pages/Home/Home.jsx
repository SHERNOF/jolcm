import React from "react";
import Events from "../../Components/events/Events";
import Footer from "../../Components/footer/Footer";
import FrontImage from "../../Components/frontpageImage/FrontImage";
import MainLogo from "../../Components/mainLogo/MainLogo";
import Ministries from "../../Components/ministries/Ministries";
import OurTeam from "../../Components/ourTeam/OurTeam";

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
      {/* <AboutUs></AboutUs> */}
      <Events evs={evs}></Events>
      <Ministries></Ministries>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}
