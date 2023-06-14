import {
    Avatar,
    Box,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import isAuthenticated from "../../helpers/authenticate";
import {FiBell, FiChevronDown, FiFileText, FiHome, FiMenu, FiSettings, FiTruck, FiUser} from 'react-icons/fi';
import {useEffect, useState} from "react";
import {Link as ReachLink} from "react-router-dom";
import logout from "../../helpers/logout";
import userInfo from "../../helpers/userInfo";
import FooterBanner from "../../components/footerBanner"

if (!isAuthenticated()) {
    window.location.href = "/login";
}

const LinkItems = [
    {name: 'Home', icon: FiHome,href: '/dashboard'},
    {name: 'Vehicle', icon: FiTruck, href: '/dashboard/vehicle'},
    {name: 'Insurance', icon: FiFileText, href: '/dashboard/insurance'},
    {name: 'Driver', icon: FiUser, href: '/dashboard/driver'},
    {name: 'Settings', icon: FiSettings, href: '/dashboard/settings'},
];

export default function SidebarWithHeader({children}) {

    if (!isAuthenticated()) {
        window.location.href = "/login";
    }

    const {isOpen, onOpen, onClose} = useDisclosure();

    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            await setUser(await userInfo());
        }

        checkAuth().then(async r => {
            if (await isAuthenticated()) {
                await setUser(await userInfo());
            } else {
                window.location.href = "/login";
            }
        });

    }, [isAuth]);


    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{base: 'none', md: 'block'}}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} User={user.user}/>
            <Box ml={{base: 0, md: 60}} p="4">
                {children}
                <FooterBanner/>
            </Box>
        </Box>
    );
}

const SidebarContent = ({onClose, ...rest}) => {
    return (
        <Box
            transition="3s ease"
            zIndex="10"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" mb="10" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    FleetLinker
                </Text>
                <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} as={ReachLink} to={link.href}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};
const NavItem = ({icon, children, ...rest}) => {
    return (
        <Link href="#" style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'red.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({onOpen,User, ...rest}) => {

    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.900');

    return (
        <Flex
            ml={{base: 0, md: 60}}
            px={{base: 4, md: 4}}
            position={"fixed"}
            top="0"
            right="0"
            width="100%"
            zIndex="1"
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{base: 'space-between', md: 'flex-end'}}
            {...rest}>
            <IconButton
                display={{base: 'flex', md: 'none'}}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu/>}
            />

            <Text
                display={{base: 'flex', md: 'none'}}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                Umai
            </Text>

            <HStack spacing={{base: '0', md: '6'}}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell/>}
                />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{boxShadow: 'none'}}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        User?.avatar || ""
                                    }
                                />
                                <VStack
                                    display={{base: 'none', md: 'flex'}}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">{User?.firstName || "" && " " && User?.lastName || ""}</Text>
                                </VStack>
                                <Box display={{base: 'none', md: 'flex'}}>
                                    <FiChevronDown/>
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={bgColor}
                            borderColor={borderColor}>
                            <MenuItem as={ReachLink} to="/Profile">
                                Profile
                            </MenuItem>
                            <MenuItem as={ReachLink} to="/Settings">
                                Settings
                            </MenuItem>
                            <MenuItem as={ReachLink} to="/dashboard">
                                dashboard
                            </MenuItem>
                            <MenuDivider/>
                            <MenuItem onClick={logout}>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    )
};