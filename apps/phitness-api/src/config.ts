import dotenv from "dotenv";
import fs from "fs";
import * as process from "process";

// checking if .env file is available
const configPath = `${__dirname}/../../../apps/phitness-api/src/.env`;
if (fs.existsSync(configPath)) {
  dotenv.config({ path: configPath });
} else {
  console.error(".env file not found.");
  throw new Error('config not found');
}

export const PORT = (process.env.PORT || 3000) as number;

export const { GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET } = process.env;


