const { TransactionError } = require("./TransactionError");

describe("TransactionError", () => {

  it("should set all values", () => {

    const action = "TransactionError test";
    const transaction = { "type": "debit", "value": 100 };
    const customMessage = "This message provides some more information";
    const error = new TransactionError(action, transaction, customMessage);

    expect(error.customMessage).toEqual(customMessage);
    expect(error.action).toEqual(action);
    expect(error.transaction).toEqual(transaction);

  });

});