const { ApiError } = require("./ApiError");

class InternalServerError extends ApiError {

  constructor(message, customMessage, type) {
    super(message, customMessage, type, 500);
  }

}

module.exports = { InternalServerError };