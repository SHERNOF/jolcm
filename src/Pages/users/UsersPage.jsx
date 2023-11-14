import React, { useEffect, useReducer } from "react";
import Container from "../../UI/container/Container";
import Title from "../../UI/title/Title";
import Loading from "../../UI/loading/Loading";
import MessageBox from "../../UI/messageBox/MessageBox";
import classes from "./usersPage.module.css";
import { rootReducer } from "../../store/reducers";
import axios from "axios";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_USERS_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function UsersPage() {
  const [{ usersList, error, loading }, dispatch] = useReducer(rootReducer, {
    usersList: {},
    error: "",
    loading: true,
  });
  useEffect(() => {
    const fetchUsersList = async () => {
      dispatch({ type: "FETCH_USERS_REQUEST" });
      try {
        const usersList = await axios.get("/jol/users/usersList");
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: usersList.data });
        console.log(usersList);
      } catch (error) {
        dispatch({ type: "FETCH_USERS_FAIL", payload: error.message });
      }
    };
    fetchUsersList();
  }, []);

  return (
    <Container>
      <div className={classes.usersContainer}>
        <div style={{ width: "100%" }}>
          <Title>
            Users &nbsp;&nbsp;
            <IoIosCreate style={{ cursor: "pointer" }} />
          </Title>
        </div>
        <div className={classes.usersContent}>
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
                  <th>name</th>
                  <th>email</th>
                  <th>isAdmin?</th>
                  <th>Date Created</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </tbody>

              <tbody>
                {usersList.map((x, index) => (
                  <tr key={index}>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    {/* <td>{x.isAdmin}</td> */}
                    <td>
                      <input
                        type="checkbox"
                        id="isAdmin"
                        name="isAdmin"
                        value={`${x.isAdmin ? "Admin" : ""}`}
                        // { `${ x.isAdmin ? checked : ''}` }
                        // { `${x.isAdmin ? checked : ''}` }
                      ></input>
                      <label htmlFor="isAdmin">
                        {x.isAdmin ? "Yes" : "No"}
                      </label>
                    </td>
                    <td>{new Date(x.createdAt).toLocaleDateString()}</td>
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
1. Define the usersList:{} state at the reducers.js
2. Define the FETCH_USERS at constants, actions.js and reducers.js
3. Create the route in usersRoutes.js
  userRoute.get('/usersList', expressAsyncHandler( async (req, res) => {
    const usersList = await User.find()
    res.send(usersList)
  }))

4. define the reducer to be use in handling the state when requesting the data from BE
5. desturucture and get the users, error and loading states from rootReducer by the use of useReducer hook frm react
6. get the users data from database using useEffect
7. use map to display the data gathered in the jsx



3. 
*/
