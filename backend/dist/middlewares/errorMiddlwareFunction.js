export const errorMiddlewareFunction = (
// The below Error class is from Node only which is replaced with the custom ErrorHandler class from the uitls
//   err: Error,
err, req, res, next) => {
    // It assigns the right-hand side value to the left-hand side variable only if the left-hand side is falsy. If the left-hand side is truthy, it retains its current value.
    //   The expanded form: err.message = err.message || ""
    err.message || (err.message = "This error is custom error. Pay ATTENTION when this comes.");
    err.statusCode || (err.statusCode = 500);
    res.status(err.statusCode).send({
        success: false,
        message: err.message,
    });
};
