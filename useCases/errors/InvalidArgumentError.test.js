const { InvalidArgumentError } = require("./InvalidArgumentError");

describe("InvalidArgumentError", () => {

  it("should set all values", () => {

    const action = "InvalidArgumentError test";
    const argumentName = "someArgumentName";
    const customMessage = "This message provides some more information";
    const error = new InvalidArgumentError(action, argumentName, customMessage);

    expect(error.customMessage).toEqual(customMessage);
    expect(error.action).toEqual(action);
    expect(error.argumentName).toEqual(argumentName);

  });

});