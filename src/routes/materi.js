import express from "express";
import materiController from "../controller/materiController.js";
import auth from "../middleware/auth.js";
import videoController from "../controller/videoController.js";
const router = express.Router();

router.post(
  "/",
  [auth.isAuthenticated, auth.isPengajar],
  materiController.uploadMateri
);

router.get("/", auth.isAuthenticated, materiController.getAllMateri);

router.delete(
  "/:id",
  [auth.isAuthenticated, auth.isPengajar],
  materiController.deleteMateri
);

router.get("/:id", [auth.isAuthenticated], materiController.getMateriById);

router.post(
  "/video",
  [auth.isAuthenticated, auth.isPengajar],
  videoController.addVideo
);

export default router;
