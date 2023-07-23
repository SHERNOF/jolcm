import aws from "aws-sdk";
import { config } from "dotenv";
import multerS3 from "multer-s3";
import express from "express";

const router = express.Router();

aws.config({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
});
const s3 = new aws.S3();
const storageS3 = multerS3({
  s3,
  bucket: "jolcm-bucket",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key(req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploadS3 = multerS3({ storage: storageS3 });
router.post("/s3", uploadS3.single("image"), (req, res) => {
  res.send(req.file.location);
});

export default router;
