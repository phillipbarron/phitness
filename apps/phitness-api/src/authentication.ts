import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import {GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET} from "./config";

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  console.log('the user object in the serialise call is ', user)
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  if (user && typeof user === 'object') {
    console.log('the user object in the deserialise call is ', user)
    const keys = Object.keys(user);
    const usear = { googleId: 'foo', email: 'bar', username: 'baz' }

    done(null, {...usear, ...user});
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
      console.log(profile);
      const emailAddress = profile.emails[0]?.value;
      done(null, {googleId: profile.id, email: emailAddress || 'boo', username: profile.displayName });
    }
  )
);
