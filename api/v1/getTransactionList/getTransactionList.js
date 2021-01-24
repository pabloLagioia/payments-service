const { BadRequest } = require("../../errors");
const { InvalidArgumentError } = require("../../../useCases/errors");

const makeGetTransactionList = ({ getTransactionList, log }) => {

  const handler = async (req, res, next) => {

    try {

      log({
        type: "info",
        action: "getTransactionList",
        message: "Request received"
      });

      const result = await getTransactionList({ ... req.body, ... req.params, ... req.query });

      res.set("content-type", "application/json");
      res.status(200);
      res.end(JSON.stringify({
        transactions: result
      }));

    } catch (error) {

      log({
        type: "error",
        action: "getTransactionList",
        message: error.message
      });

      if (error instanceof InvalidArgumentError) {
        return next(new BadRequest(error.message, error.customMessage, error.constructor.name));
      }

      next(error);

    }

  };

  return {
    handler,
    method: "get", //TODO: replace with correct method
    path: "/v1/transaction" //TODO: replace with correct path
  };

};

module.exports = makeGetTransactionList;