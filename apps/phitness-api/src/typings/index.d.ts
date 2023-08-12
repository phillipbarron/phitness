import { GoogleUser } from "../models/user";

declare global {
  namespace Express {
    interface User extends GoogleUser {}
  }
}
