const express = require("express");
const port = 3000
const app = express();


app.get("/", (req, res) => {
  console.log("This is a to-do app that uses node.js fs");
})

app.post("/add", (req, res) => {
  const todo = req.body.todo
  const description = req.body.description
  res.send(todo, description)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
