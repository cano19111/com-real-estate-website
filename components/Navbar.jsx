import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { FcAbout, FcHome, FcMenu } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p = "2" boarderBottom = "1px" borderColo = "gray.100">
        <Box fontSize="3xl" color = "blue.400" fontWeight= "bold">
            <Link href="/" paddingLeft= "2">Commune Real Estate</Link>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as = {IconButton} icon = {<FcMenu/>} variant = "outlined" color = "red.400" />
                <MenuList>
                    <Link href= "/" passHref>
                        <MenuItem icon = {<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href= "/search" passHref>
                        <MenuItem icon = {<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href= "/search?purpose=for-sale" passHref>
                        <MenuItem icon = {<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href= "/search?purpose=for-rent" passHref>
                        <MenuItem icon = {<FiKey/>}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
        
    </Flex>
)

export default Navbar;