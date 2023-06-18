import express from "express";
import bodyParser from "body-parser";

import { users } from "./users.js";
import cors from "cors";
import data from "./data.js";

const app = express();

// const churchEvent = churchEvents;
// const user = users;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(users);
});

app.get("/jol", (req, res) => {
  res.send(data);
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`serve at http://localhost/${port}`);
});
