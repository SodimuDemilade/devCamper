import express from "express";
import {
  getCourse,
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courses.js";

import Course from "../models/Course.js";
import { advancedResults } from "../middleware/advancedResults.js";
import { authorize, protect } from "../middleware/auth.js";

const router = express.Router({mergeParams: true});  // mergeParam is to be able to bring in the route sent from bootcamp

router.route("/").get(advancedResults(Course, {
            path: "bootcamp",
            select: "name description",
        }), getCourses).post(protect, authorize('publisher', 'admin'), addCourse);

router
  .route("/:id")
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);

export default router;
