class InvalidArgumentError extends Error {

  constructor(action, argumentName, customMessage) {
    super(`Argument ${argumentName} is not what was expected for ${action}`);
    this.action = action;
    this.argumentName = argumentName;
    this.customMessage = customMessage;
  }

}

module.exports = { InvalidArgumentError };