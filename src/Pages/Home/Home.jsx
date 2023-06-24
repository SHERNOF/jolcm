import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import logger from "use-reducer-logger";
import Loading from "../../Components/common/loading/Loading";
import Events from "../../Components/events/Events";
import Footer from "../../Components/footer/Footer";
import FrontImage from "../../Components/frontpageImage/FrontImage";
import MainLogo from "../../Components/mainLogo/MainLogo";
import Ministries from "../../Components/ministries/Ministries";
import OurTeam from "../../Components/ourTeam/OurTeam";
import { rootReducer } from "../../store/reducers";

export default function Home() {
  const [{ churchEvents, error, loading }, dispatch] = useReducer(
    logger(rootReducer),
    {
      churchEvents: [],
      error: "",
      loading: true,
    }
  );

  useEffect(() => {
    const fetchchurchEvents = async () => {
      dispatch({ type: "FETCH_DATA_REQUEST" });
      try {
        const churchEvents = await axios.get("/jol/churchEvents");
        console.log(churchEvents);
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: churchEvents.data });
      } catch (error) {
        dispatch({ type: "FETCH_DATA_FAIL", payload: error.message });
      }
    };
    fetchchurchEvents();
  }, []);

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
      {/* {loading ? (
        <Loading></Loading>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <OurTeam info={team}></OurTeam>
      )} */}
      <OurTeam />

      <Footer></Footer>
    </div>
  );
}

// learnt - big lesson for asynchronous JS. this is where I experienced and resolve issues when getting data from a BE serer. Initially the component is working fine when the churchEvents data is in local. However, it changes and throw an error looking for the array because it needs to load the component first before the aailability of the array. The issue was resolved after below code was treated asynchronously by using a reducer and use the loading state as a initial state to load so that the array can be imported to the app.

// const [churchEvents, setchurchEvents] = useState([]);
// useEffect(()=>{
//   const fetchData = async () => {
//     const result = await axios.get('/church-events')
//     setChurchEvent(result.data)
//   }
//   fetchData()
// }, [])

// const [{ churchEvents, error, loading }, dispatch] = useReducer(
//   logger(reducer),
//   {
//     churchEvents: [],
//     error: "",
//     loading: true,
//   }
// );

// useEffect(() => {
//   const fetches = async () => {
//     dispatch({ type: "FETCH_CHURCHEVENTS_REQUEST" });
//     try {
//       const r = await axios.get("/church-events");
//       dispatch({ type: "FETCH_CHURCHEVENTS_SUCCESS", payload: r.data });
//     } catch (err) {
//       dispatch({ type: "FETCH_CHURCHEVENTS_FAIL", payload: err.message });
//     }

//     // setchurchEvents(r.data);
//   };
//   fetches();
// }, []);
