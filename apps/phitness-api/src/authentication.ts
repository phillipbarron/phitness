import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET } from "./config";
const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_AUTH_ID,
      clientSecret: GOOGLE_AUTH_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log({accessToken, refreshToken});
      console.log(`and the userprofile is `, profile );
      done(null, { googleId: profile.id, email: profile.displayName, username: profile.username });
    }
  )
);
