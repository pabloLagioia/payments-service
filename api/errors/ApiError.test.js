const { ApiError } = require("./ApiError");

describe("ApiError", () => {

  it("should set all values", () => {

    const customMessage = "ApiError test";
    const message = "This message provides some more information";
    const error = new ApiError(message, customMessage, "some type", 400);

    expect(error.message).toEqual(message);
    expect(error.customMessage).toEqual(customMessage);
    expect(error.status).toEqual(400);

  });

});