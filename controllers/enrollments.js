import { asyncHandler } from "../middleware/async.js";
import Enrollment from "../models/Enrollment.js";
import Bootcamp from "../models/Bootcamp.js";


// dotenv.config();

// @desc   -   Get all enrollments
// @route  -   GET /api/v1/enrollments
// @access -   Private
export const getEnrollments = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});


// @desc   -   Get enrollments by user
// @route  -   GET /api/v1/enrollments/user
// @access -   Private
export const getEnrollmentByUser = asyncHandler(async (req, res, next) => {
    const enrollments = await Enrollment.find({user: req.user._id});

    res.status(200).json({
        success: true,
        count: enrollments.length,
        data: enrollments
    });

})

// @desc   -   Get enrollments by bootcamp
// @route  -   GET /api/v1/enrollments/bootcamp
// @access -   Private
export const getEnrollmentByBootcamp = asyncHandler(async (req, res, next) => {
    const enrollments = await Enrollment.find({bootcamp: req.params.bootcampId});

    res.status(200).json({
        success: true,
        count: enrollments.length,
        data: enrollments
    });

})


// @desc   -   Enroll user
// @route  -   POST /api/v1/enrollments/enroll
// @access -   Private
export const addEnrollment = asyncHandler(async (req, res, next) => {
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

    const enrollment = await Enrollment.create(req.body);

    res.status(200).json({
        success: true,
        data: enrollment
    });

});
