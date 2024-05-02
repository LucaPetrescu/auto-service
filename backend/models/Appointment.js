const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    hour: { type: Number },
    minute: { type: Number },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    onRecieving: { type: String },
    onFinishing: { type: String },
    make: { type: String, required: true },
    model: { type: String, required: true },
  },
  {
    collection: "Appointments",
  }
);

module.exports = mongoose.model("Appointments", appointmentSchema);
