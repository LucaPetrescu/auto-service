import axios from "axios";
import React, { useEffect, useState } from "react";
import AddVehicleModal from "./Vehicle/AddVehicleModal";
import { Link, useLocation } from "react-router-dom";
import { getVehiclesForUser } from "../utils/utils";
import DeleteDialog from "./Vehicle/DeleteDialog";

function Vehicles() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customer = searchParams.get("id");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(getVehiclesForUser, {
          params: { customer: customer },
        });

        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(getVehiclesForUser, {
        params: { customer: customer },
      });

      setVehicles(response.data.customerVehicles);
      console.log(vehicles);
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

  const openDeleteDialog = () => {
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      {isAddModalOpen && (
        <AddVehicleModal
          open={isAddModalOpen}
          onClose={closeAddModal}
          customer={customer}
          onAdd={fetchData}
        />
      )}
      <div className="relative overflow-x-auto">
        <Link to="/">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 mb-4">
            Back to dashboard
          </button>
        </Link>

        <h1 className="text-4xl font-extrabold dark:text-white">
          Customer's cars
        </h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                License plate
              </th>
              <th scope="col" className="px-6 py-3">
                Chasis series
              </th>
              <th scope="col" className="px-6 py-3">
                Make
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Fabrication year
              </th>
              <th scope="col" className="px-6 py-3">
                Engine type
              </th>
              <th scope="col" className="px-6 py-3">
                Engine capacity
              </th>
              <th scope="col" className="px-6 py-3">
                Horse power
              </th>
              <th scope="col" className="px-6 py-3">
                Kw power
              </th>
              <th scope="col" className="px-6 py-3">
                See appointments
              </th>
              <th scope="col" className="px-6 py-3">
                Delete vehicle
              </th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {isDeleteDialogOpen && (
                  <DeleteDialog
                    open={isDeleteDialogOpen}
                    customerId={customer}
                    vehicleId={vehicle._id}
                    onClose={closeDeleteDialog}
                    onDelete={fetchData}
                  />
                )}
                <td className="px-6 py-4">{vehicle.licensePlate}</td>
                <td className="px-6 py-4">{vehicle.chasisSeries}</td>
                <td className="px-6 py-4">{vehicle.make}</td>
                <td className="px-6 py-4">{vehicle.model}</td>
                <td className="px-6 py-4">{vehicle.fabricationYear}</td>
                <td className="px-6 py-4">{vehicle.engineType}</td>
                <td className="px-6 py-4">{vehicle.engineCapacity}</td>
                <td className="px-6 py-4">{vehicle.horsePower}</td>
                <td className="px-6 py-4">{vehicle.kWPower}</td>

                <td className="px-6 py-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link
                      to={`/appointments?make=${vehicle.make}&model=${vehicle.model}`}
                    >
                      See appointments
                    </Link>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={openDeleteDialog}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          onClick={openAddModal}
        >
          + Add Vehicle
        </button>
      </div>
    </>
  );
}

export default Vehicles;
