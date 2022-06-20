import { createLogger } from "winston";
import { WINSTON_OPTS } from "./opts";

export const logger = createLogger(WINSTON_OPTS);
