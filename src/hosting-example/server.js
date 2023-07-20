import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Heroku!");
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})