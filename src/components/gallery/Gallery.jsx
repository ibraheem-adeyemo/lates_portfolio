import { Box, Flex, Text, Image, IconButton, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { imageLink } from "../../constants/imageLink";
import { SectionTitle } from "../where_have_worked/WhereHaveWorked";
import { MdGridView } from "react-icons/md";
import { FaLink  } from "react-icons/fa6";

const projects = [
  {
    name:'Fraud_management',
    title: "Fraud management",
    image: imageLink.paymentControle,
    description: "A secure multi -tenancy platform to detect and prevent fraud.",
    link: "https://payment-control-ui.k8.isw.la/",
  },
  {
    name:'Supermart_express',
    title: "Supermart Express",
    image: imageLink.supermart,
    description: "No 1, online groceries shop in Nigeria that offers same day delivery.",
    link: "https://www.supermart.ng/",
  },
  {
    name:'paas',
    title: "Payment As a Service",
    image: imageLink.paas,
    description: "A robust system that provide payment enablement service.",
    link: "https://paas-ui-v2.k8.isw.la",
  },
  {
    name:'profipoint',
    title: "Profipoint Agency",
    image: imageLink.profiPoint,
    description: "A trusted agency that build websites for businesses.",
    link: "#",
  },
  {
    name:'Payment_control',
    title: "Payment Control UI",
    image: imageLink.switch1,
    description: "A fully functional online Payment management platform.",
    link: "http://fraud.topstack.com.ng/",
  },
];

const MotionBox = motion(Box);

export const Gallery = () => {
    return (
        <Flex width={{base:'100%', md:'100%', lg:'80%'}} flexDir={'column'} id='Portfolio'>
            <SectionTitle titleContent={'Gallery'} titleNo={'03'} />
            <Flex flexWrap={'wrap'} paddingInline={'40px'} gap={'2rem'} justifyContent={'center'}>
            {
                projects.map((project, index) => {
                    return (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            p={4}
                            borderRadius="lg"
                            boxShadow="lg"
                            bg="white"
                            textAlign="center"
                            >
                            <Box position={'relative'}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                borderRadius="md"
                                w="100%"
                                maxW="400px"
                                mb={4}
                            />
                            <Text fontSize="xl" fontWeight="bold">
                                {project.title}
                            </Text>
                            <Text color="gray.600" mt={2}>
                                {project.description}
                            </Text>
                            <Flex width={'100%'} opacity={0} _hover={{opacity:1}} height={'100%'} position={'absolute'} top='1px' bgColor='rgba(0, 0, 0, 0.61)' transition="opacity 0.3s ease-in-out" justifyContent={'center'}>
                                <Flex justifyContent={'center'} alignSelf={'center'}>
                                    <Button variant={'link'} as={Link} href={project.link} target={"_blank"}><FaLink color="white" /></Button>
                                    <Button variant={'outline'}><MdGridView color="white" /></Button>
                                </Flex>
                            </Flex>
                            </Box>
                            </MotionBox>
                    )
                })
            }
        </Flex>
        </Flex>
    )
}
