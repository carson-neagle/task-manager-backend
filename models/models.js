const mongoose = require('mongoose')
const  { Schema } = mongoose;

const taskSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },

    type: {
        type: String, 
        enum: ["Personal", "Work", "School"], 
        required: true
    },

    priority: {
        enum: ["High", "Medium", "Low"]
    },

    Image: {
        type: String
    }
})