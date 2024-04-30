const Customer = require("../models/Customer");
const Vehicle = require("../models/Vehicle");

exports.addCustomer = async (req, res) => {
  try {
    const customerData = req.body;
    const newCustomer = new Customer({
      firstName: customerData.firstName,
      lastName: customerData.lastName,
      phoneNumber: customerData.phoneNumber,
      email: customerData.email,
      CNP: customerData.CNP,
    });
    await newCustomer.save();
    res.status(200).send(newCustomer);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).send({ customers });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

exports.getCustomerByCNP = async (req, res) => {
  try {
    const CNP = req.query.CNP;
    console.log(CNP);
    const customer = await Customer.findOne({ CNP: CNP });
    res.status(200).send(customer);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const CNP = req.query.CNP;
    const updatedCustomer = await Customer.findOneAndUpdate(
      { CNP: CNP },
      { lastName: "Mihai" }
    );
    res.status(200).send(updatedCustomer);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const CNP = req.query.CNP;
    const customerToDelete = await Customer.findOneAndDelete({ CNP: CNP });
    res.status(200).send("Customer deleted");
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};
