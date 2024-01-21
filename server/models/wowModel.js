import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const wowSchema = new mongoose.Schema(
  {
    verse: { type: String, required: true },
    wow: { type: String, required: true },
    by: { type: String, required: true },
    dateShared: { type: String, required: true },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Wow = mongoose.model("Wow", wowSchema);

export default Wow;
