import { Box, Flex, Text, Image, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { imageLink } from "../../constants/imageLink";
import { SectionTitle } from "../where_have_worked/WhereHaveWorked";

const projects = [
  {
    title: "Fraud management",
    image: imageLink.paymentControle,
    description: "A secure multi -tenancy platform to detect and prevent fraud.",
    link: "#",
  },
  {
    title: "Supermart Express",
    image: imageLink.supermart,
    description: "No 1, online groceries shop in Nigeria that offers same day delivery.",
    link: "#",
  },
  {
    title: "Payment As a Service",
    image: imageLink.paas,
    description: "A robust system that provide payment enablement service.",
    link: "#",
  },
  {
    title: "Profipoint Agency",
    image: imageLink.profiPoint,
    description: "A trusted agency that build websites for businesses.",
    link: "#",
  },
  {
    title: "Payment Control UI",
    image: imageLink.switch1,
    description: "A fully functional online Payment management platform.",
    link: "#",
  },
];

const MotionBox = motion(Box);

export const ProjectGallery = () => {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <Flex direction="column" align="center" mt={10} position="relative">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        My Projects
      </Text>

      <Flex align="center">
        <IconButton
          icon={<FaArrowLeft />}
          onClick={prevProject}
          aria-label="Previous Project"
          variant="ghost"
          fontSize="2xl"
          _hover={{ color: "brand.primaryBg" }}
        />
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
          <Image
            src={projects[index].image}
            alt={projects[index].title}
            borderRadius="md"
            w="100%"
            maxW="400px"
            mb={4}
          />
          <Text fontSize="xl" fontWeight="bold">
            {projects[index].title}
          </Text>
          <Text color="gray.600" mt={2}>
            {projects[index].description}
          </Text>
        </MotionBox>
        <IconButton
          icon={<FaArrowRight />}
          onClick={nextProject}
          aria-label="Next Project"
          variant="ghost"
          fontSize="2xl"
          _hover={{ color: "brand.primaryBg" }}
        />
      </Flex>
    </Flex>
  );
};


export const Gallery = () => {
    return (
        <Flex width={'80%'} flexDir={'column'}>
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
                            </MotionBox>
                    )
                })
            }
        </Flex>
        </Flex>
    )
}
