import User from "../models/User.js";
import { ErrorResponse } from "../utils/errorResponse.js";
import { asyncHandler } from "../middleware/async.js";

// @desc   -   Get all users
// @route  -   GET /api/v1/auth/users
// @access -   Private/admin
export const getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc   -   Get single user
// @route  -   GET /api/v1/auth/users/:id
// @access -   Private/admin
export const getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 400));
    }

    res.status(200).json({
        success: true,
        data: user,
    });
});

// @desc   -   Create user
// @route  -   POST /api/v1/auth/users
// @access -   Private/admin
export const createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        data: user,
    });
});

// @desc   -   Update user
// @route  -   PUT /api/v1/auth/users/:id
// @access -   Private/admin
export const updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!user) {
        return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 400));
    }

    res.status(200).json({
        success: true,
        data: user,
    });
});

// @desc   -   Delete user
// @route  -   DELETE /api/v1/auth/users/:id
// @access -   Private/admin
export const deleteUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 400));
    }

    res.status(200).json({
        success: true,
        data: null,
    });
});

