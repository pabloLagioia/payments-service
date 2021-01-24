const makeCommitTransaction = require("./commitTransaction");
const sinon = require("sinon");
const { InvalidArgumentError, TransactionError } = require("../errors");

const { log } = require("../log");

describe("commitTransaction", () => {
  
  it("should credit the account", async () => {

    const transactionDB = {
      save: sinon.spy()
    };

    const testAccount = {
      funds: 100,
      id: 1
    };

    const accountDB = {
      getOne: sinon.fake.resolves(testAccount),
      saveField: sinon.fake.resolves()
    };
    
    const { commitTransaction } = makeCommitTransaction({
      log,
      transactionDB,
      accountDB
    });

    const transaction = {
      type: "credit",
      amount: 50
    };

    await commitTransaction({ transaction, accountId: testAccount.id });

    expect(transactionDB.save.calledOnce).toEqual(true);
    expect(transactionDB.save.calledWith(transaction)).toEqual(true);
    expect(testAccount.funds).toEqual(150);
    expect(accountDB.saveField.callCount).toEqual(1);

  });
  
  it("should debit the account", async () => {

    const transactionDB = {
      save: sinon.spy()
    };

    const testAccount = {
      funds: 100,
      id: 1
    };

    const accountDB = {
      getOne: sinon.fake.resolves(testAccount),
      saveField: sinon.fake.resolves()
    };
    
    const { commitTransaction } = makeCommitTransaction({
      log,
      transactionDB,
      accountDB
    });

    const transaction = {
      type: "debit",
      amount: 50
    };

    await commitTransaction({ transaction, accountId: testAccount.id });

    expect(transactionDB.save.calledOnce).toEqual(true);
    expect(transactionDB.save.calledWith(transaction)).toEqual(true);
    expect(testAccount.funds).toEqual(50);
    expect(accountDB.saveField.callCount).toEqual(1);

  });

  it("should throw if transaction amount is negative", async () => {

    const transactionDB = {
      save: sinon.spy()
    };

    const testAccount = {
      funds: 100,
      id: 1
    };

    const accountDB = {
      getOne: sinon.fake.resolves(testAccount),
      saveField: sinon.fake.resolves()
    };
    
    const { commitTransaction } = makeCommitTransaction({
      log,
      transactionDB,
      accountDB
    });

    const transaction = {
      type: "debit",
      amount: -50
    };

    await expect(commitTransaction({ transaction, accountId: testAccount.id })).rejects.toEqual(new InvalidArgumentError("commitTransaction", "transaction.amount", "transaction amount must not be negative"));

    expect(transactionDB.save.callCount).toEqual(0);
    expect(accountDB.saveField.callCount).toEqual(0);

  });

  it("should throw if transaction is going to generate a negative entry in the system", async () => {

    const transactionDB = {
      save: sinon.spy()
    };

    const testAccount = {
      funds: 100,
      id: 1
    };

    const accountDB = {
      getOne: sinon.fake.resolves(testAccount),
      saveField: sinon.fake.resolves()
    };
    
    const { commitTransaction } = makeCommitTransaction({
      log,
      transactionDB,
      accountDB
    });

    const transaction = {
      type: "debit",
      amount: 150
    };

    await expect(commitTransaction({ transaction, accountId: testAccount.id })).rejects.toEqual(new TransactionError("commitTransaction", transaction, "Transaction should not lead to negative amount within system"));

    expect(transactionDB.save.callCount).toEqual(0);
    expect(accountDB.saveField.callCount).toEqual(0);

  });

});