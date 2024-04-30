import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCustomers } from "../utils/utils";
import AddCustomerModal from "./AddModal";
import EditCustomerModal from "./EditModal";

function Customers() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(getCustomers);

        setCustomers(response.data.customers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchData();
  }, []);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      {isAddModalOpen && (
        <AddCustomerModal open={isAddModalOpen} onClose={closeAddModal} />
      )}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Fisrt Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                CNP
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Appointment
              </th>
              <th scope="col" className="px-6 py-3">
                Edit User
              </th>
              <th scope="col" className="px-6 py-3">
                Delete User
              </th>
              <th scope="col" className="px-6 py-3">
                See User Vehicles
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{customer.firstName}</td>
                <td className="px-6 py-4">{customer.lastName}</td>
                <td className="px-6 py-4">{customer.CNP}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">{customer.phoneNumber}</td>
                <td className="px-6 py-4">
                  {" "}
                  {isEditModalOpen && (
                    <EditCustomerModal
                      open={isEditModalOpen}
                      onClose={closeEditModal}
                      customer={customer}
                    />
                  )}
                  <select
                    id="hour"
                    name="hour"
                    className="border rounded px-3 py-2 mr-2"
                  >
                    {Array.from({ length: 10 }, (_, index) => (
                      <option key={index + 8} value={index + 8}>
                        {index + 8}
                      </option>
                    ))}
                  </select>
                  <select
                    id="minute"
                    name="minute"
                    className="border rounded px-3 py-2 mr-2"
                  >
                    {Array.from({ length: 60 / 30 }).map((_, index) => (
                      <option key={index} value={index * 30}>
                        {index * 30}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={openEditModal}
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete User
                  </button>
                </td>
                <td className="px-6 py-4">
                  <a>See Vehicles</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          onClick={openAddModal}
        >
          + Add Customer
        </button>
      </div>
    </>
  );
}

export default Customers;
