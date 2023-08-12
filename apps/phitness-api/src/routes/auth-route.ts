import express from "express";
const router = express.Router();
import passport from "passport";
router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/home/phill/workspace/phillbarron/apps/phitness-api/src/views/profile.ejs")
  }
  res.render("/home/phill/workspace/phillbarron/apps/phitness-api/src/views/login.ejs");
});


router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
})

export default router;
