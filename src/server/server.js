import express from "express";
import { users } from "./users.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userInfo = users;

app.get("/", (req, res) => {
  res.send(userInfo);
});

// sign in api

app.post("/signin", (req, res) => {
  for (var i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].email === req.body.email &&
      userInfo[i].password === req.body.password
    ) {
      return res.send(userInfo[i]);
    }
  }
  return res.status(400).send("no user as such");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost/${port}`);
});
