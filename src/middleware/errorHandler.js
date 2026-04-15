// errorHandler.js

/**
 * Express error handling middleware.
 * @param {Error} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function errorHandler(err, req, res, next) {
    // Log the error (could use a logging library here)
    console.error(err.stack);

    // Send a response to the client
    res.status(500).json({
        message: 'An unexpected error occurred!',
        error: err.message || 'Internal Server Error'
    });
}

module.exports = errorHandler;
