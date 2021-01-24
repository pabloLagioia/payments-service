class TransactionError extends Error {

  constructor(action, transaction, customMessage) {
    super("Error while commiting transaction");
    this.action = action;
    this.transaction = transaction;
    this.customMessage = customMessage;
  }

}

module.exports = { TransactionError };