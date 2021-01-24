module.exports = () => {
  
  const log = ({ type, message, action, data }) => {
    console.log(JSON.stringify({
      type, 
      action, 
      message, 
      date: new Date().toISOString(), 
      data
    }))
  };
  
  return {
    log
  };

};