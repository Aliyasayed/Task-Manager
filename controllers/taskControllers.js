const taskModel = require("../models/taskModel");

const allTask = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.render("index", { tasks });
  } catch (error) {
    console.log("Error fetching tasks:", error);
    res.send("error creating task");
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await taskModel.create({ title, description });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.json({ message: "Error creating task", error: error });
  }
};

const readTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findOne({ _id: id });
    res.send(task);
  } catch (error) {
    res.send("Error fetching task");
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const task = await taskModel.findOneAndUpdate(
      { _id: id },
      { title: title, description: description },
      { new: true }
    );
    res.redirect("/");
  } catch (error) {
    res.send("Error updating task");
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await taskModel.findOneAndDelete({ _id: id });
    res.redirect("/");
  } catch (error) {
    res.send("Error deleting task");
  }
};

const renderUpdatePage = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findById(id);
    res.render("update", { task });
  } catch (error) {
    res.send("Error loading update page");
  }
};

module.exports = {
  allTask,
  createTask,
  readTask,
  updateTask,
  deleteTask,
  renderUpdatePage,
};
