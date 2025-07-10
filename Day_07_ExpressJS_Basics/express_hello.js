import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ message: "Hello, World! Yasmine talking 😎✌️." });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}/`);
});
