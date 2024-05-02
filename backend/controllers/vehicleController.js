const Customer = require("../models/Customer");
const Vehicle = require("../models/Vehicle");
exports.addVehicleToCustomer = async (req, res) => {
  try {
    const vehicle = req.body;

    const newVehicle = new Vehicle({
      licensePlate: vehicle.licensePlate,
      chasisSeries: vehicle.chasisSeries,
      make: vehicle.make,
      model: vehicle.model,
      fabricationYear: vehicle.fabricationYear,
      engineType: vehicle.engineType,
      engineCapacity: vehicle.engineCapacity,
      horsePower: vehicle.horsePower,
      kWPower: vehicle.kWPower,
      owner: vehicle.owner,
      description: vehicle.description,
    });
    await newVehicle.save();
    const newVehicleId = newVehicle._id;
    console.log(newVehicleId);
    const customer = await Customer.findOneAndUpdate(
      { _id: vehicle.owner },
      { $push: { vehiclesOwned: newVehicleId } }
    );
    console.log(customer);
    res.status(200).send("Vehicle added to customer");
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

exports.getVehiclesForUser = async (req, res) => {
  try {
    const customerId = req.query.customer;
    console.log(customerId);
    let vehicles = await Vehicle.find({ owner: customerId });
    console.log(vehicles);
    res.status(200).send(vehicles);
  } catch (e) {
    res.status(500).send(e.message);
    console.log(e.message);
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const { vehicleId, customerId } = req.query;
    await Vehicle.findByIdAndDelete(vehicleId);
    await Customer.findOneAndUpdate(
      { _id: customerId },
      { $pull: { vehiclesOwned: vehicleId } }
    );
    res.status(200).send("Vehicle deleted");
  } catch (e) {
    res.status(500).send(e.message);
    console.log(e.message);
  }
};
