import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { GOOGLE_AUTH_ID, GOOGLE_AUTH_SECRET } from "./config";
const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_AUTH_ID,
      clientSecret: GOOGLE_AUTH_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log({accessToken, refreshToken});
      console.log(`and the userprofile is ${profile}`);
      done();
    }
  )
);
