import express from "express";
import bodyParser from "body-parser";
import { users } from "./users.js";
import cors from "cors";
// import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";
import churchEventsRoute from "./routes/churchEventsRoutes.js";

// 1. a connection to mongoDB
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

app.use("/jol/seed", seedRouter); //from seedRouter.js

// 2. replace the local data
app.use("/jol/churchEvents", churchEventsRoute);

app.get("/", (req, res) => {
  res.send(users);
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`serve at http://localhost/${port}`);
});
