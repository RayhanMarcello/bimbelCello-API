import express from "express";
import jawabController from "../controller/jawabController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", jawabController.postJawaban);

router.get("/", jawabController.getJawaban);

export default router;
