import express from "express";
import Wow from "../models/wowModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";



const wowRoute = express.Router()

wowRoute.post(
    '/wow',
    expressAsyncHandler(async(req, res)=>{
        const wow = new Wow({
            verse: req.body.verse,
            wow: req.body.wow,
            by: req.body.by,
        })
        const createdWow = await wow.save()
        res.send({
            _id: createdWow._id,
            verse: createdWow.verse,
            wow: createdWow.wow,
            by: createdWow.by,
        })
    })
)

wowRoute.get("/wows", async (req, res) => {
    const wows = await Wow.find();
    res.send(wows);
  });
  wowRoute.get("/wowLast", async (req, res) => {
    const wows = await Wow.find();
    res.send(wows);
  });

export default wowRoute