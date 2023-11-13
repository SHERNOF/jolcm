
import React, { useEffect, useReducer } from 'react'
import Container from '../../UI/container/Container'
import Title from '../../UI/title/Title'
import classes from './events.module.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

import { rootReducer } from "../../store/reducers";

export default function Events() {

  //   useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products/admin?page=${page}`, {
  //         headers: { Authorization: `Bearer ${userInfo.token}` },
  //       });
  //       dispatch({ type: "FETCH_SUCCESS", payload: data });
  //     } catch (err) {
  //       dispatch({ type: "FETCH_FAIL", payload: getError(err) });
  //     }
  //   };
  //   // fetchData();
  //   if (successDelete) {
  //     dispatch({ type: "DELETE_RESET" });
  //   } else {
  //     fetchData();
  //   }
  // }, [page, userInfo, successDelete]);

  const userInfo = useSelector((state) => state.userInfo);
  const [{ churchEvents, error, loading }, dispatch] = useReducer(rootReducer, {
    churchEvents: [],
    error: "",
    loading: true,
  });

  useEffect(() => {
    const fetchchurchEvents = async () => {
      dispatch({ type: "FETCH_DATA_REQUEST" });
      try {
        const churchEvents = await axios.get("/jol/churchEvents");
        
  console.log(churchEvents)
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: churchEvents.data });
      } catch (error) {
        dispatch({ type: "FETCH_DATA_FAIL", payload: error.message });
      }
    };
    fetchchurchEvents();
  }, []);

  // const date = new Date(churchEvents[0].createdAt)
  // console.log(date)
  return (
    <Container>
    <div className={classes.eventsContainer}>
      <div style={{width:'100%'}}><Title>Events</Title></div>
      <div className={classes.eventsContent}>
        <table style={{width:'100%', fontSize:'.6em', borderCollapse:'collapse'}}>
          <tbody>
            <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
            {/* <th>Photos</th> */}
            </tr>
          </tbody>
             <tbody >
          { churchEvents.map((x, index)=>(
              <tr key={x.index}>
              <td>{x.eventTitle}</td>
              <td>{x.createdAt}</td>
              <td>Edit</td>
              <td>Delete</td>
              {/* <td>Test2</td> */}
              </tr>
              )) }
           </tbody>
         
        </table>
      </div>
    </div>
    </Container>
  )
}

/*
Fetching the events


*/
