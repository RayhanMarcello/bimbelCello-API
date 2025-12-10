import express from "express";
import latihanController from "../controller/latihanController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post(
  "/",
  [auth.isAuthenticated, auth.isPengajar],
  latihanController.addLatihan
);
router.delete(
  "/:id",
  [auth.isAuthenticated, auth.isPengajar],
  latihanController.deleteLatihan
);

router.get(
  "/:id",
  [auth.isAuthenticated],
  latihanController.getLatihanByMateri
);

export default router;
