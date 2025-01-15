const express = require("express");
const {
  allTask,
  createTask,
  readTask,
  updateTask,
  deleteTask,
  renderUpdatePage,
} = require("../controllers/taskControllers");
const router = express.Router();

router.get("/allTask", allTask);
router.post("/create", createTask);
router.get("/update/:id", renderUpdatePage);
router.post("/update/:id", updateTask);
router.get("/read/:id", readTask);
router.post("/delete/:id", deleteTask);

module.exports = router;
