import dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
  accessKeyId: process.env.accessKeyId || "accessKeyId",
  secretAccessKey: process.env.secretAccessKey || "secretAccessKey",
};
