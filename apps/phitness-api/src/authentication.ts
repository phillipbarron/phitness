import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET } from "./config";
import {isGoogleUser} from "./models/user";

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, isGoogleUser(user) ? user : null);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_AUTH_ID,
      clientSecret: GOOGLE_AUTH_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const emailAddress = profile.emails[0]?.value;
      done(null, {googleId: profile.id, email: emailAddress || 'boo', username: profile.displayName });
    }
  )
);
