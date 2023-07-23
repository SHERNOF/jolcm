import express from "express";
import expressAsyncHandler from "express-async-handler";
import ChurchEvents from "../models/churchEventsModel.js";

const churchEventsRoute = express.Router();

churchEventsRoute.get("/", async (req, res) => {
  const churchEvents = await ChurchEvents.find();
  res.send(churchEvents);
});

churchEventsRoute.post(
  "/",
  // isAuth,
  // isAdmin,
  expressAsyncHandler(async (req, res) => {
    const churchEvent = new ChurchEvents({
      eventNumber: "number",
      eventTitle: "string",
      pictures: "../img/jedi.jpeg",
    });
    const createdChurchEvent = await churchEvent.save();
    res.send({ message: "Event Created", churchEvent: createdChurchEvent });
  })
);

export default churchEventsRoute;
