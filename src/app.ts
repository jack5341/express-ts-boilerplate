import express from "express";
import ratelimit from "express-rate-limit";
import auth from "http-auth";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const app = express();

// Utils
import { APP, MONITOR } from "./utils/constants";
import { CORS_OPTS, LIMITER_OPTS, MORGAN_OPTS } from "./utils/opts";
import { logger } from "./utils/logger";

// Route
import Hi from "./routers/hi/hi.router";

const basic = auth.basic(
  { realm: "Monitor Area" },
  function (user, pass, callback) {
    callback(user === MONITOR.USERNAME && pass === MONITOR.PASSWORD);
  }
);

const statusMonitor = require("express-status-monitor")({ path: MONITOR.PATH });

// Middlewares
app.use(helmet());
app.use(ratelimit(LIMITER_OPTS));
app.use(cors(CORS_OPTS));
app.use(morgan(MORGAN_OPTS));
app.use(statusMonitor.middleware);

// v1
app.use("/v1", Hi);

app.get("/status", basic.check(statusMonitor.pageRoute));

app.listen(APP.PORT, () => {
  logger.warn(`server started at http://${APP.HOST}:${APP.PORT}`);
});
