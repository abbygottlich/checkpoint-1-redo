const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    id: Number,
    orderDate: String,
    orderTime: String,
    amount: String
});

let Order = mongoose.model("Order", orderSchema);

module.exports = Order;