import express from "express";
import data from "../data.js";
import ChurchEvents from "../models/churchEventsModel.js";
import Users from "../models/usersModel.js";
import Wow from "../models/wowModel.js";

const seedRouter = express.Router();
seedRouter.get("/", async (req, res) => {
  await ChurchEvents.deleteMany({});
  //   await ChurchEvents.remove({}); //this is to remove preious records if any
  const createdEvents = await ChurchEvents.insertMany(data.churchEvents);

  await Users.deleteMany({});
  const createdUsers = await Users.insertMany(data.users);

  await Wow.deleteMany({});
  const createdWow = await Wow.insertMany(data.wows);

  res.send({ createdEvents, createdUsers, createdWow }); // this is to return the church events from data.js

});




export default seedRouter; // <<< use this in server.js
