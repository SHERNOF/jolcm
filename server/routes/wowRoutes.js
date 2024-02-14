import express from "express";
import Wow from "../models/wowModel.js";
import expressAsyncHandler from "express-async-handler";

import { isAuth } from "../utils.js";

const wowRoute = express.Router();

// get and display all wows in WowPage
wowRoute.get("/wows", async (req, res) => {
  const wows = await Wow.find();
  res.send(wows);
});

// get the latest wow to be displayed at home page
wowRoute.get("/latestWow", async (req, res) => {
  const latestWow = await Wow.find({}).sort({ $natural: -1 }).limit(1);
  if (latestWow) {
    res.send(latestWow);
  } else {
    res.status(404).send({ message: "Latest Wow not found..." });
  }
});

// create a wow
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

wowRoute.post(
  "/:id/comments",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const wowId = req.params.id;
    const wow = await Wow.findById(wowId);

    if (wow) {
      // if (wow.comments.find((x) => x.name === req.user.name)) {
      //   return res
      //     .status(400)
      //     .send({ message: "You already submitted a review" });
      // }

      const reaction = {
        name: req.user.name,
        comment: req.body.comment,
      };

      wow.comments.push(reaction);
      const updatedWow = await wow.save();
      res.status(201).send({
        message: "Comment Created",
        // comment: updatedWow.comments[updatedWow.comments.length - 1],
        reaction: updatedWow.comments[updatedWow.comments.length - 1],
      });
    } else {
      res.status(404).send({ message: "Wow Not Found" });
    }
  })
);

wowRoute.put(
  "/:id",
  // isAdmin,
  expressAsyncHandler(async (req, res) => {
    // const wowId = req.params.id;
    const wowId = await Wow.find({}).sort({ $natural: -1 }).limit(1);
    console.log(wowId);
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
    console.log(wow);
    if (wow) {
      await wow.deleteOne();
      res.send({ message: "Wow Deleted" });
    } else {
      res.status(404).send({ message: "Wow Not Found" });
    }
  })
);

export default wowRoute;
