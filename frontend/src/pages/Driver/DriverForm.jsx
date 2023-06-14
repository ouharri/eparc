import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Box, Button, FormControl, FormLabel, Heading, Input, Stack,} from '@chakra-ui/react';
import Dash from '../../components/admin/dash';


export default function DriverForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [Firstname, setFirstName] = useState('')
    const [num, setNum] = useState('')
    const [date, setDate] = useState('')
    const createDriver = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('DRIVER_NAME', name);
        formData.append('DRIVER_FIRST_NAME', Firstname);
        formData.append('DRIVER_LICENSE_NUMBER', num);
        formData.append('DRIVER_LICENSE_EXPIRATION_DATE', date);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/driver', formData);
            console.log(response.data.message);
            navigate('/dashboard/driver');
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
                p={6}
                m="6"
                mt="24"
                textAlign={'center'}
            >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add a new driver</Heading>
                </Stack>
                <form onSubmit={createDriver}>
                    <Stack spacing={4} mt={10}>
                        <FormControl>
                            <FormLabel>Driver Name</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter the driver name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Driver First Name</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter the driver first name"
                                value={Firstname}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Driver License Number</FormLabel>
                            <Input
                                type="number"
                                placeholder="Enter the driver license number"
                                value={num}
                                onChange={(e) => {
                                    setNum(e.target.value)
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Driver License Expiration Date</FormLabel>
                            <Input
                                type="date"
                                placeholder="Enter the expiration date of the driver's license"
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                            />
                        </FormControl>
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
     
   