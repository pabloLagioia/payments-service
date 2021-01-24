const sinon = require("sinon");
const makeGetTransaction = require("./getTransaction");

describe("getTransaction middleware", () => {

  it("should invoke the use case and respond OK", async () => {

    const getTransaction = sinon.fake.resolves();
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

    const { getTransactionHandler } = makeGetTransaction({
      getTransaction,
      decodeAuthorizationHeader,
      logger
    });

    await expect(getTransactionHandler(req, res, next)).resolves;

    expect(status.callCount).toEqual(1);
    expect(end.callCount).toEqual(1);
    expect(next.callCount).toEqual(0);

  });

  it("should invoke the use case and call next with the error", async () => {

    const getTransaction = sinon.fake.rejects();
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

    const { getTransactionHandler } = makeGetTransaction({
      getTransaction,
      decodeAuthorizationHeader,
      logger
    });

    await expect(getTransactionHandler(req, res, next)).rejects;

    expect(status.callCount).toEqual(0);
    expect(end.callCount).toEqual(0);
    expect(next.callCount).toEqual(1);

  });

});