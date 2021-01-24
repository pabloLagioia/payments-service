const { getTransaction } = require("../../../useCases/getTransaction");
const { log } = require("../../../useCases/log");

module.exports = {
  ... require("./getTransaction")({
    getTransaction,
    log
  })
};