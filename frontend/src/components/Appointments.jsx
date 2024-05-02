import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DeleteDialog from "./Vehicle/DeleteDialog";
import MakeAppointmentModal from "./Appointment/MakeAppointmentModal";

function Appointments() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const make = searchParams.get("make");
  const model = searchParams.get("model");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      {isAddModalOpen && (
        <MakeAppointmentModal open={isAddModalOpen} onClose={closeAddModal} />
      )}
      <div className="relative overflow-x-auto">
        <Link to="/">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 mb-4">
            Back to dashboard
          </button>
        </Link>

        <h1 className="text-4xl font-extrabold dark:text-white">
          Car appointments
        </h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Make
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Appointment
              </th>
              <th scope="col" className="px-6 py-3">
                Problem
              </th>
              <th scope="col" className="px-6 py-3">
                On recieving
              </th>
              <th scope="col" className="px-6 py-3">
                On finishing
              </th>
              <th scope="col" className="px-6 py-3">
                Repair took
              </th>
              <th scope="col" className="px-6 py-3">
                Delete appointment
              </th>
              <th scope="col" className="px-6 py-3">
                Confirm appointment
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={openAddModal}
                >
                  Make appointment
                </button>
              </td>
              <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete appointment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Appointments;
