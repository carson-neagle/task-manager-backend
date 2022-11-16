const Task = require("../models/tasks");
exports.insertTaskData = async (req, res) => {
    try {
        await Task.insertMany([
            {
                name: "Dishes",
                type: "chore",
                priority: "medium",
                image:""
            },
            
            {
                name: "Homework",
                type: "school",
                priority: "high",
                image:""
            },
            {
                name: "Doctor Appointments",
                type: "personal",
                priority: "high",
                image:""
            },
            
            {
                name: "Yard Care",
                type: "chore",
                priority: "medium",
                image:""
            },
            {
                name: "vacuum",
                type: "chore",
                priority: "low",
                image:""
            },
            {
                name: "Eating",
                type: "personal",
                priority: "high",
                image: ""
            },
            {
                name: "Pay Bills",
                type: "personal",
                priority: "high",
                image: "",
            },
            {
                name: "Car Care",
                type: "chore",
                priority: "medium",
                image: ""
            },
            {
                name: "Laundry",
                type: "chore",
                priority: "medium",
                image: ""
            },
            {
            name: "class",
                type: "school",
                priority: "high",
                image: ""
            }
        ]);
        res.send("complete");
    } catch (error) {
        console.log("err", error);
        res.send("error");
    }
}
