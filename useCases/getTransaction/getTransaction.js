const { TransactionNotFoundError } = require("../errors");

module.exports = ({ log, transactionDB }) => {
  
  const getTransaction = async ({ transactionId }) => {

    log({
      "type": "debug",
      "action": "getTransaction",
      "message": "Invoked (check arguments under data field)"
    });

    const transaction = await transactionDB.get(transactionId);

    if (!transaction) {
      throw new TransactionNotFoundError("getTransaction", transactionId);
    }

    return transaction;

  };
  
  return {
    getTransaction
  };

};