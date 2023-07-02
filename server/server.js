import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";
import churchEventsRoute from "./routes/churchEventsRoutes.js";
import usersRoute from "./routes/usersRoutes.js";
// console.log(users[1]._id);
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/jol/seed", seedRouter); //from seedRouter.js

// 2. replace the local data
app.use("/jol/churchEvents", churchEventsRoute);

// 3. replace the local data
// app.get("/jol/users", (req, res) => {
//   res.send(data.users);
// });
app.get("/jol/users", usersRoute);

// *from userRoutes.js
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`serve at http://localhost/${port}`);
});