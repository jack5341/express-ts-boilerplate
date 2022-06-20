import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const app = express();

// Utils
import { APP } from "./utils/constants";
import { CORS_OPTS, MORGAN_OPTS } from "./utils/opts";
import { logger } from "./utils/logger";

// Middlewares
app.use(helmet());
app.use(cors(CORS_OPTS));
app.use(morgan(MORGAN_OPTS));

app.listen(APP.PORT, () => {
  logger.warn(`server started at http://${APP.HOST}:${APP.PORT}`);
});
