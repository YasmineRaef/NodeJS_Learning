import express from "express";
const app = express();

const PORT = 3000;

app.get("/hello/users/", (req, res) => {
  res.json(users);
});

app.use(express.json());

app.post("/hello/users/", (req, res) => {
  const { name, hobby, local } = req.body;

  if (!name || !hobby || typeof local !== "boolean") {
    return res
      .status(400)
      .json({ error: "Name, hobby, and local fields are required!" });
  }
  const newUser = {
    id: users.length + 1,
    name,
    hobby,
    local,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(
    `Server is running at port http://localhost:${PORT}/hello/users/`
  );
});

const users = [
  { id: 1, name: "Yasmine", hobby: "Cool 😎🖤", local: false },
  { id: 2, name: "Alyaa", hobby: "Best daughter", local: true },
  { id: 3, name: "Maryam", hobby: "Being short", local: true },
  { id: 4, name: "Menna", hobby: "Worry others + Being short", local: true },
];
