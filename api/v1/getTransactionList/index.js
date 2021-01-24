const { getTransactionList } = require("../../../useCases/getTransactionList");
const { log } = require("../../../useCases/log");

module.exports = {
  ... require("./getTransactionList")({
    getTransactionList,
    log
  })
};