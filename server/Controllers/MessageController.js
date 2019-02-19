const Message = require("../Models/MessageModel");

// GET request
exports.list = function list(request, response) {
    Message.find().exec().then((messages) => {
        return response.json(messages);
    });
};

// POST request
exports.create = function create(request, response) {
    const newMessage = new Message(
        request.body
    );
    newMessage.save().then(savedMessage => {
        response.json(savedMessage);
    });
};