import React, { useEffect, useReducer, useState } from "react";
import Container from "../../UI/container/Container";
import Title from "../../UI/title/Title";
import classes from "./wowPage.module.css";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { rootReducer } from "../../store/reducers";
import Loading from "../../UI/loading/Loading";
import MessageBox from "../../UI/messageBox/MessageBox";
import { IoIosCreate } from "react-icons/io";

export default function WowPage() {
  const [{ wows, error, loading }, dispatch] = useReducer(rootReducer, {
    messages: {},
    error: "",
    loading: true,
  });

  const [sorted, setsorted] = useState({})

  useEffect(() => {
    const fetchWows = async () => {
      dispatch({ type: "FETCH_WOW_REQUEST" });
      try {
        const wows = await axios.get("/jol/wows");
        dispatch({ type: "FETCH_WOW_SUCCESS", payload: wows.data });

        console.log(wows)

        // const test = wows.data.sort((a, b)=>{a.updatedAt - b.updatedAt})
        // console.log(test)

      } catch (error) {
        dispatch({ type: "FETCH_WOW_FAIL", payload: error.message });
      }
    };
    fetchWows();
  }, []);
  return (
    <Container>
      <div className={classes.wowContainer}>
        <div style={{ width: "100%" }}>
          <Title>Word of the Week &nbsp;&nbsp;
            <IoIosCreate style={{ cursor: "pointer" }} /></Title>
        </div>
        <div className={classes.messagesContent}>
          {loading ? (
            <Loading />
          ) : error ? (
            <MessageBox />
          ) : (
            <table
              style={{
                width: "100%",
                fontSize: ".6em",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Verse</th>
                  <th>Word of the Week</th>
                  <th>Pastor</th>
                  <th>Message</th>
                  <th>Delete</th>
                </tr>
              </tbody>

              <tbody>
                {wows.map((x, index) => (
                  <tr key={index}>
                    <td>{new Date(x.createdAt).toLocaleDateString()}</td>
                    <td>{x.verse}</td>
                    <td style={{textAlign:'left', width:'50%'}}>{x.wow}</td>
                    <td>{x.by}</td>
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
          )}
        </div>
      </div>
    </Container>
  );
}

/*
Procedures:
1. Create the Wow component
2. Create the wow model
3. create the wowRoutes.js specifically for wow create and retrieve and be displayed at <Home />
4. create the FETCH_WOW in constant, actions and reducer.js
5. create the wow:{} state in the reducer.js
6. Create the admin route to let only be admin able to create wow
7. create the wowRoutes.js
8. implement the wowRoutes.js to server.js
7. Created the <WowPage /> to display all the wows and be able to have the create wow button  from here

II. 
1. Create the <Wow.jsx /> to display the messages in the <>>Home />
2. 


*/
