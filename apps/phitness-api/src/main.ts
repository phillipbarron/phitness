import express from 'express';
import * as path from 'path';

const app = express();

import { GOOGLE_AUTH_ID } from './config'

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to phitness-api!' });
});

app.get('/authenticate/google', (req, res) => {
  res.send({ message: 'Welcome to phitness-api!', GOOGLE_AUTH_ID });
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
