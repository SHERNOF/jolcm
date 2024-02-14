import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import AboutUs from "../../Components/aboutUs/AboutUs";
import Loading from "../../UI/loading/Loading";
import Events2 from "../../Components/events/Events";
import Footer from "../../Components/footer/Footer";
import FrontImage from "../../Components/frontpageImage/FrontImage";
import MainLogo from "../../Components/mainLogo/MainLogo";
import Ministries from "../../Components/ministries/Ministries";
import OurTeam from "../../Components/ourTeam/OurTeam";
import { rootReducer } from "../../store/reducers";
import Container from "../../UI/container/Container";
import Word from "../../Components/wow/Wow";
import ListItems from "../../UI/listItems/ListItems";

export default function Home() {
  useEffect(() => {
    const fetchchurchEvents = async () => {
      dispatch({ type: "FETCH_DATA_REQUEST" });
      try {
        const churchEvents = await axios.get("/jol/churchEvents");
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: churchEvents.data });
      } catch (error) {
        dispatch({ type: "FETCH_DATA_FAIL", payload: error.message });
      }
    };
    fetchchurchEvents();
  }, []);

  const [
    { churchEvents, latestWow, error, loading, loadingWowRequest },
    dispatch,
  ] = useReducer(rootReducer, {
    churchEvents: [],
    error: "",
    loading: true,
    latestWow: [],
  });
  return (
    <>
      <Helmet>
        <title>Joy of Life</title>
      </Helmet>
      <MainLogo></MainLogo>
      <FrontImage></FrontImage>
      <Container>
        <AboutUs></AboutUs>
        <Word />
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Events2 evs={churchEvents}></Events2>
        )}
        <Ministries></Ministries>
        <OurTeam />
      </Container>
      <Footer></Footer>
    </>
  );
}
