class ErrorHandler extends Error {
    constructor(message, statusCode) {
        // Message property exists in Error class, which is being replaces with the one that is received by calling the super method
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        // Here a new property is assigned
        this.statusCode = statusCode;
    }
}
export default ErrorHandler;
