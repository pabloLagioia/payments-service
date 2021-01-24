module.exports = {
  port: 3000,
  warnOnSlowApiResponse: true,
  expectedApiResponseLatency: 50,
  jsonParser: {
    limit: "5mb"
  }
};