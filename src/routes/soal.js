import express from "express";
import soalController from "../controller/soalController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post(
  "/",
  [auth.isAuthenticated, auth.isPengajar],
  soalController.addSoal
);
router.delete(
  "/:idSoal",
  [auth.isAuthenticated, auth.isPengajar],
  soalController.deleteSoal
);

router.get(
  "/:idLatihan",
  [auth.isAuthenticated],
  soalController.getSoalByLatihan
);

router.get("/detail/", soalController.getSoalDetail);

export default router;
