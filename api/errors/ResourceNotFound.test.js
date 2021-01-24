const { ResourceNotFound } = require("./ResourceNotFound");

describe("ResourceNotFound", () => {

  it("should set all values", () => {

    const customMessage = "ResourceNotFound test";
    const message = "This message provides some more information";
    const error = new ResourceNotFound(message, customMessage);

    expect(error.message).toEqual(message);
    expect(error.customMessage).toEqual(customMessage);
    expect(error.status).toEqual(404);

  });

});