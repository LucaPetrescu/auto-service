const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController.js");
const vehicleController = require("../controllers/vehicleController.js");

//Customer Controllers
router.post("/addCustomer", customerController.addCustomer);
router.get("/getCustomers", customerController.getCustomers);
router.get("/getCustomerByCNP", customerController.getCustomerByCNP);
router.patch("/updateCustomer", customerController.updateCustomer);
router.delete("/deleteCustomer", customerController.deleteCustomer);

//Vehicle Controllers
router.post("/addVehicleToCustomer", vehicleController.addVehicleToCustomer);
router.get("/getVehiclesForUser", vehicleController.getVehiclesForUser);

module.exports = router;
