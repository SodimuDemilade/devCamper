import mongoose from "mongoose";
import User from "./User.js";
import Bootcamp from "./Bootcamp.js";

const SavedBootcampSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        bootcamp: {
            type: mongoose.Schema.ObjectId,
            ref: "Bootcamp",
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

export default mongoose.model("SavedBootcamp", SavedBootcampSchema);