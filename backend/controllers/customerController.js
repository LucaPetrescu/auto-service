const Customer = require("../models/Customer");

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
    const CNP = req.body.CNP;
    const { firstName, lastName, email, phoneNumber } = req.body;
    const updatedCustomer = await Customer.findOneAndUpdate(
      { CNP: CNP },
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      }
    );
    res.status(200).send("Updated customer");
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
