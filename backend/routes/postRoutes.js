import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
  createPost,
  deletePost,
  getFeedPosts,
  getPost,
  getUserPosts,
  likeUnlikePost,
  replyToPost,
} from "../controller/postController.js";
const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.get("/user/:username", getUserPosts);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);

export default router;
