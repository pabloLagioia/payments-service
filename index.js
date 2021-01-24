const { log } = require("./useCases/log");
const addApi = require("./helpers/addApi");
const measurePerformance = require("./helpers/measurePerformance");
const cors = require("express-cross-origin-resource-sharing");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const configuration = require("./configuration");

log({ type: "debug", action: "startup", message: "Booting up Payments service" });

addApi(router, require("./api/v1/commitTransaction"));
addApi(router, require("./api/v1/getTransaction"));
addApi(router, require("./api/v1/getTransactionList"));

if (configuration.enableCors) {
  app.use(cors);
}

if (configuration.warnOnSlowApiResponse) {
  app.use(measurePerformance);
}

app.use(bodyParser.json(configuration.jsonParser));
app.use(router);
app.use(require("./helpers/globalErrorHandler"));

app.listen(configuration.port);

log({ type: "info", action: "startup", message: `Payments service is running on port ${configuration.port}` });