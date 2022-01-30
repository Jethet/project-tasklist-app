const express = require("express");
const port = 3000


const app = express();

// NodeJS project: build a simple webpage with a form to fill in with a task,
//  and retrieve a task and show it in the console
//  Next level: write the task in a separate file
//  Next level: create a database for the tasks

app.get("/", (req, res) => {
  console.log("This is a task list app");
})

app.post("/add", (req, res) => {
  const task = req.body.task
  const description = req.body.description
  res.send(task, description)
})

// Example code from auth project
// create new todo
let newTask = {
  id: db.length,
  task: task,
  description: description
};

// add new todo to database array

//  save the updated database array to the db.json file using fs MUST BE STRING FORMAT


app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
