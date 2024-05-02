import React, { useEffect, useState } from "react";
import axios from "axios"
import { addCustomer } from "../../utils/utils";

function AddCustomerModal({ open, onClose, onAdd }) {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    CNP: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {firstName, lastName, email, CNP, phoneNumber} = formData
    const {data} = await axios.post(addCustomer, {
      firstName, lastName, email, CNP, phoneNumber
    })
    console.log(data)
    onAdd()
    onClose()
  }

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
              Add Customer
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="firstName"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="lastName"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="CNP"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter CNP"
                  value={formData.CNP}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="email"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="phoneNumber"
                  className="border rounded px-3 py-2 w-full mb-5"
                  placeholder="Enter phone number"
                  onChange={(e) => handleChange(e)}
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

export default AddCustomerModal;
