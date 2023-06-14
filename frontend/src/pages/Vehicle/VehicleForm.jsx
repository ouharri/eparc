import React, {useState} from 'react';
import Dash from '../../components/admin/dash'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack} from '@chakra-ui/react';
import {ChromePicker} from 'react-color';

export default function VehicleForm() {
    const navigate = useNavigate();
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [regis, setRegis] = useState('');
    const [num, setNum] = useState('');
    const [mil, setMil] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');

    const changeHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const createVehicle = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('VEHICLE_MODEL', model);
        formData.append('VEHICLE_BRAND', brand);
        formData.append('VEHICLE_MANUFACTURING_YEAR', year);
        formData.append('VEHICLE_REGISTRATION', regis);
        formData.append('CHASSIS_NUMBER', num);
        formData.append('VEHICLE_MILEAGE', mil);
        formData.append('color', color);
        formData.append('image', image);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/vehicle', formData);
            console.log(response.data.message);
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.message);
            }
        }
    };

    return (
        <Dash>
            <Box
                bg={'white'}
                boxShadow={'lg'}
                rounded={'lg'}
                mt="28"
                p={6}
                m="6"
                textAlign={'center'}
            >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add a new vehicle</Heading>
                </Stack>
                <form onSubmit={createVehicle}>
                    <Stack spacing={4} mt={10}>
                        <FormControl>
                            <FormLabel>Vehicle Model</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter the vehicle model"
                                value={model}
                                onChange={(e) => {
                                    setModel(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Brand</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter vehicle brand"
                                value={brand}
                                onChange={(e) => {
                                    setBrand(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Manufacturing Year</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter vehicle manufacturing year"
                                value={year}
                                onChange={(e) => {
                                    setYear(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Registration</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter vehicle registration"
                                value={regis}
                                onChange={(e) => {
                                    setRegis(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Chassis Number</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter chassis number"
                                value={num}
                                onChange={(e) => {
                                    setNum(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Mileage</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter vehicle mileage"
                                value={mil}
                                onChange={(e) => {
                                    setMil(e.target.value);
                                }}
                            />
                        </FormControl>
                        <Flex justifyContent="space-between">
                            <FormControl>
                                <FormLabel>Vehicle Image</FormLabel>
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file"
                                           className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF
                                                (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden"
                                               onChange={changeHandler}/>
                                    </label>
                                </div>
                            </FormControl>
                            <FormControl className="ml-6">
                                <FormLabel>Vehicle Color</FormLabel>
                                <ChromePicker
                                    color={color}
                                    onChange={(value) => {
                                        setColor(value.hex);
                                    }}
                                />
                            </FormControl>
                        </Flex>
                        <Stack
                            spacing={10}
                            direction={{base: 'column', sm: 'row'}}
                            align={'center'}
                            justify={'center'}
                            mt={6}
                        >
                            <Button
                                type="submit"
                                w={{base: 'full', sm: 'auto'}}
                                bg={'red.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'red.500',
                                }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </Dash>
    );
}
