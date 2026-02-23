import { VStack, Box, Text, Progress, Flex, Image } from '@chakra-ui/react';
import { imageLink } from '../../constants/imageLink';
import { SectionTitle } from '../where_have_worked/WhereHaveWorked';

const Bio = () => {

    const BioComponent = () => {
        return (
            <Box lineHeight={8} textAlign="justify" fontSize="18px">
            {/* <Text fontWeight="bold" mt='20px'>Bio</Text> */}
            <Box my='40px'>
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
        <Flex
            justifyContent='space-between'
            width={'100%'}
            flexDir={{base:'column-reverse', lg:'row'}}
            px={{base:'1.5rem', md:'2.5rem', lg:'4rem'}}
            py={{base:'2.5rem', lg:'3.5rem'}}
            gap={{base:'2.5rem', lg:'4rem'}}
            backgroundColor={'#021e020f'}
            alignItems='center'
        >
            <Box w={{base:'100%', lg:'55%'}}>
                <BioComponent />
            </Box>
            <Flex
                w={{base:'100%', lg:'45%'}}
                justifyContent={{base:'center', lg:'flex-end'}}
                alignItems='center'
                flexShrink={0}
            >
                <Box
                    w={{base:'260px', sm:'300px', md:'340px', lg:'340px'}}
                    h={{base:'260px', sm:'300px', md:'340px', lg:'340px'}}
                    position={'relative'}
                    border={'solid 4px brown'}
                    flexShrink={0}
                >
                    <Image src={imageLink.profilePics2} w={'100%'} h={'100%'} objectFit='cover' left={'-15px'} alt="profile image" position={'absolute'} top='15px' />
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
    return (
        <Flex flexDir={'column'} id='About' width={'100%'}>
            <Flex justifyContent={'center'} width={'100%'}>
                <SectionTitle titleContent={'About Me'} titleNo={'01'} />
            </Flex>
            <Bio />
            {/* <Interests /> */}
            {/* <SkillBars skills={skills} /> */}
            {/* <MyPDFViewer /> */}
        </Flex>
    )
      
}

export default About