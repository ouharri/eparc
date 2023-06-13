import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './style/index.css';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomePage from './pages/Home';
import Contact from './pages/contact';
import About from './pages/About';
import VehicleForm from './pages/Vehicle/VehicleForm';
import VehicleList from './pages/Vehicle/VehicleList';
import InsuranceForm from './pages/Insurance/InsuranceForm';
import DriverForm from './pages/Driver/DriverForm';
import Admin from './pages/admin';
import DriverList from './pages/Driver/DriversList';
import DriverEdit from './pages/Driver/DriverUpdate';
import VehicleEdit from './pages/Vehicle/VehicleUpdate';
import InsuranceList from './pages/Insurance/InsuranceList';
import InsuranceEdit from './pages/Insurance/InsuranceUpdate';
import {Box, ChakraProvider, Grid, theme} from '@chakra-ui/react';
import { ColorModeSwitcher } from './init/ColorModeSwitcher'

function App() {

    return (
        <ChakraProvider theme={theme} className={"screen"}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" position={'relative'}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/about" element={<About/>}/>


                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>

                            <Route path="/dashboard" element={<Admin />} />

                            <Route path="dashboard/vehicle/Add" element={<VehicleForm/>}/>
                            <Route path="dashboard/vehicle/List" element={<VehicleList/>}/>
                            <Route path="dashboard/vehicle/edit/:ID_VEHICLE" element={<VehicleEdit />} />

                            <Route path="dashboard/insurance/Add" element={<InsuranceForm/>}/>
                            <Route path="dashboard/insurance/List" element={<InsuranceList />} />
                            <Route path="dashboard/insurance/edit/:ID_INSURANCE" element={<InsuranceEdit />} />

                            <Route path="dashboard/driver/Add" element={<DriverForm/>}/>
                            <Route path="dashboard/driver/List" element={<DriverList/>} />
                            <Route path="dashboard/driver/edit/:ID_DRIVER" element={<DriverEdit />} />

                        </Routes>
                    </BrowserRouter>
                    <Box position={'absolute'} right={5} bottom={5}>
                        <ColorModeSwitcher/>
                    </Box>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
