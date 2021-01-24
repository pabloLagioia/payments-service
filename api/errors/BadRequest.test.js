const { BadRequest } = require("./BadRequest");

describe("BadRequest", () => {

  it("should set all values", () => {

    const customMessage = "BadRequest test";
    const message = "This message provides some more information";
    const error = new BadRequest(message, customMessage);

    expect(error.message).toEqual(message);
    expect(error.customMessage).toEqual(customMessage);
    expect(error.status).toEqual(400);

  });

});