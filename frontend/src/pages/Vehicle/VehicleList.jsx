import React, {useEffect, useState} from 'react';
import Dash from '../../components/admin/dash'
import axios from 'axios';
import {Link as ReachLink, Link} from 'react-router-dom';
import {FaEdit, FaTrash} from 'react-icons/fa';
import {Button} from "@chakra-ui/react";

export default function VehicleList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/vehicle');
            console.log('Response:', response.data);
            setVehicles(response.data.data);
        } catch (error) {
            console.log('Error fetching vehicles:', error);
        }
    };

    const deleteVehicle = async (ID_VEHICLE) => {
        try {
            await axios.delete('http://127.0.0.1:8000/api/vehicle/' + ID_VEHICLE);
            console.log('Vehicle deleted successfully');
            fetchVehicles();
        } catch (error) {
            console.log('Error deleting vehicle:', error);
        }
    };

    return (
        <Dash>
            <div className="mt-24 flex justify-between items-center">
                <div className="flex-row ml-6">
                    <h1 className="text-xl font-semibold text-gray-900">Vehicles</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all the vehicles</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16">
                    <Button
                        rounded={'md'}
                        size={'lg'}
                        as={ReachLink}
                        to={'/dashboard/Vehicle/Add'}
                        fontWeight={'normal'}
                        px={4}
                        colorScheme={'red'}
                        bg={'red.400'}
                        _hover={{bg: 'red.500'}}>
                        Add vehicle
                    </Button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Vehicle Model
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Vehicle Brand
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Manufacturing Year
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Vehicle Registration
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Chassis Number
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Vehicle Mileage
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Vehicle Color
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Vehicle Image
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-900">
                                {vehicles.length > 0 &&
                                    vehicles.map((vehicle) => (
                                        <tr key={vehicle.ID_VEHICLE} className="hover:bg-gray-100">
                                            <td className="py-4">{vehicle.VEHICLE_MODEL}</td>
                                            <td className="py-4">{vehicle.VEHICLE_BRAND}</td>
                                            <td className="py-4">{vehicle.VEHICLE_MANUFACTURING_YEAR}</td>
                                            <td className="py-4">{vehicle.VEHICLE_REGISTRATION}</td>
                                            <td className="py-4">{vehicle.CHASSIS_NUMBER}</td>
                                            <td className="py-4">{vehicle.VEHICLE_MILEAGE}</td>
                                            <td className="py-4">
                                                <input type="color" value={vehicle.color} disabled/>
                                            </td>
                                            <td className="py-4">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <img
                                                        className="h-32 w-32 object-contain"
                                                        src={`http://127.0.0.1:8000/storage/vehicle/image/${vehicle.image}`}
                                                        alt="Vehicle"
                                                    />
                                                </div>
                                            </td>

                                            <td className="py-4">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <Link
                                                        className="btn btn-success mr-2"
                                                        to={`/dashboard/vehicle/edit/${vehicle.ID_VEHICLE}`}
                                                    >
                                                        <FaEdit className="text-lg text-green-500"/>
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => deleteVehicle(vehicle.ID_VEHICLE)}
                                                    >
                                                        <FaTrash className="text-lg text-red-500"/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Dash>
    );
}
