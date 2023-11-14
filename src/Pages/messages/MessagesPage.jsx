import React, { useEffect, useReducer } from "react";
import Container from "../../UI/container/Container";
import Title from "../../UI/title/Title";
import classes from "./messagesPage.module.css";
import axios from "axios";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { rootReducer } from "../../store/reducers";
import Loading from "../../UI/loading/Loading";
import MessageBox from "../../UI/messageBox/MessageBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES_REQUEST":
      return { ...state, loading: true };
    case "FETCH_MESSAGES_SUCCESS":
      return { ...state, loading: false, messages: action.payload };
    case "FETCH_MESSAGES_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function MessagesPage() {
  const [{ messages, error, loading }, dispatch] = useReducer(rootReducer, {
    messages: {},
    error: "",
    loading: true,
  });

  useEffect(() => {
    const fetchMessages = async () => {
      dispatch({ type: "FETCH_MESSAGES_REQUEST" });
      try {
        const messages = await axios.get("/jol/messages");
        dispatch({ type: "FETCH_MESSAGES_SUCCESS", payload: messages.data });
        console.log(messages)
      } catch (error) {
        dispatch({ type: "FETCH_MESSAGES_FAIL", payload: error.message });
      }
    };
    fetchMessages();
  }, []);
  return (
    <Container>
      <div className={classes.messagesContainer}>
        <div style={{ width: "100%" }}>
          <Title>Messages</Title>
        </div>
        <div className={classes.messagesContent}>
          { loading ? (<Loading />) : error ? (<MessageBox />) : (
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
                 <th>Email</th>
                 <th>Phone</th>
                 <th>Message</th>
                 <th>Edit</th>
                 <th>Delete</th>

               </tr>
             </tbody>
 
             <tbody>
               {messages.map((x, index) => (
                 <tr key={index}>
                   <td>{new Date(x.createdAt).toLocaleDateString()}</td>
                   <td>{x.email}</td>
                   <td>{x.phone}</td>
                   <td>{x.message}</td>
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
Procedure
1. Create the JSX
2. Create the get messages route (/messages) at messagesRoute.js and return it to FE
3. useEffect to request data from mongoDb and dispatch the FETCH_MESSAGES reducers
4. Create the reducer to handle the loading of the state. Loading first then data then loading false
5. Get the messages, error and loading variables from rootReducer (reducers.js)
6. Use the reducer to load the <Loading />, <MessageBox /> and the data from BE depending on the data status


1. just reproduced the EventsPage.jsx and css then suddenly the MessagesPage element started at top:0. Found out that the class is messagessCntainer instead of .messagesContainer
2. Fixed the date by dd/mm/yyyy = <td>{new Date(x.createdAt).toLocaleDateString()}</td>




*/
