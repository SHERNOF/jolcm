import { Button } from "@mui/base";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  DETAILS_USER_FAIL,
  DETAILS_USER_REQUEST,
} from "../../store/constants";
import Title from "../../UI/title/Title";
import classes from "./admin.module.css";

export default function Admin() {
  const userInfo = useSelector((state) => state.userInfo);
  const detailsUser = useSelector((state) => state.detailsUser);
  const dispatch = useDispatch;
  const createHandler = () => {
    dispatch({ type: CREATE_EVENT_REQUEST });
    try {
    } catch (error) {
      dispatch({ type: CREATE_EVENT_FAIL, payload: error.message });
      alert("Invalid username or password");
    }
  };

  // useEffect(
  //   (userId) => {
  //     // dispatch(detailsUser(userInfo._id));
  //     dispatch({ type: DETAILS_USER_REQUEST, payload: userId });
  //     // const { userInfo } = state;
  //     try {
  //       const { data } = axios.get(`/jol/users/${userId}`, {
  //         headers: { Authorization: `Bearer ${userInfo.token}` },
  //       });
  //     } catch (error) {
  //       const message =
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message;
  //       dispatch({ type: DETAILS_USER_FAIL, payload: message });
  //     }
  //   },
  //   [dispatch, userInfo._id]
  // );

  return (
    <div className={classes.admin}>
      <Title>Create Event</Title>
      <Button onClick={createHandler}>Create Event</Button>
    </div>
  );
}

/*
1. Create the admin component
2. create the NewEvent festures
  2a. build create createEvent api
  2b. build the create event button
  2c. define event create reducer
  2d. use it in admin page


*/
