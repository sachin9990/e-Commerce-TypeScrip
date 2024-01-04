class ErrorHandler extends Error {
  constructor(public message: string, public statusCode: number) {
    // Message property exists in Error class, which is being replaces with the one that is received by calling the super method
    super(message);
    // Here a new property is assigned
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;
