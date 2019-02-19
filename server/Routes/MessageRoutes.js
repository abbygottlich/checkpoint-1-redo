const express = require("express");
const router = express.Router();
const { list, create } = require("../Controllers/MessageController");


router.get("/messages", list);
router.post("/messages", create);

module.exports = router;