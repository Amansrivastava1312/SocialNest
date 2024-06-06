import express from "express";
import {
  followUnfollowUser,
  freezeAccount,
  getSuggestedUsers,
  getUserProfile,
  loginUser,
  logoutUser,
  signupUser,
  updateUser,
  verifyOTP,
} from "../controller/userController.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();
router.get("/profile/:query", getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);

router.post("/signup", signupUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.put("/update/:id", protectRoute, updateUser);
router.put("/freeze", protectRoute, freezeAccount);
export default router;
