import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link as ReachLink, Link} from 'react-router-dom';
import {FaEdit, FaTrash} from 'react-icons/fa';
import Dash from '../../components/admin/dash'
import {Button} from "@chakra-ui/react";
import swal from "sweetalert2";


export default function InsuranceList() {
    const [insurances, setInsurances] = useState([]);

    useEffect(() => {
        fetchInsurances();
    }, []);

    const fetchInsurances = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/insurance');
            console.log('Response:', response.data);
            setInsurances(response.data.data);
        } catch (error) {
            console.log('Error fetching insurances:', error);
        }
    };

    const deleteInsurance = async (ID_INSURANCE) => {
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete('http://127.0.0.1:8000/api/insurance/' + ID_INSURANCE);
                    console.log('Insurance deleted successfully');
                    fetchInsurances();
                } catch (error) {
                    console.log('Error deleting insurance:', error);
                }
            }
        });
    };
    
    return (
        <Dash>
            <div className="mt-24 flex justify-between items-center">
                <div className="flex-row ml-6">
                    <h1 className="text-xl font-semibold text-gray-900">insurance</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all the insurance</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16">
                    <Button
                        rounded={'md'}
                        size={'lg'}
                        as={ReachLink}
                        to={'/dashboard/insurance/Add'}
                        fontWeight={'normal'}
                        px={4}
                        colorScheme={'red'}
                        bg={'red.400'}
                        _hover={{bg: 'red.500'}}>
                        Add insurance
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
                                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                                    >
                                        Vehicle ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Insurance Company
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Insurance Number
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Start Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Expiration Date
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
                                {insurances.length > 0 &&
                                    insurances.map((row, key) => (
                                        <tr key={key} className="hover:bg-gray-100">
                                            <td className="py-4">{row.ID_VEHICLE}</td>
                                            <td className="py-4">{row.INSURANCE_COMPANY}</td>
                                            <td className="py-4">{row.INSURANCE_NUMBER}</td>
                                            <td className="py-4">{row.START_DATE}</td>
                                            <td className="py-4">{row.EXPIRATION_DATE}</td>
                                            <td className="flex items-center justify-center space-x-2 py-4">
                                                <Link
                                                    className="btn btn-success mb-2 mr-2"
                                                    to={`/dashboard/insurance/edit/${row.ID_INSURANCE}`}
                                                >
                                                    <FaEdit className="text-lg text-green-500"/>
                                                </Link>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger mb-2"
                                                    onClick={() => deleteInsurance(row.ID_INSURANCE)}
                                                >
                                                    <FaTrash className="text-lg text-red-500"/>
                                                </button>
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
