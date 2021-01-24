class TransactionNotFoundError extends Error {

  constructor(action, transactionId, customMessage) {
    super(`Transaction by id ${transactionId} does not exist`);
    this.action = action;
    this.transactionId = transactionId;
    this.customMessage = customMessage;
  }

}

module.exports = { TransactionNotFoundError };