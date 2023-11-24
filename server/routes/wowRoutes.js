import express from "express";
import Wow from "../models/wowModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken, isAdmin } from "../utils.js";



const wowRoute = express.Router()

wowRoute.post(
    '/wow',
    // isAdmin,
    expressAsyncHandler(async(req, res)=>{
        const wow = new Wow({
            verse: req.body.verse,
            wow: req.body.wow,
            by: req.body.by,
            dateShared: req.body.dateShared,
        })
        const createdWow = await wow.save()
        res.send({
            _id: createdWow._id,
            verse: createdWow.verse,
            wow: createdWow.wow,
            by: createdWow.by,
            dateShared: createdWow.dateShared,
        })
    })
)

wowRoute.get("/wows", async (req, res) => {
    const wows = await Wow.find();
    res.send(wows);
  });


export default wowRoute