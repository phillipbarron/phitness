import dotenv from "dotenv";
import fs from "fs";
import * as process from "process";

// checking if .env file is available
if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
} else {
  console.error(".env file not found.");
}

export const PORT = (process.env.PORT || 3000) as number;

const { GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET } = process.env;

