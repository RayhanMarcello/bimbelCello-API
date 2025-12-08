import express from "express";
import materiController from "../controller/materiController.js";

const router = express.Router();

router.post("/", materiController);

export default router;
