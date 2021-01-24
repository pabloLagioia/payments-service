const { BadRequest, ResourceNotFound } = require("../../errors");
const { InvalidArgumentError, TransactionNotFoundError } = require("../../../useCases/errors");

const makeGetTransaction = ({ getTransaction, log }) => {

  const handler = async (req, res, next) => {

    try {

      log({
        "type": "info",
        "action": "getTransaction",
        "message": "Request received"
      });

      const transaction = await getTransaction({ transactionId: req.params.transactionId });

      res.set("content-type", "application/json");
      res.status(200);
      res.end(JSON.stringify(transaction));

    } catch (error) {

      log({
        "type": "error",
        "action": "getTransaction",
        "message": error.message,
        "data": error
      });

      if (error instanceof InvalidArgumentError) {
        return next(new BadRequest(error.message, error.customMessage, error.constructor.name));
      }

      if (error instanceof TransactionNotFoundError) {
        return next(new ResourceNotFound(error.message, error.customMessage, error.constructor.name));
      }

      next(error);

    }

  };

  return {
    handler,
    method: "get",
    path: "/v1/transaction/:transactionId"
  };

};

module.exports = makeGetTransaction;