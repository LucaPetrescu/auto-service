import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCustomers } from "../utils/utils";
import AddCustomerModal from "./Customer/AddClientModal";
import EditCustomerModal from "./Customer/EditCustomerModal";
import DeleteDialog from "./Customer/DeleteDialog";

function Customers() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
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

  const fetchData = async () => {
    try {
      const response = await axios.get(getCustomers);
      setCustomers(response.data.customers);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

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

  const openDeleteDialog = () => {
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      {isAddModalOpen && (
        <AddCustomerModal
          open={isAddModalOpen}
          onClose={closeAddModal}
          onAdd={fetchData}
        />
      )}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
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
                {isEditModalOpen && (
                  <EditCustomerModal
                    open={isEditModalOpen}
                    onClose={closeEditModal}
                    customer={customer}
                    onEdit={fetchData}
                  />
                )}

                {isDeleteDialogOpen && (
                  <DeleteDialog
                    open={isDeleteDialogOpen}
                    customerCNP={customer.CNP}
                    onClose={closeDeleteDialog}
                    onDelete={fetchData}
                  />
                )}
                <td className="px-6 py-4">{customer.firstName}</td>
                <td className="px-6 py-4">{customer.lastName}</td>
                <td className="px-6 py-4">{customer.CNP}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">{customer.phoneNumber}</td>

                <td className="px-6 py-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={openEditModal}
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={openDeleteDialog}
                  >
                    Delete User
                  </button>
                </td>
                <td className="px-6 py-4">
                  <Link to={`/vehicles?id=${customer._id}`}>See vehicles</Link>
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
