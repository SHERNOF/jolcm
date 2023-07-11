import axios from "axios";
import React, { useEffect, useReducer } from "react";
// import logger from "use-reducer-logger"
import Loading from "../../Components/common/loading/Loading";
import Events from "../../Components/events/Events";
import Footer from "../../Components/footer/Footer";
import FrontImage from "../../Components/frontpageImage/FrontImage";
import MainLogo from "../../Components/mainLogo/MainLogo";
import Ministries from "../../Components/ministries/Ministries";
import OurTeam from "../../Components/ourTeam/OurTeam";
import { rootReducer } from "../../store/reducers";

export default function Home() {
  const [{ churchEvents, error, loading, users }, dispatch] = useReducer(
    rootReducer,
    {
      churchEvents: [],
      error: "",
      loading: true,
      users: [],
    }
  );
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
  }, [users]);

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
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Events evs={churchEvents}></Events>
      )}

      <Ministries></Ministries>
      <OurTeam />

      <Footer></Footer>
    </div>
  );
}
