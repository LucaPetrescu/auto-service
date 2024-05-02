const Appointment = require("../models/Appointment");

exports.addAppointment = async (req, res) => {
  try {
    const { hour, minute, customer, vehicle, make, model } = req.body;
    const newAppointment = new Appointment({
      hour: hour,
      minute: minute,
      customer: customer,
      vehicle: vehicle,
      make: make,
      model: model,
    });
    await newAppointment.save();
    res.status(200).send("Appointment made successfully");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getAppointment = async (req, res) => {
  try {
  } catch (e) {}
};
