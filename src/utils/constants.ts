import dotenv from "dotenv";

dotenv.config();

export enum ENV_ENUMS {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

process.env.NODE_ENV === ENV_ENUMS.PRODUCTION
  ? dotenv.config({ path: ".env.production" })
  : dotenv.config({ path: ".env.development" });

export const APP = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || "localhost",
};

export const CORS = {
  DEVELOPMENT: {
    ORIGIN: process.env.CORS_DEVELOPMENT_ORIGIN || "*",
    SUCCESS_CODE: Number(process.env.CORS_DEVELOPMENT_SUCCESS_CODE) || 200,
  },
  PRODUCTION: {
    ORIGIN: process.env.CORS_PRODUCTION_ORIGIN || "*",
    SUCCESS_CODE: Number(process.env.CORS_PRODUCTION_SUCCESS_CODE) || 200,
  },
};

export const WINSTON = {
  label: process.env.WINSTON_LABEL || "express-boilerplate",
};

export const RATE_LIMITER = {
  WINDOW_MS: process.env.LIMITER_WINDOWMS || "15",
  MAX: process.env.LIMITER_MAX || 50,
  STANDART_HEADER: process.env.LIMITER_STANDART || true,
  LEGACY_HEADER: process.env.LIMITER_LEGACY || true,
};
