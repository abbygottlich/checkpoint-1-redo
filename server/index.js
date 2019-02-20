let express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://agottlich:abby123@ds335275.mlab.com:35275/checkpoint-one", { useNewUrlParser: true });
const bodyParser = require("body-parser");
const app = express();
const fetch = require('node-fetch');
const csvtojsonV2 = require("csvtojson");

const messageRoutes = require("./Routes/MessageRoutes");
const taskRoutes = require("./Routes/TaskRoutes");
const orderRoutes = require("./Routes/OrderRoutes");
const dataRoutes = require("./Routes/DataRoutes")

app.use(bodyParser.json());
app.use(messageRoutes);
app.use(taskRoutes);
app.use(orderRoutes);
app.use(dataRoutes);

app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});

// fetch
app.get('/foxes', function (req, res) {
    fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(body => res.json(body));
});

