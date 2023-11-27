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
import { WOW_DELETE_FAILED, WOW_DELETE_RESET, WOW_DELETE_SUCCESS } from "../../store/constants";
import { getError } from "../../utils";
import { a } from "@react-spring/web";

export default function WowPage() {
  const [{ wows, error, loading, wow, userInfo, loadingDelete, successDelete }, dispatch] = useReducer(rootReducer, {
    messages: {},
    error: "",
    loading: true,
    wow: {},
    userInfo:{},
    loadingDelete:false,
    successDelete:false
  });
  const navigate = useNavigate();

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

    if(successDelete){
      dispatch({ type: WOW_DELETE_RESET })
    } else{
      fetchWows()
    }
  }, [successDelete]);

  const deleteHandler = async (wow) => {
    console.log(wow._id)
    
    if(window.confirm('Are you sure you want to delete?')) {
      try{
     await axios.delete(`/jol/del/${wow._id}`, 
     
     // {headers: { Authorization: `Bearer ${userInfo.token}` }}
     );
     dispatch({ type: WOW_DELETE_SUCCESS });
     console.log(wow._id)
        
      }catch(err){
        dispatch({ type: WOW_DELETE_FAILED, payload: getError(err)})
        alert(err)
      }
    }
  }

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
        { loadingDelete && <Loading />}
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
                  <tr key={x._id}>
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
                      <MdDeleteOutline 
                      onClick={() => deleteHandler(x)}
                      />
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
2. Create the wowModel.js


3. create the wowRoutes.js specifically for wow create 

  wowRoute.post(
  "/wow",
  // isAdmin,
  expressAsyncHandler(async (req, res) => {
    const wow = new Wow({
      verse: req.body.verse,
      wow: req.body.wow,
      by: req.body.by,
      dateShared: req.body.dateShared,
    });
    const createdWow = await wow.save();
    res.send({
      _id: createdWow._id,
      verse: createdWow.verse,
      wow: createdWow.wow,
      by: createdWow.by,
      dateShared: createdWow.dateShared,
    });
  })
);

and retrieve and be displayed the <Wow /> at <Home />

  wowRoute.get("/wows", async (req, res) => {
    const wows = await Wow.find();
    res.send(wows);
  });

This use setlast(wows.data[wows.data.length - 1]) state to display only the latest post

This route utilizes the whole wow posts and all are displayed in this <WowPage />

  wowRoute.get("/wows", async (req, res) => {
  const wows = await Wow.find();
  res.send(wows);
});

4. implement the wowRoutes.js to server.js

5. create the FETCH_WOW (request, success and failed )in constant, actions and reducer.js
6. create the wow:{} state in the reducer.js. This is to be use in the <Wow />
7. Create the admin route to let only be admin able to create wow



II. 
1. Create the <Wow.jsx /> to display the messages in the <Home />


III. Implememnt the Edit function in the <WowPage />
1. Create the 
    wowRoute.get("/wow/:id", async (req, res) => {
    const wow = await Wow.findById(req.params.id);
    if (wow) {
      res.send(wow);
    } else {
      res.status(404).send({ message: "Wow not found..." });
    }
  });

2. Implement app.use("/jol/wow/:id", wowRoute); in server.js
3. Create the <EditCreateWow />. this is similar to >CreateWow /> it just use the put instead of post

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


  IV. Implement the delete function at <WowPage /.



Encountered Error
1. Implementation of isAdmin. It seems that it doesn't recognize yet the isAdmin state as it resulted to axios error 401 unauthorized. temporarily disabled the function

2. Error 500 in doing the put method after editing the Wow. Issue is a typo error:
used await axios.put(`/jol/:id', instead of await axios.put(`/jol/${wowId}`,

3. Error 500 during record delete
  -  parameter supplied is worng. Initially  onClick={() => deleteHandler(wow)}, it should be onClick={() => deleteHandler(x)} as x is the result of map()
  - at

        wowRoute.delete(
    "/del/:id",
    expressAsyncHandler(async (req, res) => {
      const wow = await Wow.findById(req.params.id);
      console.log(wow)
      if (wow) {
        await wow.deleteOne(); <<< initially typed as await product.deleteOne()
        res.send({ message: "Wow Deleted" });
      } else {
        res.status(404).send({ message: "Wow Not Found" });
      }
    })
  );



*/
