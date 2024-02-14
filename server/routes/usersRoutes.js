import express from "express";
import User from "../models/usersModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

const userRoute = express.Router();

userRoute.get(
  "/usersList",
  expressAsyncHandler(async (req, res) => {
    const usersList = await User.find();
    res.send(usersList);
  })
);

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
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      email: req.body.logInEmail,
      name: req.body.name,
      password: bcrypt.hashSync(req.body.logInPassword, 8),
      isAdmin: false,
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);
userRoute.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(400).send({ message: "User not existing" });
    }
  })
);

export default userRoute;
