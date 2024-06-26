import React, { useEffect, useState } from "react";
import axios from "axios";
import { addVehicleToCustomer } from "../../utils/utils";

function AddVehicleModal({ open, onClose, onAdd, customer }) {
  const [formData, setFormData] = useState({
    licensePlate: "",
    chasisSeries: "",
    make: "",
    model: "",
    fabricationYear: "",
    engineType: "",
    engineCapacity: "",
    horsePower: "",
    kWPower: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      licensePlate,
      chasisSeries,
      make,
      model,
      fabricationYear,
      engineType,
      engineCapacity,
      horsePower,
      kWPower,
    } = formData;
    const { data } = await axios.post(addVehicleToCustomer, {
      licensePlate,
      chasisSeries,
      make,
      model,
      fabricationYear,
      engineType,
      engineCapacity,
      horsePower,
      kWPower,
      owner: customer,
    });

    onAdd();
    onClose();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              Add vehicle
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="licensePlate"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter license plate"
                  onChange={(e) => handleChange(e)}
                  value={formData.licensePlate}
                />
                <input
                  type="text"
                  name="chasisSeries"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter chasis series"
                  onChange={(e) => handleChange(e)}
                  value={formData.chasisSeries}
                />
                <input
                  type="text"
                  name="make"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter make"
                  onChange={(e) => handleChange(e)}
                  value={formData.make}
                />
                <input
                  type="text"
                  name="model"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter model"
                  onChange={(e) => handleChange(e)}
                  value={formData.model}
                />
                <input
                  type="text"
                  name="fabricationYear"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter fabrication year"
                  onChange={(e) => handleChange(e)}
                  value={formData.fabricationYear}
                />
                <select
                  name="engineType"
                  className="border rounded px-3 py-2 w-full mb-5"
                  defaultValue=""
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" disabled hidden>
                    Select engine type
                  </option>
                  <option value="Diesel">Diesel</option>
                  <option value="Gasoline">Gasoline</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </select>

                <input
                  type="text"
                  name="engineCapacity"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter engine capacity"
                  onChange={(e) => handleChange(e)}
                  value={formData.engineCapacity}
                />
                <input
                  type="text"
                  name="horsePower"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter engine horsepower"
                  onChange={(e) => handleChange(e)}
                  value={formData.horsePower}
                />
                <input
                  type="text"
                  name="kWPower"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter engine power in kW"
                  onChange={(e) => handleChange(e)}
                  value={formData.kWPower}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
                <button
                  onClick={onClose}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVehicleModal;
