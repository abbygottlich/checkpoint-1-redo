const Order = require("../Models/OrderModel");

// GET request
exports.list = function list(request, response) {
    Order.find().exec().then((orders) => {
        return response.json(orders);
    });
};

// POST request
exports.create = function create(request, response) {
    const newOrder = new Order(
        request.body
    );
    newOrder.save().then(savedOrder => {
        return response.json(savedOrder);
    });
};