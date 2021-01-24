const PerformanceTester = require("execution-time");
const configuration = require("../configuration");

const measurePerformanceMiddleware = (req, res, next) => {

  const performanceTester = PerformanceTester();

  performanceTester.start();
  
  next();

  res.once("finish", function() {

    const performanceResult = performanceTester.stop();

    if (performanceResult.time > configuration.expectedApiResponseLatency) {
      log({
        type: "warn",
        action: "api-call",
        message: `${req.method} ${req.originalUrl} took ${performanceResult.time}. Expected latency is ${configuration.expectedApiResponseLatency}`,
        data: {
          method: req.method,
          url: req.originalUrl,
          body: req.body,
          headers: req.headers,
          latency: performanceResult.time
        }
      });
    }

  });

};

module.exports = measurePerformanceMiddleware;