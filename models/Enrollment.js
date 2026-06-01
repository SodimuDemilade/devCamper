import mongoose from "mongoose";
import User from "./User.js";
import Bootcamp from "./Bootcamp.js";

const EnrollmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    bootcamp: {
        type: mongoose.Schema.ObjectId,
        ref: "Bootcamp",
        required: true,
    },
    status: {
        type: String,
        enum: [
            "Active",
            "Pending",
            "Inactive"
        ]
    },
    paymentStatus: {
        type: String,
        enum: [
            "Paid",
            "Pending",
        ]
    },
    enrolledAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Enrollment", EnrollmentSchema);
