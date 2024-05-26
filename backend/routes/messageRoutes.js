import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
  getConversations,
  getMessage,
  sendMessage,
} from "../controller/messageController.js";

const router = express.Router();
router.get("/conversations", protectRoute, getConversations);
router.get("/:otherUserId", protectRoute, getMessage);
router.post("/", protectRoute, sendMessage);

export default router;
