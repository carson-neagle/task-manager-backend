const mongoose = require('mongoose')
const  { Schema } = mongoose;

const taskSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },

    type: {
        type: String, 
        enum: ["personal", "work", "school", "chore"], 
        required: true
    },

    priority: {
        enum: ["high", "medium", "low"]
    },

    image: {
        type: String
    }
})

module.exports = mongoose.model("Tasks", taskSchema)