import express from "express";
// import loginController from "./loginController.js";

const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    message: "p",
  });
});

export default router;
