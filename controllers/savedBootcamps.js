import SavedBootcamp from "../models/SavedBootcamp.js";
import { asyncHandler } from "../middleware/async.js";
import Bootcamp from "../models/Bootcamp.js";


// @desc   -   Get enrollments by User
// @route  -   GET /api/v1/saved
// @access -   Private
export const getSavedBootcamps = asyncHandler(async (req, res, next) => {
    console.log("im here in saved", req.user.userId);
    const bootcamps = await SavedBootcamp.find({user: req.user._id});

    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    });

});

// @desc   -   Save Bootcamp
// @route  -   POST /api/v1/bootcamps/save
// @access -   Private
export const saveBootcamp = asyncHandler(async (req, res, next) => {
    req.body.user = req.user.id;

    const bootcamp = await Bootcamp.findById(req.body.bootcamp);
    
    if (!bootcamp) {
        return next(
            new ErrorResponse(
                `Bootcamp not found with id of ${req.body.bootcamp}`,
                404,
            ),
        );
    }

    const saved = await SavedBootcamp.create(req.body);

    res.status(200).json({
        success: true,
        data: saved
    });

});
