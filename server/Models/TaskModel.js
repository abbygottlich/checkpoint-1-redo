const mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
    id: Number,
    task: String,
    date: String
});

let Task = mongoose.model("Task", taskSchema);

module.exports = Task;