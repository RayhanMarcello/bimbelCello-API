import express from "express";
import auth from "../middleware/auth.js";
import videoController from "../controller/videoController.js";

const router = express.Router();

router.post(
  "/video",
  [auth.isAuthenticated, auth.isPengajar],
  videoController.addVideo
);

router.delete(
  "/:id",
  [auth.isAuthenticated, auth.isPengajar],
  videoController.deleteVideo
);

export default router;
