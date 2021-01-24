const { log } = require("../log");
const { transactionDB, accountDB } = require("../../dataSource");

module.exports = {
  ... require("./commitTransaction")({
    log,
    transactionDB,
    accountDB
  })
};