const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    hour: {},
    minute: {},
    customer: {},
  },
  {
    collection: "Appointments",
  }
);

module.exports = mongoose.model("Appointments", appointmentSchema);
