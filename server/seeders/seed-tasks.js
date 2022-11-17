const Task = require("../models/tasks");
exports.insertTaskData = async (req, res) => {
    try {
        await Task.insertMany([
            {
                name: "Dishes",
                type: "chore",
                priority: "medium",
                image:"http://clipart-library.com/img/1563149.jpg"
            },
            
            {
                name: "Homework",
                type: "school",
                priority: "high",
                image:"http://clipart-library.com/img/1153597.gif"
            },
            {
                name: "Doctor Appointments",
                type: "personal",
                priority: "high",
                image:"http://clipart-library.com/images_k/doctor-clipart-transparent/doctor-clipart-transparent-12.png"
            },
            
            {
                name: "Yard Care",
                type: "chore",
                priority: "medium",
                image:"https://img.freepik.com/premium-vector/flat-lawn-mower-service-worker-character-garden-man-with-lawnmower-cutting-green-grass-back-yard-maintenance-care-vector-concept_102902-5536.jpg?w=1380"
            },
            {
                name: "vacuum",
                type: "chore",
                priority: "low",
                image:"http://clipart-library.com/data_images/286425.png"
            },
            {
                name: "Eating",
                type: "personal",
                priority: "high",
                image: "http://clipart-library.com/img/707204.jpg"
            },
            {
                name: "Pay Bills",
                type: "personal",
                priority: "high",
                image: "http://clipart-library.com/img/563408.png",
            },
            {
                name: "Car Care",
                type: "chore",
                priority: "medium",
                image: "http://clipart-library.com/newhp/car-motor-vehicle-service-auto-mechanic-automobile-repair-shop-maintenance-car.jpg"
            },
            {
                name: "Laundry",
                type: "chore",
                priority: "medium",
                image: "http://clipart-library.com/newhp/laundry-clipart-2.jpg"
            },
            {
            name: "class",
                type: "school",
                priority: "high",
                image: "http://clipart-library.com/img1/1066436.jpg"
            }
        ]);
        res.send("complete");
    } catch (error) {
        console.log("err", error);
        res.send("error");
    }
}
