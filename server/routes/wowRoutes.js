import express from "express";
import Wow from "../models/wowModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken, isAdmin } from "../utils.js";

const wowRoute = express.Router();
wowRoute.get("/latestWow", async (req, res) => {
  const latestWow = await Wow.find({}).sort({$natural:-1}).limit(1);
  res.send(latestWow);
  console.log(latestWow)
});

wowRoute.post(
  "/wow",
  // isAdmin,
  expressAsyncHandler(async (req, res) => {
    const wow = new Wow({
      verse: req.body.verse,
      wow: req.body.wow,
      by: req.body.by,
      dateShared: req.body.dateShared,
    });
    const createdWow = await wow.save();
    res.send({
      _id: createdWow._id,
      verse: createdWow.verse,
      wow: createdWow.wow,
      by: createdWow.by,
      dateShared: createdWow.dateShared,
    });
  })
);
wowRoute.get("/:id", async (req, res) => {
  const wowId = await Wow.findById(req.params.id);
  if (wowId) {
    res.send(wowId);
  } else {
    res.status(404).send({ message: "Wow not found..." });
  }
});

wowRoute.put(
  "/:id/comments",
  // isAdmin,
  expressAsyncHandler(async (req, res) => {
    // const wowId = req.params.id;
    const wowId = await Wow.find({}).sort({$natural:-1}).limit(1);
    console.log(wowId)
    const wow = await Wow.findById(wowId);
    if (wow) {
      wow.verse = req.body.verse;
      wow.wow = req.body.wow;
      wow.by = req.body.by;
      wow.dateShared = req.body.dateShared;
      res.send({ message: "Wow Updated" });
      await wow.save();
    } else {
      res.status(404).send({ message: "Wow Not Found" });
    }
  })
);

wowRoute.delete(
    "/del/:id",
    // isAuth,
    // isAdmin,
    expressAsyncHandler(async (req, res) => {
      const wow = await Wow.findById(req.params.id);
      console.log(wow)
      if (wow) {
        await wow.deleteOne();
        res.send({ message: "Wow Deleted" });
      } else {
        res.status(404).send({ message: "Wow Not Found" });
      }
    })
  );

export default wowRoute;
