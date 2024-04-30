const express = require("express");
const router = express.Router();
const controller = require("../controllers/customerController.js");

router.post("/addCustomer", controller.addCustomer);
router.get("/getCustomers", controller.getCustomers);
router.get("/getCustomerByCNP", controller.getCustomerByCNP);
router.patch("/updateCustomer", controller.updateCustomer);
router.delete("/deleteCustomer", controller.deleteCustomer);

module.exports = router;
