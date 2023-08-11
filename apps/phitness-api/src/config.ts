import dotenv from "dotenv";
import fs from "fs";
import * as process from "process";
import * as path from "path";

// checking if .env file is available
const consigPath = `${__dirname}/../../../apps/phitness-api/src/.env`;
if (fs.existsSync(consigPath)) {


  dotenv.config({ path: consigPath });
} else {
  console.error(__dirname, consigPath);
  console.error(".env file not found.");
}

export const PORT = (process.env.PORT || 3000) as number;

export const { GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET } = process.env;


