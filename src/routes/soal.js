import express from "express";
import soalController from "../controller/soalController.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", soalController.addSoal);

export default router;
