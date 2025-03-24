import { VStack, Box, Text, Progress, Flex, List, ListItem, ListIcon, HStack, Icon, Heading, Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import { RxTriangleRight } from "react-icons/rx";
import { imageLink } from '../../constants/imageLink';
import { motion } from "framer-motion";
import { FaBasketballBall, FaHiking, FaUtensils, FaPlane } from "react-icons/fa";
import { SectionTitle } from '../where_have_worked/WhereHaveWorked';

const hobbies = [
  { name: "Playing Basketball", icon: FaBasketballBall },
  { name: "Hiking", icon: FaHiking },
  { name: "Cooking", icon: FaUtensils },
  { name: "Traveling", icon: FaPlane },
];

const MotionBox = motion(Box);

const Interests = () => {
  return (
    <Flex flexWrap="wrap" justify="center" gap={6} mt={6}>
      {hobbies.map((hobby, index) => (
        <MotionBox
          key={index}
          display="flex"
          alignItems="center"
          gap={3}
          bg="gray.100"
          p={4}
          borderRadius="lg"
          boxShadow="md"
          cursor="pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Icon as={hobby.icon} boxSize={6} color="brand.primaryBg" />
          <Text fontSize="lg" fontWeight="bold">
            {hobby.name}
          </Text>
        </MotionBox>
      ))}
    </Flex>
  );
};

const Bio = () => {

    const BioComponent = () => {
        return (
            <Box lineHeight={8} textAlign="justify" fontSize="18px">
            <Text fontWeight="bold" mt='20px'>Bio</Text>
            <Box mt='40px'>
            <Text>
              Hello! My name is <strong>Ibrahim Adeyemo</strong>, a results-driven
              <strong> Full-Stack Engineer </strong> specializing in building scalable,
              high-performance web applications.
            </Text>
          
            <Text my="4px">
              <strong>My technical expertise spans across:</strong>
            </Text>
          
            <Text>
              <strong>Front-End:</strong> React.js, Next.js, Redux Toolkit, Chakra UI, Tailwind CSS
            </Text>
            <Text>
              <strong>Back-End:</strong> Node.js, Express.js, RESTful APIs, Authentication & Authorization
            </Text>
            <Text>
              <strong>State Management:</strong> Redux Toolkit, React Query, Context API
            </Text>
            <Text>
              <strong>Performance Optimization:</strong> Webpack, lazy loading, code splitting
            </Text>
            <Text>
              <strong>Deployment & DevOps:</strong> NGINX, Docker, CI/CD, Shared Hosting
            </Text>
            <Text>
              <strong>Open-Source Contributions:</strong> Focused on APIs & authentication
            </Text>
          
            <Text mt="4px">
              I have built and optimized real-time financial dashboards, authentication systems, and enterprise applications, ensuring accessibility, security, and scalability. 
            </Text>
          
            <Text>
              Passionate about problem-solving and clean code, I stay updated with the latest industry trends to deliver efficient, innovative solutions that drive business success.
            </Text>
            </Box>
          </Box>          
        )            
    }   
    return (
        <Flex justifyContent='space-between' width={'100%'} flexDir={{base:'column-reverse',sm:'column-reverse',md:'column-reverse', lg:'row'}} paddingInline={{base:'1rem', lg:'90px'}} minH={'700px'} pr={{base:'1rem', lg:'200px'}} gap={'2rem'} backgroundColor={'#021e020f'}>
            <Box w={{base:'100%',sm:'100%',md:'100%', lg:'40%'}}>
                <BioComponent />            
            </Box>
            <Flex w={{base:'100%',sm:'100%',md:'100%', lg:'50%'}} paddingTop={'6rem'}>
                <Box width={'400px'} height={'400px'} position={'relative'} border={'solid 4px brown'}>
                    <Image src={imageLink.profilePics2}  width={'400px'} height={'400px'} left={'-30px'} alt="illustartion image 1" position={'absolute'} top='30px' />
                {/* <Image src={imageLink.il1_P} maxWidth={'80%'} alt="illustartion image 1" /> */}
                {/* <Image src={imageLink.blob2} maxWidth={'80%'} alt="blob shape image 1" position='absolute' top='630px' right={'130px'} /> */}
                </Box>
            </Flex>
        </Flex>
      )    
}

export const SkillBars = ({skills}) => {
    return (
        <Flex justifyContent='space-between' paddingInline={'90px'} height={'700px'} pr='200px' backgroundColor={'#021e020f'}>
        <VStack spacing={4} width='90%' align="stretch">
        {skills.map((skill) => (
          <Box key={skill.name}>
            <Text fontWeight="bold">{skill.name}</Text>
            <Flex width={'100%'} align='center'>
                <Progress value={skill.level} size="sm" flex={"1"} colorScheme="blue" />
                <Text ml={2}>{skill.level}%</Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Flex>
      
    );
  };

const About = () => {
    const [bioInterest, setBioInterest] = useState(['bio', 'skills', 'interest', 'hubbys']);
    const hubbys = ['playing basketball', 'hiking', 'cooking', 'traveling'];
    const frontEndSkills = ["React", "Next.js", "Redux Toolkit", "Chakra UI"];
    const backEndSkills = ["Node.js", "Express.js", "AWS", "API integrations"];
    const skills = [
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Typescript", level: 70 },
        { name: "Node.js", level: 78 },
        { name: "Redux.js", level: 78 },
        { name: "Next.js", level: 88 },

      ];

    return (
        <Flex flexDir={'column'}>
            <Flex justifyContent={'center'} width={'80%'}>
                <SectionTitle titleContent={'About Me'} titleNo={'01'} />
            </Flex>
            <Bio />
            {/* <Interests /> */}
            {/* <SkillBars skills={skills} /> */}
        </Flex>
    )
      
}

export default About