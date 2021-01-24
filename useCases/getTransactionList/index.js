const { log } = require("../log");
const { transactionDB } = require("../../dataSource")

module.exports = {
  ... require("./getTransactionList")({
    log,
    transactionDB
  })
};