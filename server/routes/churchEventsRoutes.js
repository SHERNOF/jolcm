import express from "express";
import ChurchEvents from "../models/churchEvents.js";

const churchEventsRoute = express.Router();

churchEventsRoute.get("/", async (req, res) => {
  const churchEvents = await ChurchEvents.find();
  res.send(churchEvents);
  console.log(churchEvents);
});

export default churchEventsRoute;
