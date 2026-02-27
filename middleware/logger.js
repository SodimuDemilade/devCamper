
// @desc  - Logs requests to console
export const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next(); // so it can move on to the next middleware in the cycle
}