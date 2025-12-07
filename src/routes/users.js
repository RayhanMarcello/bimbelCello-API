import express from "express";
import usersController from "../controller/usersController.js";

const router = express.Router();

router.get("/:id", usersController.getUserById);

export default router;
