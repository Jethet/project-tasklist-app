const express = require("express");
const port = 3000
const db = require("../database/db.json");

const app = express();


app.get("/", (req, res) => {
  console.log("This is a to-do app that uses node.js fs");
})

app.post("/add", (req, res) => {
  const todo = req.body.todo
  const description = req.body.description
  res.send(todo, description)
})

// Example code from auth project
// create new todo
let newTodo = {
  id: db.length,
  todo: todo,
  description: description
};
// add new todo to database array
db.push(newTodo);
//  save the updated database array to the db.json file using fs MUST BE STRING FORMAT
fs.writeFileSync("./database/db.json", JSON.stringify(newTodo));

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
