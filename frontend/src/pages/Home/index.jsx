import Company from './company'
import People from './people'
import {useEffect, useState} from "react";
import Nav from '../../components/core/navBar'
import userInfo from '../../helpers/userInfo';
import Footer from '../../components/core/footer'
import isAuthenticated from '../../helpers/authenticate';
import {Link as ReachLink, useNavigate} from "react-router-dom";
import {Button, Container, createIcon, Flex, Heading, Stack, Text,} from '@chakra-ui/react';

const Home = () => {

    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuth() {
            await setIsAuth(await isAuthenticated());
            await setUser(await userInfo());
        }

        checkAuth().then(async r => {
            if (await isAuthenticated()) {
                console.log(await userInfo());
                await setUser(await userInfo());
            } else {
                console.log("notAuth");
            }
        });

    }, [isAuth]);

    return (
        <>
            <div className={'h-screen'}>
                <div className={'h-screen hero'}
                     style={{backgroundImage: "url('/images/hero.png')", backgroundSize: "cover", objectFit: "cover"}}>
                    <Nav IsAuth={isAuth} User={user.user}/>

                    <Container maxW={'7xl'}>
                        <Stack
                            align={'center'}
                            spacing={{base: 8, md: 10}}
                            py={{base: 20, md: 28}}
                            direction={{base: 'column', md: 'row'}}>
                            <Stack flex={1} spacing={{base: 5, md: 10}}>
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{base: '3xl', sm: '4xl', lg: '6xl'}}>
                                    <Text
                                        as={'span'}
                                        position={'relative'}
                                        _after={{
                                            content: "''",
                                            width: 'full',
                                            height: '30%',
                                            position: 'absolute',
                                            bottom: 1,
                                            left: 0,
                                            bg: 'red.400',
                                            zIndex: -1,
                                        }}>
                                        FleetLinker,
                                    </Text>
                                    <br/>
                                    <Text as={'span'} color={'red.400'}>
                                        Fleet everywhere!
                                    </Text>
                                </Heading>
                                <Text color={'gray.900'}>
                                    Welcome to our fleet management app. Efficiently manage your vehicle fleet with our
                                    powerful platform. Say goodbye to complexity and manual tracking. Say hello to
                                    streamlined fleet management.
                                </Text>
                                <Stack
                                    spacing={{base: 4, sm: 6}}
                                    direction={{base: 'column', sm: 'row'}}>
                                    {!isAuth ?
                                        <Button
                                            rounded={'full'}
                                            size={'lg'}
                                            as={ReachLink}
                                            to={'/register'}
                                            fontWeight={'normal'}
                                            px={6}
                                            colorScheme={'red'}
                                            bg={'red.400'}
                                            _hover={{bg: 'red.500'}}>
                                            Get started
                                        </Button>
                                        :
                                        <Button
                                            rounded={'full'}
                                            size={'lg'}
                                            as={ReachLink}
                                            fontWeight={'normal'}
                                            to={'/dashboard'}
                                            px={6}
                                            colorScheme={'red'}
                                            bg={'red.400'}
                                            _hover={{bg: 'red.500'}}>
                                            Go to Dashboard
                                        </Button>
                                    }
                                    <Button
                                        rounded={'full'}
                                        size={'lg'}
                                        fontWeight={'normal'}
                                        px={6}
                                        leftIcon={<PlayIcon h={4} w={4} color={'gray.300'}/>}>
                                        How It Works
                                    </Button>
                                </Stack>
                            </Stack>
                            <Flex
                                flex={1}
                                justify={'center'}
                                align={'center'}
                                position={'relative'}
                                w={'full'}>
                            </Flex>
                        </Stack>
                    </Container>
                </div>
            </div>
            <Company/>
            <People/>
            <div className="bg-red-300">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-400 sm:text-4xl"
                            id="newsletter-headline">
                            Sign up for our newsletter
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg leading-6 text-white">
                            Welcome to FleetLinker, the ultimate fleet management solution for efficient and streamlined
                            operations. Whether you're managing a small fleet or overseeing a large-scale transportation
                            network, our web-based app empowers you with the tools and insights you need to optimize
                            your fleet's performance.

                            Get Started in 2 Easy Steps:

                            1. Sign up: Create your FleetLinker account by providing your basic information. It only
                            takes a few minutes to get started.

                            2. Set up your fleet: Add your vehicles, drivers, and other relevant details to our
                            user-friendly interface. Customize the app to suit your specific fleet management needs.
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:ml-8">
                        <form className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                                >
                                    Notify me
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-sm text-white">
                            We care about the protection of your data. Read our{' '}
                            <a href="#" className="text-white font-medium underline">
                                Privacy Policy.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home

const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
        'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

