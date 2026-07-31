import express from "express";
import { addEnrollment, getEnrollmentByBootcamp, getEnrollmentByUser, getEnrollments } from "../controllers/enrollments.js";
import { authorize, protect } from "../middleware/auth.js";
import { advancedResults } from "../middleware/advancedResults.js";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

router.route("/").get(
    protect,
    authorize("admin"),
    advancedResults(Enrollment, [
        {
            path: "user",
            select: "name",
        },
        {
            path: "bootcamp",
            select: "name",
        },
    ]),
    getEnrollments,
);

router.route("/user").get(protect, getEnrollmentByUser);

router.route("/bootcamp/:bootcampId").get(protect, authorize("publisher", "admin"), getEnrollmentByBootcamp);

router.route("/enroll").post(protect, authorize("user"), addEnrollment);

export default router;
