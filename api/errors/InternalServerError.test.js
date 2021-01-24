const { InternalServerError } = require("./InternalServerError");

describe("InternalServerError", () => {

  it("should set all values", () => {

    const customMessage = "InternalServerError test";
    const message = "This message provides some more information";
    const error = new InternalServerError(message, customMessage);

    expect(error.message).toEqual(message);
    expect(error.customMessage).toEqual(customMessage);
    expect(error.status).toEqual(500);

  });

});