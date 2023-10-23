import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema(
    {
        name:{ type: String, required: true},
        email:{ type: String, required: true, unique: true},
        phone:{ type: Number, required: true, unique: true},
        message:{ type: String, required: true},
    },
    {
        timestamps: true
    }
)


const Messages = mongoose.model('Messages', messagesSchema)

export default Messages