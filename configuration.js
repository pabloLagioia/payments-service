module.exports = {
  port: 3001,
  warnOnSlowApiResponse: true,
  expectedApiResponseLatency: 50,
  jsonParser: {
    limit: "5mb"
  }
};