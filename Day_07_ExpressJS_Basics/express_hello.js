import express from "express";

const app = express();

const PORT = 3000;

app.get("/hello", (req, res) => {
  res.send({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`Server is running at port https://localhost:${PORT}/`);
});
