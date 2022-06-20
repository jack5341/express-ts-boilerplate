import { format, transports } from "winston";
const { combine, timestamp, label, printf, colorize, json } = format;

import { ENV_ENUMS, CORS, WINSTON } from "./constants";

// Morgan Options
export const MORGAN_OPTS =
  process.env.NODE_ENV === ENV_ENUMS.PRODUCTION ? "combined" : "dev";

// Cors Options
export const CORS_OPTS = {
  origin:
    process.env.NODE_ENV === ENV_ENUMS.PRODUCTION
      ? CORS.PRODUCTION.ORIGIN
      : CORS.DEVELOPMENT.ORIGIN,
  optionsSuccessStatus:
    process.env.NODE_ENV === ENV_ENUMS.PRODUCTION
      ? CORS.PRODUCTION.SUCCESS_CODE
      : CORS.DEVELOPMENT.SUCCESS_CODE,
};

export const WINSTON_OPTS = {
  level: process.env.NODE_ENV === ENV_ENUMS.PRODUCTION ? "warn" : "info",
  transports: [
    new transports.Console({
      format: combine(
        label({ label: WINSTON.label }),
        timestamp(),
        colorize(),
        json(),
        printf(
          (info) =>
            `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
        )
      ),
    }),
  ],
  defaultMeta: { service: WINSTON.label },
};
