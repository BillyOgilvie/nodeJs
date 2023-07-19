import express from "express";

const users = [
  { name: "John", id: 1 },
  { name: "Jane", id: 2 },
];

const app = express();

app.use(express.json())

app.listen(3000, () => {
  console.log("Express server is listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/users", (req, res) => {
  // get data from db
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  // get data from db
  const userId = req.params.id;
  const user = users.find((user) => user.id === Number(userId));
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send(users);
})