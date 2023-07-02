import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import logger from "use-reducer-logger";
import { rootReducer } from "../../store/reducers";
import Loading from "../common/loading/Loading";

import Card from "../UI/card/Card";

import classes from "./login.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function LogIn() {
  const [{ users, loading, error }, dispatch] = useReducer(
    logger(rootReducer),
    {
      users: [],
    }
  );

  console.log(typeof users);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: "FETCH_USERS_REQUEST" });
      try {
        const users = await axios.get("jol/users");
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: users });
      } catch (error) {
        dispatch({ type: "FETCH_DATA_FAIL", payload: error.message });
      }
    };
    fetchUsers();
  }, []);

  const displayLogin = useSelector((state) => state.displayLogin);

  const [mySwitch, setmySwitch] = useState(false);
  const switchHandler = () => {
    setmySwitch(!mySwitch);
  };
  return (
    <>
      <Card
        className={`${classes.logInContainer} ${
          displayLogin && classes.appear
        }`}
      >
        <div className={classes.switchContainer}>
          <input
            type="checkbox"
            name="switcher"
            className={classes.switcher}
            onClick={switchHandler}
          ></input>
        </div>
        {/* {mySwitch ? (
          loading ? (
            <Loading />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <SignUp />
          )
        ) : (
          <SignIn />
        )} */}

        {loading ? (
          <Loading users={users} />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <SignUp />
        )}
      </Card>
    </>
  );
}

/*
I. Create the LogIn component that contains the SignIn and SignUp components together with the functionalities
1. merge the churchEvents and userList in a single js (data.js) and delete the users.js so all seed data are just in one file
2. create the UserModel.js
3. Include users in the seedRoutes.js >>> this is to seed the dummy users
4. Create the usersRoute.js then implement this in server *from userRoutes
5. implement bcrypt npm i bcryptjs at server folder and implement functionality in the data.js, password field

II. Create API for signin 
1. localhost:7000/jol/users/signin
2. implementation of json web token
3. implementyation of expressAsyncHandler with (req, res) to catch the error npm i express-async-handler in server.js. See *from userRoutes.js
4. check the existense of a user in the userRoute (if conditions) as well as the correctness ogf password with bcrypt functions
5. if connditions are met then send/ return the objkect containin email, id isAdmin and name

III. Implementation of JSON Web token
1. npm i jsonwebtoken
2. create utils.js inside server folder to handle the json web token functionality
3. set up the JWT_SECRET in .env
4. implement generateToken userRoutes.js
5. instead of users, use the content of the object (_id, name, email and password in utils.js)
6. export default userRoutes and use it in server.js
7. implement the following in server.js for POST purposes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


*/
