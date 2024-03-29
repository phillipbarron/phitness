import express from 'express';
import * as path from 'path';
import authRoutes from "./routes/auth-route";
import profileRoutes from "./routes/profile"
import cookieSession from "cookie-session";
import "./authentication";
import passport from "passport";
const app = express();

import { GOOGLE_AUTH_ID, COOKIE_KEY } from './config'

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../phitness-api/views'))
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY],
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to phitness-api!' });
});

app.get('/', (req, res) => {
  res.render(`home`, { user: req.user });
});


app.get('/authenticate/google', (req, res) => {
  res.send({ message: 'Welcome to phitness-api!', GOOGLE_AUTH_ID });
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.get('/flappy', (req, res) => {
  if (!req.user) return res.redirect('/auth/google')
  res.send({ message: 'Welcome to phitness-api!' });
});

server.on('error', console.error);
