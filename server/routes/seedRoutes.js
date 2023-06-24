import express from "express";
import test from "../data.js";
import ChurchEvents from "../models/churchEvents.js";

const seedRouter = express.Router();
seedRouter.get("/", async (req, res) => {
  await ChurchEvents.deleteMany({});
  //   await ChurchEvents.remove({}); //this is to remove preious records if any
  const createdEvents = await ChurchEvents.insertMany(test.churchEvents);
  res.send({ createdEvents }); // this is to return the church events from data.js
});

export default seedRouter; // <<< use this in server.js
