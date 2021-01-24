const { log } = require("../log");
const { transactionDB } = require("../../dataSource")

module.exports = {
  ... require("./getTransaction")({
    log,
    transactionDB
  })
};