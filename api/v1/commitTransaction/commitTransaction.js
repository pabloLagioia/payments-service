const { BadRequest } = require("../../errors");
const { InvalidArgumentError, TransactionError } = require("../../../useCases/errors");

const makeCommitTransaction = ({ commitTransaction, log }) => {

  const handler = async (req, res, next) => {

    try {

      log({
        type: "info",
        action: "commitTransactionRouteHandler",
        message: "Request received"
      });

      const result = await commitTransaction({
        transaction: req.body,
        accountId: req.body.accountId
      });

      res.set("content-type", "application/json");
      res.status(200);
      res.end(JSON.stringify(result));

    } catch (error) {

      log({
        type: "error",
        action: "commitTransaction",
        message: error.message,
        data: error
      });

      if (error instanceof InvalidArgumentError) {
        return next(new BadRequest(error.message, error.customMessage, error.constructor.name));
      }
      
      if (error instanceof TransactionError) {
        return next(new BadRequest(error.message, error.customMessage, error.constructor.name));
      }

      next(error);

    }

  };

  return {
    "handler": handler,
    "method": "post",
    "path": "/v1/transaction/"
  };

};

module.exports = makeCommitTransaction;