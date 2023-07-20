import express from "express";
import User from "../models/usersModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

const userRoute = express.Router();

userRoute.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Email or Password" });
  })
);

userRoute.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const userRegister = await User.insertOne({
      logInEmail: req.body.email,
      name: req.body.name,
      logInPassword: req.body.password,
    });
  })
);

export default userRoute;
