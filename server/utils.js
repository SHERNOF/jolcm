import jwt from "jsonwebtoken";

export const generateToken = (users) => {
  return jwt.sign(
    {
      _id: users._id,
      name: users.name,
      email: users.email,
      isAdmin: users.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};
