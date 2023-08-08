import dotenv from "dotenv";
import fs from "fs";
import * as process from "process";
import * as path from "path";

// checking if .env file is available
if (fs.existsSync(`${__dirname}/src/.env`)) {


  dotenv.config({ path: `${__dirname}/src/.env` });
} else {
  console.error(__dirname, `${__dirname}/src/.env`);
  console.error(".env file not found.");
}

export const PORT = (process.env.PORT || 3000) as number;

export const { GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET } = process.env;


