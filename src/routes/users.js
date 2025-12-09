import express from "express";
import usersController from "../controller/usersController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", [auth.isAuthenticated], usersController.getUserById);

export default router;
