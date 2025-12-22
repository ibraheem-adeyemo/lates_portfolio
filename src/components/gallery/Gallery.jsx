import { Box, Flex, Text, Image, IconButton, Button, Link, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { imageLink, projectGallery } from "../../constants/imageLink";
import { SectionTitle } from "../where_have_worked/WhereHaveWorked";
import { MdGridView } from "react-icons/md";
import { FaLink  } from "react-icons/fa6";

const projects = [
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
    name:'profipoint',
    title: "Profipoint Agency",
    image: imageLink.switchProject1,
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
                                    <Button variant={'outline'} onClick={() => handleOpenModal(project)}><MdGridView color="white" /></Button>
                                </Flex>
                            </Flex>
                            </Box>
                            </MotionBox>
                    )
                })
            }
        </Flex>

        <ProjectModal isOpen={isOpen} onClose={onClose} project={selectedProject} />
        </Flex>
    )
}
