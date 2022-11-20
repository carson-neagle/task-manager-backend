const Task = require("../models/tasks");

exports.getAllTasks = async(req, res) => {
    try {
        const task = await Task.find()

        res.json(task)
    } catch (error) {
        res.status(500).json({"message": String(error)})
    }
}

exports.getTaskById = async(req, res) => {
    try {
        const {_id} = req.params
        const task = await Task.findOne({_id})

        res.json(task)
        } catch (error) {
            res.status(500).json({"message": String(errror)})
        }
    }

exports.deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOneAndDelete({_id: id})

        res.json(task)
    } catch (error) {
        res.status(500).json({"message": String(error)})
    }
}

exports.createTask = async (req, res) => {
    try {
        const { name, type, priority, image} = req.body
        const createdTask = await new Task({
            name, 
            type, 
            priority, 
            image
        }).save()
        res.json({"message": 'Created task'})
    } catch (error) {
        res.status(400).json({"message": String(error)})
    }
}

exports.updateTask = async(req, res) => {
    try {
        const { taskId } = req.body
        const { id } = req.params
        const task = await task.findById(id)
        task.newTask = await Task.findByIdAndUpdate(id, task)

        res.send(updatedTask)
    } catch (error) {
        res.status(500).json({"message": "unable to add task"})
    }
}

