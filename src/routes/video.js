import express from "express";
import auth from "../middleware/auth.js";
import videoController from "../controller/videoController.js";

const router = express.Router();

router.post(
  "/",
  [auth.isAuthenticated, auth.isPengajar],
  videoController.addVideo
);

router.delete(
  "/:id",
  [auth.isAuthenticated, auth.isPengajar],
  videoController.deleteVideo
);

router.get(
  "/materi/:idMateri",
  [auth.isAuthenticated],
  videoController.getVideoByMateriId
);
router.get("/:idVideo", [auth.isAuthenticated], videoController.getVideoById);
export default router;
