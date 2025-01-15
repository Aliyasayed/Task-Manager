const express = require("express");
const app = express();
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");

require("./config/db");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const taskModel = require("./models/taskModel");

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.render("index", { tasks });
  } catch (error) {
    console.log("Error fetching tasks:", error);
    res.send("error creating task");
  }
});

app.use("/task", taskRoutes);

app.listen(process.env.PORT, () => {
  console.log("Sever is running on port", process.env.PORT);
});
