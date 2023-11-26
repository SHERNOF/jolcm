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
import StyledLink from "../../UI/links/StyledLink";
import { useNavigate } from "react-router-dom";

export default function WowPage() {
  const [{ wows, error, loading }, dispatch] = useReducer(rootReducer, {
    messages: {},
    error: "",
    loading: true,
  });

  const navigate = useNavigate();
  const [sorted, setsorted] = useState({});

  useEffect(() => {
    const fetchWows = async () => {
      dispatch({ type: "FETCH_WOW_REQUEST" });
      try {
        const wows = await axios.get("/jol/wows");
        dispatch({ type: "FETCH_WOW_SUCCESS", payload: wows.data });
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
          <Title>
            Word of the Week &nbsp;&nbsp;
            <StyledLink to="/jol/createWow">
              <IoIosCreate style={{ cursor: "pointer", color: "black" }} />
            </StyledLink>
          </Title>
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
                  <th>Date Delivered</th>
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
                    <td>{x.dateShared}</td>
                    <td>{x.verse}</td>
                    <td style={{ textAlign: "left", width: "50%" }}>{x.wow}</td>
                    <td>{x.by}</td>
                    <td style={{ cursor: "pointer" }}>
                      <AiTwotoneEdit
                        onClick={() => navigate(`/jol/wow/${x._id}`)}
                      />
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
1. Create the Wow component. This is to be render in the <Home /> to display the word of the week.
2. Create the wow model
3. create the wowRoutes.js specifically for wow create and retrieve and be displayed the <Wow /> at <Home />
  i. used the const last. This is the product of retrieving the the state from the wows array
  ii. setlast(wows.data[wows.data.length - 1])

4. create the FETCH_WOW in constant, actions and reducer.js
5. create the wow:{} state in the reducer.js
6. Create the admin route to let only be admin able to create wow
7. create the wowRoutes.js
8. implement the wowRoutes.js to server.js
7. Created the <WowPage /> to display all the wows and be able to have the create wow button  from here. This will appear from the Header's user initial under Word of the week tab
II. 
1. Create the <Wow.jsx /> to display the messages in the <>>Home />
2. 


III. Edit function
1. Create the 
    wowRoute.get("/wow/:id", async (req, res) => {
    const wow = await Wow.findById(req.params.id);
    if (wow) {
      res.send(wow);
    } else {
      res.status(404).send({ message: "Wow not found..." });
    }
  });

  

  this is to be use to get the data of the Wow that was clicked in the <WowPage /> the data will be display now in the <EditCreateWow /> by useEffect

    useEffect(() => {
    const fetchWow = async () => {
      dispatch({ type: "FETCH_WOW_REQUEST" });
      try {
        const { data } = await axios.get(`/jol/${wowId}`);
        console.log(data);
        setverse(data.verse);
        setwow(data.wow);
        setby(data.by);
        setdateShared(data.dateShared);
        dispatch({ type: "FETCH_WOW_SUCCESS", payload: data.data });
      } catch (error) {
        dispatch({ type: "FETCH_WOW_FAIL", payload: error.message });
      }
    };
    fetchWow();
  }, [wowId]);

  2. create the editWowHandler() at the <EditCreateWow />

  Implement the following routing in the server.js

  app.use("/jol/wow/:id", wowRoute);
  app.use("/jol/:id", wowRoute);



Encountered Error
1. Implementation of isAdmin. It seems that it doesn't recognize yet the isAdmin state as it resulted to axios error 401 unauthorized. temporarily disabled the function

2. Error 500 in doing the put method after editing the Wow. Issue is a typo error:
used await axios.put(`/jol/:id', instead of await axios.put(`/jol/${wowId}`,


*/
