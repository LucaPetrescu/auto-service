const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    licensePlate: {
      type: String,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    chasisSeries: {
      type: String,
      required: true,
    },
    fabricationYear: {
      type: Number,
      required: true,
    },
    engineType: {
      type: String,
      required: true,
      enum: ["Diesel", "Gasoline", "Hybrid", "Electric"],
    },
    engineCapacity: {
      type: Number,
      required: true,
    },
    horsePower: {
      type: Number,
      required: true,
    },
    kWPower: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "Vehicles",
  }
);

module.exports = mongoose.model("Vehicles", vehicleSchema);
