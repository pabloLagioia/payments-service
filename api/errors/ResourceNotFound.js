const { ApiError } = require("./ApiError");

class ResourceNotFound extends ApiError {

  constructor(message, customMessage, type) {
    super(message, customMessage, type, 404);
  }

}

module.exports = { ResourceNotFound };