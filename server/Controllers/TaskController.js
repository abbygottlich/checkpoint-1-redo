const Task = require("../Models/TaskModel");

// GET request
exports.list = function list(request, response) {
    Task.find().exec().then((tasks) => {
        return response.json(tasks);
    });
};

// POST request
exports.create = function create(request, response) {
    const newTask = new Task(
        request.body
    );
    newTask.save().then(savedTask => {
        response.json(savedTask);
    });
};