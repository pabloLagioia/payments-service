class ApiError extends Error {

  constructor(message, customMessage, type, status) {
    super(message);
    this.customMessage = customMessage;
    this.type = type;
    this.status = status;
  }

}

module.exports = { ApiError };