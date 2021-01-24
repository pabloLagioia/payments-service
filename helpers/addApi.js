const { log } = require("../useCases/log");

const addApi = (router, { method, path, handler }) => {
  log({
    "type": "debug",
    "action": "addAPI",
    "message": `Registering: ${method.toUpperCase()} ${path}`
  })
  router[method](path, handler)
};

module.exports = addApi;