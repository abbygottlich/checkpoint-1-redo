const express = require("express");
const router = express.Router();
const csvFilePath = '/Users/abby.bellow/documents/ACAAdvanceClassProjects/checkpoint-backend-1/server/data.csv';
const csv = require('csvtojson');

router.get("/newComments", (req, res) => {
    csv()
        .fromFile(csvFilePath)
        .then(comment => {
            res.send(comment[0].new_comments)
        })
});

router.get("/newTasks", (req, res) => {
    csv()
        .fromFile(csvFilePath)
        .then(tasks => {
            res.send(tasks[0].new_tasks)
        })
});

router.get("/newOrders", (req, res) => {
    csv()
        .fromFile(csvFilePath)
        .then(orders => {
            res.send(orders[0].new_orders)
        })
});

router.get("/tickets", (req, res) => {
    csv()
        .fromFile(csvFilePath)
        .then(tickets => {
            res.send(tickets[0].tickets)
        })
});

router.get("/newDate", (req, res) => {
    res.send(new Date)
});


module.exports = router;