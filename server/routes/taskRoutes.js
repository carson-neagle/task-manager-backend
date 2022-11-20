const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const seed = require('../seeders/seed-tasks')

router.get('/', taskController.getAllTasks);
router.get('/id/:_id', taskController.getTaskById);
router.delete('/:id', taskController.deleteTaskById);
router.post('/create', taskController.createTask);
router.put('/add/task/:id', taskController.updateTask);
router.post('/seed', seed.insertTaskData)

module.exports = router;