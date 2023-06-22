import mongoose from "mongoose";

const churchEventsSchema = new mongoose.Schema(
  {
    eventNumber: { type: Number, required: true, unique: true },
    eventTitle: { type: String, required: true },
    pictures: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

// create the model base from the above schema

const ChurchEvents = mongoose.model("ChurchEvents", churchEventsSchema);

export default ChurchEvents;
