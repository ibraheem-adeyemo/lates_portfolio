import { Box, Flex, Link, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { RiTwitterXLine, RiFacebookCircleFill, RiLinkedinBoxFill, RiInstagramLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { Link as DomLink } from 'react-router-dom';
import { imageLink } from '../../constants/imageLink';
import { RxDashboard } from "react-icons/rx";
import { PiUsers, PiFoldersBold, PiNotepadBold } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";
import { motion } from 'framer-motion';

const Sidebar = ({ firstName, lastName }) => {
    const sideBarOptions = [
        { name: 'Home', icon: RxDashboard, href: '#home' },
        { name: 'About', icon: PiUsers, href: '#about' },
        { name: 'Resume', icon: RiUserSettingsLine, href: '#resume' },
        { name: 'Portfolio', icon: PiUsers, href: '#portfolio' },
        { name: 'Services', icon: PiFoldersBold, href: '#services' },
        { name: 'Contact', icon: PiNotepadBold, href: '#contact' }
    ];

    const socialMediaHandles = [
        { name: 'X', link: 'http://x.com', icon: RiTwitterXLine },
        { name: 'Facebook', link: 'http://facebook.com', icon: RiFacebookCircleFill },
        { name: 'Instagram', link: 'http://instagram.com', icon: RiInstagramLine },
        { name: 'LinkedIn', link: 'http://linkedin.com', icon: RiLinkedinBoxFill },
        { name: 'Github', link: 'http://github.com', icon: BsGithub }
    ];

    return (
        <motion.div 
            initial={{ x: '-100%' }} 
            animate={{ x: 0 }} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <Flex justifyContent={'center'} flexDir={'column'}>
                {/* Profile Image & Name */}
                <Flex flexDir={'column'} alignItems="center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Image src={imageLink.profilePics} width={'120px'} height={'120px'} alt='Profile' borderRadius="full" />
                        <Text mt={2} fontSize="lg" fontWeight="bold">{firstName} {lastName}</Text>
                    </motion.div>

                    {/* Social Media Icons */}
                    <Flex mt='1.5rem' justifyContent={'center'} gap="10px">
                        {socialMediaHandles.map((handle, index) => (
                            <motion.div 
                                whileHover={{ scale: 1.2 }} 
                                key={index} 
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link as={DomLink} to={handle.link} color='gray.400' rel='noopener noreferrer'>
                                    <handle.icon size='24px' />
                                </Link>
                            </motion.div>
                        ))}
                    </Flex>
                </Flex>

                {/* Sidebar Navigation */}
                <Flex my={'2rem'} px='2rem'>
                    <Box width={'100%'} height={'100vh'} bgColor="brand.primaryBg">
                        <Flex flexDir={'column'} gap="10px">
                            {sideBarOptions.map((option, index) => (
                                <motion.div 
                                    whileHover={{ scale: 1.1 }} 
                                    key={index} 
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Link as={DomLink} to={option.href}
                                        _hover={{ backgroundColor: 'brand.quinary', color: 'white' }}
                                        color='white' rel='noopener noreferrer' 
                                        px={'10px'} py={'12px'} borderRadius='10px'
                                    >
                                        <Flex align="center">
                                            <option.icon size='24px' />
                                            <Text ml={'1rem'}>{option.name}</Text>
                                        </Flex>
                                    </Link>
                                </motion.div>
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </motion.div>
    );
}

export default Sidebar;
