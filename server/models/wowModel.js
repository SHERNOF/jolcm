import mongoose from "mongoose";

const wowSchema = new mongoose.Schema(
    {
        verse:{ type: String, required: true},
        wow:{ type: String, required: true},
        by:{ type: String, required: true},
    },
    {
        timestamps: true
    }
)


const Wow = mongoose.model('Wow', wowSchema)

export default Wow