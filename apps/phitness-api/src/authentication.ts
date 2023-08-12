import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import {GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET} from "./config";

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  if (id && typeof id === 'object') {
    const keys = Object.keys(id);
    const user = { googleId: 'foo', email: 'bar', username: 'baz' }

    done(null, {...user, ...id});
  }

});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_AUTH_ID,
      clientSecret: GOOGLE_AUTH_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      done(null, {googleId: profile.id, email: profile.displayName, username: profile.username});
    }
  )
);
