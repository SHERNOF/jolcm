import React, { useEffect, useReducer } from "react";
import Container from "../../UI/container/Container";
import Title from "../../UI/title/Title";
import classes from "./messages.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { rootReducer } from "../../store/reducers";

export default function Messages() {
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
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: churchEvents.data });
      } catch (error) {
        dispatch({ type: "FETCH_DATA_FAIL", payload: error.message });
      }
    };
    fetchchurchEvents();
  }, []);
  return (
    <Container>
      <div className={classes.messagesContainer}>
        <div style={{ width: "100%" }}>
          <Title>Messages</Title>
        </div>
        <div className={classes.messagesContent}>
          <table
            style={{
              width: "100%",
              fontSize: ".6em",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
                {/* <th>Photos</th> */}
              </tr>
            </tbody>

            <tbody>
              {churchEvents.map((x, index) => (
                <tr key={x.index}>
                  <td>{x.eventTitle}</td>
                  <td>{x.createdAt}</td>
                  <td style={{ cursor: "pointer" }}>
                    <AiTwotoneEdit />
                  </td>
                  <td style={{ cursor: "pointer" }}>
                    <MdDeleteOutline />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}

/*
Fetching the events


*/
