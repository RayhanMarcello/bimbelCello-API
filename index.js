import express from "express";
const app = express();
app.use(express.json());

const port = 4000;

app.use("/", (req, res) => {
  res.json("p");
});

app.listen(port, () => {
  console.log("running");
});
