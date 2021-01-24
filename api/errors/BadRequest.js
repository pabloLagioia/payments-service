const { ApiError } = require("./ApiError");

class BadRequest extends ApiError {

  constructor(message, customMessage, type) {
    super(message, customMessage, type, 400);
  }

}

module.exports = { BadRequest };