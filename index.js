import { configDotenv } from "dotenv";
import express from "express";
import routesLogin from "./src/routes/login.js";
import routesRegister from "./src/routes/register.js";
import routesUsers from "./src/routes/users.js";
import routesMateri from "./src/routes/materi.js";
import routesVideo from "./src/routes/video.js";

configDotenv();
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use("/api/login", routesLogin);
app.use("/api/register", routesRegister);
app.use("/api/users", routesUsers);
app.use("/api/materi", routesMateri);
app.use("/api/video", routesVideo);

app.listen(port, () => {
  console.log("server runing at", port);
});
