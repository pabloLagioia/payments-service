const { log } = require("../useCases/log");

module.exports = (error, req, res, next) => {

  log({
    type: "error",
    action: "api-call",
    message: error.message,
    data: {
      body: req.body,
      url: req.originalUrl,
      headers: req.headers,
      method: req.method,
      stack: error.stack
    }
  });

  if (req.completed) {
    return;
  }

  res.header("Content-Type", "application/json");

  res.status(error.status || 500).send({
    error: error.message,
    message: error.customMessage
  });
  
};