const express = require("express");
const router = express.Router();
const controller = require("../controllers/customerController.js");

router.post("/addCustomer", controller.addCustomer);

module.exports = router;
