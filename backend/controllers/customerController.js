const Customer = require("../models/Customer");
const Vehicle = require("../models/Vehicle");

exports.addCustomer = async (req, res) => {
  try {
    const customer = req.body;
    console.log(customer);
    res.send(customer);
  } catch (e) {
    console.log(e);
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).send({ customers });
  } catch (e) {
    console.log(e);
    res.status(200).send(e.message);
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id);
  } catch (e) {}
};
