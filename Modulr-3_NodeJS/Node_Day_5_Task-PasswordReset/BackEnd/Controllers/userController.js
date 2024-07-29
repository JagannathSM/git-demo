const User = require("../Models/User");
const Task = require("../Models/Tasks");

// exports.getUserData = async (req, res) => {
//     const user = await User.find({ _id: req.user });
//     res.json({message:"USERDETAILS",user});
// }

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user});
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  if(!title || ! description){
    return res.status(400).json({message:"Need Values Title & Description"})
  }
  const task = new Task({ title, description, user: req.user });
  await task.save();
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== req.user.toString()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  task.title = title || task.title;
  task.description = description || task.description;
  const updatedTask = await task.save();
  res.json(updatedTask);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  if (task.user.toString() !== req.user.toString()) {
    return res.status(401).json({ message: "Unauthorized" });
    throw new Error("Unauthorized");
  }
  await task.deleteOne();
  res.json({ message: "Task deleted" });
};