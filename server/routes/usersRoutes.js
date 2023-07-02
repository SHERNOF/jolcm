import express from "express";
import Users from "../models/usersModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

const usersRoute = express.Router();

usersRoute.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const users = await Users.findOne({ email: req.body.email });
    console.log(users);
    if (users) {
      console.log("found");
      if (bcrypt.compareSync(req.body.password, users.password)) {
        res.send({
          _id: users._id,
          name: users.name,
          email: users.email,
          isAdmin: users.isAdmin,
          token: generateToken(users),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Email or Password" });
  })
);

export default usersRoute;
