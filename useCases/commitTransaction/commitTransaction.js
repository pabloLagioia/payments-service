const { InvalidArgumentError, TransactionError } = require("../errors");

module.exports = ({ log, transactionDB, accountDB }) => {
  
  const commitTransaction = async ({ transaction, accountId } = {}) => {

    log({
      "type": "debug",
      "action": "commitTransaction",
      "message": "Invoked (check arguments under data field)",
      "data": {
        transaction,
        accountId
      }
    });

    if (transaction.amount < 0) {
      throw new InvalidArgumentError("commitTransaction", "transaction.amount", "transaction amount must not be negative");
    }
    
    const accountData = await accountDB.get(accountId);

    if (!accountData) {
      throw new InvalidArgumentError("commitTransaction", "transaction.amount", `Cannot apply transaction to accountId ${accountId} as it does not exist`);
    }

    if (transaction.type === "credit") {

      log({ type: "debug", action: "commitTransaction", message: "applying credit to account", data: { accountId, amount: transaction.amount } })
      
      accountData.funds += transaction.amount;

    }
    
    if (transaction.type === "debit") {

      if (accountData.funds - transaction.amount < 0) {

        const message = "Transaction should not lead to negative amount within system";
        
        log({ type: "error", action: "commitTransaction", message, data: { accountId, amount: transaction.amount } })

        throw new TransactionError("commitTransaction", transaction, message);

      }

      log({ type: "debug", action: "commitTransaction", message: "applying debit to account", data: { accountId, amount: transaction.amount } })

      accountData.funds -= transaction.amount;

    }

    await Promise.all([
      transactionDB.save(transaction),
      accountDB.saveField(accountId, "amount", accountData.funds)
    ]);

  };
  
  return {
    commitTransaction
  };

};