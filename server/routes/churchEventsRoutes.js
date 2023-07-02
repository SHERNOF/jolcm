import express from "express";
import ChurchEvents from "../models/churchEventsModel.js";

const churchEventsRoute = express.Router();

churchEventsRoute.get("/", async (req, res) => {
  const churchEvents = await ChurchEvents.find();
  res.send(churchEvents);
});

export default churchEventsRoute;
