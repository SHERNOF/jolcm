import express from "express";
import bodyParser from "body-parser";

import { users } from "./users.js";
import cors from "cors";
import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";

// a connection to mongoDB
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected top mongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/seed", seedRouter); //from seedRouter.js

app.get("/jol", (req, res) => {
  res.send(data);
});

app.get("/", (req, res) => {
  res.send(users);
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`serve at http://localhost/${port}`);
});

// connection to mongoDb
// 1. Create an atlas mongoDb
// 2. install local mongoDb
// 3. implement mongoose
// 4. connect to mongo Db
// - create new project
// - in daTABASe click on collections --- add my own data
// - in databses click connect >>> connect to application >>> drivers >>> then copy the code provided
// - mongodb+srv://shernof:<password>@cluster0.ilwymnp.mongodb.net/JoyOfLife?retryWrites=true&w=majority >>> replace password
// - create a .env file in the backend; set a variable name MONGODB_URI and pase the link provided by the mongodb;
// - IGNORE THE .ENV IN THE MAIN GIT >>> npm i dotenv
//  - install npm i mongoose in the server folder
// - configure the server.js
// - see 1

// - optional running local - https://www.mongodb.com/docs/manual/administration/install-community/
// - https://www.mongodb.com/products/compass <<< installer

// seeding the data.js to mongoDB
// 1. Create events, team and users model
// - create it inside a model folder inside the server folder
// - see ChurchEvents.js
// 2. Create the seed route -
// - create routes folder inside the server folder, can name it as routes; create the seedRoutes.js
// 3. use the route in server.js
// 4. seed sample events

//
