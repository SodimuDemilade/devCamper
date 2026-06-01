import express from "express";
import { authorize, protect } from "../middleware/auth.js";
import {
    getSavedBootcamps,
    saveBootcamp,
} from "../controllers/savedBootcamps.js";

const router = express.Router({ mergeParams: true });

router
    .route("/")
    .get(protect, authorize("user"), getSavedBootcamps)
    .post(protect, authorize("user"), saveBootcamp);

export default router;
