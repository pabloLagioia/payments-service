const DB = new require("./db");

const transactionDB = new DB();
const accountDB = new DB();

accountDB.save({
  id: 1,
  funds: 0
});

module.exports = {
  transactionDB,
  accountDB
};