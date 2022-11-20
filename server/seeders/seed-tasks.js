const Task = require("../models/tasks");
exports.insertTaskData = async (req, res) => {
    try {
        await Task.insertMany([
            {
                name: "Dishes",
                type: "chore",
                priority: "medium",
            },
            
            {
                name: "Homework",
                type: "school",
                priority: "high",
            },
            {
                name: "Doctor Appointments",
                type: "personal",
                priority: "high",
            },
            
            {
                name: "Yard Care",
                type: "chore",
                priority: "medium",
            },
            {
                name: "vacuum",
                type: "chore",
                priority: "low",
            },
            {
                name: "Eating",
                type: "personal",
                priority: "high",
            },
            {
                name: "Pay Bills",
                type: "personal",
                priority: "high",
            },
            {
                name: "Car Care",
                type: "chore",
                priority: "medium",
            },
            {
                name: "Laundry",
                type: "chore",
                priority: "medium",
            },
            {
            name: "class",
                type: "school",
                priority: "high",
            }
        ]);
        res.send("complete");
    } catch (error) {
        console.log("err", error);
        res.send("error");
    }
}
