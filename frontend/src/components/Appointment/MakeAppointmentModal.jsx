import React, { useEffect, useState } from "react";
import axios from "axios";
import { addCustomer } from "../../utils/utils";

function MakeAppointmentModal({ open, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    appointmentHour: "",
    minute: "",
    hour: "",
    repairTook: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { onRecieving, onFinishing, appointmentHour, repairTook } = formData;
    const [hoursString, minutesString] = appointmentHour.split(":");
    const hour = parseInt(hoursString, 10);
    const minute = parseInt(minutesString, 10);

    const numberRepairTook = parseInt(repairTook);
    const { data } = await axios.post(addCustomer, {
      onRecieving,
      onFinishing,
      minute,
      hour,
      numberRepairTook,
    });
    console.log(data);
    // onAdd();
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
              Make appointment
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="onRecieving"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter problems noted by the mechanic"
                  value={formData.onRecieving}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="onFinishing"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter problems that have been solved"
                  value={formData.onFinishing}
                  onChange={handleChange}
                />
                <select
                  name="appointmentHour"
                  className="border rounded px-3 py-2 w-full mb-5"
                  value={formData.appointmentHour}
                  onChange={handleChange}
                >
                  <option value="">Select hour</option>
                  {Array.from({ length: 10 }, (_, index) => {
                    const hour = index + 8;
                    return (
                      <optgroup key={hour} label={`${hour}:00`}>
                        <option value={`${hour}:00`}>{`${hour}:00`}</option>
                        <option value={`${hour}:30`}>{`${hour}:30`}</option>
                      </optgroup>
                    );
                  })}
                </select>
                <select
                  name="repairTook"
                  className="border rounded px-3 py-2 w-full mb-5"
                  value={formData.repairTook}
                  onChange={handleChange}
                >
                  <option value="">Select minutes</option>
                  {Array.from({ length: 60 / 10 }).map((_, index) => (
                    <option key={index * 10} value={index * 10}>
                      {index * 10}
                    </option>
                  ))}
                </select>
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

export default MakeAppointmentModal;
