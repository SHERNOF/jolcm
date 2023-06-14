import express from "express";
import { users } from "./users.js";
import { churchEvents } from "./data.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userInfo = users;

app.get("/", (req, res) => {
  res.send(userInfo);
});

// fetching the eents data from server
app.get("/church-events", (req, res) => {
  res.send(churchEvents);
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

// 1. create a server folder
// 2. npm init -y
// 3. set type:module in package.json
// 4. npm i express
// 5. get the static data
// 6. assign port
// 7. npm i nodemon --save-dev; set start: nodemon server.js
// 8. set the api (/church-events)

// 9. set proxy ("proxy": "http://localhost:5000",) in package.json (first package.json) to access the BE. add it after the name
// 10. install axios in the FE
// 11. use hooks to fetch data from BE
