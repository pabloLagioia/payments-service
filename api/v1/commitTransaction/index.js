const { commitTransaction } = require("../../../useCases/commitTransaction");
const { log } = require("../../../useCases/log");

module.exports = {
  ... require("./commitTransaction")({
    commitTransaction,
    log
  })
};