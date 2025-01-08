import express from "express";
import {
  loginUser,
  logoutUser,
  myProfile,
  registerUser,
} from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", isAuth, myProfile);
router.get("/logout", isAuth, logoutUser);

export default router;