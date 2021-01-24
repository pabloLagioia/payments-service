const sinon = require("sinon");
const makeCommitTransaction = require("./commitTransaction");

describe("commitTransaction middleware", () => {

  it("should invoke the use case and respond 200", async () => {

    const commitTransaction = sinon.fake.resolves();
    const end = sinon.spy();
    const status = sinon.spy();
    const set = sinon.spy();
    const req = { params: { }, query: { } };
    const res = { status, set, end };
    const next = sinon.spy();
    const user = {};
    const decodeAuthorizationHeader = sinon.fake.returns(user);
    const logger = {
      "debug": sinon.spy(),
      "error": sinon.spy(),
      "info": sinon.spy()
    };

    const { commitTransactionHandler } = makeCommitTransaction({
      commitTransaction,
      decodeAuthorizationHeader,
      logger
    });

    await expect(commitTransactionHandler(req, res, next)).resolves;

    expect(status.callCount).toEqual(1);
    expect(end.callCount).toEqual(1);
    expect(next.callCount).toEqual(0);

  });

  it("should invoke the use case and call next with the error", async () => {

    const commitTransaction = sinon.fake.rejects();
    const end = sinon.spy();
    const status = sinon.spy();
    const set = sinon.spy();
    const req = { params: { }, query: { } };
    const res = { status, set, end };
    const next = sinon.spy();
    const user = {};
    const decodeAuthorizationHeader = sinon.fake.returns(user);
    const logger = {
      "debug": sinon.spy(),
      "error": sinon.spy(),
      "info": sinon.spy()
    };

    const { commitTransactionHandler } = makeCommitTransaction({
      commitTransaction,
      decodeAuthorizationHeader,
      logger
    });

    await expect(commitTransactionHandler(req, res, next)).rejects;

    expect(status.callCount).toEqual(0);
    expect(end.callCount).toEqual(0);
    expect(next.callCount).toEqual(1);

  });

});