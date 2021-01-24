module.exports = ({ log, transactionDB }) => {
  
  const getTransactionList = ({}) => {

    log({
      "type": "debug",
      "action": "getTransactionList",
      "message": "Invoked (check arguments under data field)"
    });

    return transactionDB.find();

  };
  
  return {
    getTransactionList
  };

};