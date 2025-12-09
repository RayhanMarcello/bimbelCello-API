import express from "express";
import materiController from "../controller/materiController.js";

const router = express.Router();

router.post("/", materiController.uploadMateri);
router.get("/", materiController.getAllMateri);
router.delete("/:id", materiController.deleteMateri);

export default router;
