import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import ratelimit from "express-rate-limit";
import statusMonitor from "express-status-monitor";
import cors from "cors";
const app = express();

// Utils
import { APP } from "./utils/constants";
import { CORS_OPTS, LIMITER_OPTS, MORGAN_OPTS } from "./utils/opts";
import { logger } from "./utils/logger";

// Route
import Hi from "./routers/hi/hi.router";

// Middlewares
app.use(helmet());
app.use(ratelimit(LIMITER_OPTS));
app.use(statusMonitor());
app.use(cors(CORS_OPTS));
app.use(morgan(MORGAN_OPTS));

// v1
app.use("/v1", Hi);

app.listen(APP.PORT, () => {
  logger.warn(`server started at http://${APP.HOST}:${APP.PORT}`);
});
