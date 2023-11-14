import express from "express";
import Messages from "../models/messagesModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";



const messagesRoute = express.Router()

messagesRoute.post(
    '/message',
    expressAsyncHandler(async(req, res)=>{
        const message = new Messages({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        })
        const createdMessage = await message.save()
        res.send({
            _id: createdMessage._id,
            name: createdMessage.name,
            email: createdMessage.email,
            phone: createdMessage.phone,
            message: createdMessage.message
        })
    })
)

messagesRoute.get("/messages", async (req, res) => {
    const messages = await Messages.find();
    res.send(messages);
  });

export default messagesRoute