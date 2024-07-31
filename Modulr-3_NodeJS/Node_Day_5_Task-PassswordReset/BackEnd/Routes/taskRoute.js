const express = require("express");
const auth = require('../Middleware/auth');
const { getTasks, createTask, updateTask, deleteTask} = require("../Controllers/taskController");

const router = express.Router();

// // Route to get active user data
// router.get("/", auth, getUserData);

// Route to get all tasks
router.get("/tasks", auth, getTasks);

// Route to create a new task
router.post("/add-task", auth, createTask);

// Route to update an existing task
router.put("/update-task/:id", auth, updateTask);

// Route to delete an existing task
router.delete("/delete-task/:id", auth, deleteTask);


module.exports = router;