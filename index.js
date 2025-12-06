import { configDotenv } from "dotenv";
import express from "express";
import routesLogin from "./src/routes/login.js";

configDotenv();
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use("/api/login", routesLogin);

app.listen(port, () => {
  console.log("server runing at", port);
});
