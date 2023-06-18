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

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { ...state, churchEvents: action.payload, loading: false };
    case "FETCH_DATAT_SUCCESS":
      return { ...state, team: action.payload, loading: false };
    case "FETCH_DATA_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  const [{ churchEvents, team, error, loading }, dispatch] = useReducer(
    logger(reducer),
    {
      churchEvents: [],
      team: [],
      error: "",
      loading: true,
    }
  );

  // const churchEvents = useSelector((state) => state.churchEvents);
  // const team = useSelector((state) => state.team);
  // const error = useSelector((state) => state.error);
  // const loading = useSelector((state) => state.loading);
  // const dispatch = useDispatch()();
  useEffect(() => {
    const fetches = async () => {
      dispatch({ type: "FETCH_DATA_REQUEST" });
      try {
        const r = await axios.get("/jol");
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: r.data.churchEvents });
        dispatch({ type: "FETCH_DATAT_SUCCESS", payload: r.data.team });
      } catch (err) {
        dispatch({ type: "FETCH_DATA_FAIL", payload: err.message });
      }

      // setchurchEvents(r.data);
    };
    fetches();
  }, []);

  // useEffect(() => {
  //   const fetches = async () => {
  //     dispatch({ type: "FETCH_DATA_REQUEST" });
  //     try {
  //       const r = await axios.get("/jol");
  //       dispatch({ type: "FETCH_DATA_SUCCESS", payload: r.data.churchEents });
  //       dispatch({ type: "FETCH_DATAT_SUCCESS", payload: r.data.team });
  //     } catch (err) {
  //       dispatch({ type: "FETCH_DATA_FAIL", payload: err.message });
  //     }
  //   };
  //   fetches();
  // }, []);

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
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <OurTeam info={team}></OurTeam>
      )}

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
