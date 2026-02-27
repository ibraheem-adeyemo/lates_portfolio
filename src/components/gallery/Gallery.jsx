import { Box, Flex, Text, Image, IconButton, Button, Link, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { imageLink, projectGallery } from "../../constants/imageLink";
import { SectionTitle } from "../where_have_worked/WhereHaveWorked";
import { MdGridView } from "react-icons/md";
import { FaLink  } from "react-icons/fa6";

const projects = [
  {
    name: 'paytelstack',
    title: 'Paytelstack',
    image: imageLink.paytelstack,
    description: 'A production-grade fintech SaaS platform for automated airtime & data reselling — built with Node.js, TypeScript, PostgreSQL, Docker, and live payment gateway integrations.',
    link: 'https://staging.paytelstack.com/',
  },
  {
    name:'Fraud_management',
    title: "Fraud management",
    image: imageLink.paymentControle,
    description: "A secure multi -tenancy platform to detect and prevent fraud.",
    link: "https://payment-control-ui.k9.isw.la/",
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
    name:'Payment_control',
    title: "Payment Control UI",
    image: imageLink.switch1,
    description: "A fully functional online Payment management platform.",
    link: "http://fraud.topstack.com.ng/",
  },
];

const MotionBox = motion(Box);

const ProjectModal = ({ isOpen, onClose, project }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const images = projectGallery[project?.name] || [];

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentPage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
            <ModalOverlay bg="blackAlpha.800" />
            <ModalContent bg="gray.900" maxW="80vw" maxH="90vh">
                <ModalCloseButton color="white" _hover={{ bg: "gray.700" }} />
                <ModalBody p={8}>
                    <Flex direction="column" align="center" gap={4}>
                        <Text fontSize="2xl" fontWeight="bold" color="white" mb={2}>
                            {project?.title}
                        </Text>

                        <Box position="relative" width="100%" height="70vh">
                            <Image
                                src={images[currentPage]}
                                alt={`${project?.title} - Page ${currentPage + 1}`}
                                objectFit="contain"
                                width="100%"
                                height="100%"
                                borderRadius="md"
                            />
                        </Box>

                        <Flex align="center" gap={6} mt={4}>
                            <IconButton
                                icon={<FaChevronLeft />}
                                onClick={handlePrevious}
                                isDisabled={images.length <= 1}
                                colorScheme="blue"
                                size="lg"
                                aria-label="Previous page"
                            />

                            <Text color="white" fontSize="lg" fontWeight="medium">
                                {currentPage + 1} / {images.length}
                            </Text>

                            <IconButton
                                icon={<FaChevronRight />}
                                onClick={handleNext}
                                isDisabled={images.length <= 1}
                                colorScheme="blue"
                                size="lg"
                                aria-label="Next page"
                            />
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export const Gallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        onOpen();
    };

    return (
        <Flex width="100%" flexDir={'column'} id='Portfolio'>
            <SectionTitle titleContent={'Gallery'} titleNo={'03'} />
            <Flex flexDir='column' px={{base:'1.5rem', md:'2.5rem', lg:'4rem'}} gap={{base:'3rem', lg:'5rem'}} pb='3rem'>
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <Flex
                                flexDir={{ base: 'column', lg: isEven ? 'row' : 'row-reverse' }}
                                gap={{ base: '1.5rem', lg: '3rem' }}
                                alignItems='center'
                            >
                                {/* Image side */}
                                <Box
                                    position='relative'
                                    w={{ base: '100%', lg: '50%' }}
                                    borderRadius='xl'
                                    overflow='hidden'
                                    boxShadow='xl'
                                    flexShrink={0}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        w='100%'
                                        objectFit='cover'
                                        display='block'
                                    />
                                    <Flex
                                        width='100%'
                                        opacity={0}
                                        _hover={{ opacity: 1 }}
                                        height='100%'
                                        position='absolute'
                                        top='0'
                                        bgColor='rgba(0, 0, 0, 0.65)'
                                        transition="opacity 0.3s ease-in-out"
                                        justifyContent='center'
                                        alignItems='center'
                                        gap={3}
                                    >
                                        <Button variant='link' as={Link} href={project.link} target='_blank'>
                                            <FaLink color="white" size={22} />
                                        </Button>
                                        <Button variant='outline' borderColor='white' onClick={() => handleOpenModal(project)}>
                                            <MdGridView color="white" size={22} />
                                        </Button>
                                    </Flex>
                                </Box>

                                {/* Text side */}
                                <Flex
                                    flexDir='column'
                                    w={{ base: '100%', lg: '50%' }}
                                    gap={4}
                                    textAlign={{ base: 'center', lg: isEven ? 'left' : 'right' }}
                                    px={{ base: 0, lg: '1rem' }}
                                >
                                    <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight='bold'>
                                        {project.title}
                                    </Text>
                                    <Text color='gray.500' fontSize={{ base: 'sm', lg: 'md' }} lineHeight={1.9}>
                                        {project.description}
                                    </Text>
                                    <Flex
                                        gap={3}
                                        justifyContent={{ base: 'center', lg: isEven ? 'flex-start' : 'flex-end' }}
                                    >
                                        <Button
                                            as={Link}
                                            href={project.link}
                                            target='_blank'
                                            size='sm'
                                            variant='outline'
                                            colorScheme='blue'
                                            leftIcon={<FaLink />}
                                        >
                                            Live Demo
                                        </Button>
                                        <Button
                                            size='sm'
                                            variant='ghost'
                                            colorScheme='gray'
                                            leftIcon={<MdGridView />}
                                            onClick={() => handleOpenModal(project)}
                                        >
                                            View Gallery
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </MotionBox>
                    );
                })}
            </Flex>

            <ProjectModal isOpen={isOpen} onClose={onClose} project={selectedProject} />
        </Flex>
    )
}
