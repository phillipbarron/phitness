import express, {NextFunction, Request, Response} from "express";
const router = express.Router();


const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};
router.get("/", checkAuth, (req, res) => {
  console.log(req.user)
  res.render("profile", { user: req.user });
});

export default router;
