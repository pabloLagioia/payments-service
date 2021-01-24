const { TransactionNotFoundError } = require("./TransactionNotFoundError");

describe("TransactionNotFoundError", () => {

  it("should set all values", () => {

    const action = "TransactionNotFoundError test";
    const transactionId = 1;
    const customMessage = "This message provides some more information";
    const error = new TransactionNotFoundError(action, transactionId, customMessage);

    expect(error.customMessage).toEqual(customMessage);
    expect(error.action).toEqual(action);
    expect(error.transactionId).toEqual(transactionId);

  });

});