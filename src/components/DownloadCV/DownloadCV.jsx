import { Box, Button, Flex, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const DownloadCV = () => {
    const handleDownloadCV = () => {
        // Replace with your actual CV file path
        const cvUrl = '/IBRAHEEM-ADEYEMO-dp.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Ibrahim_Adeyemo_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            position="relative"
            width="100%"
            minH={{ base: '400px', md: '500px', lg: '600px' }}
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={{ base: '4rem', md: '6rem', lg: '8rem' }}
            px={{ base: '1.5rem', md: '2rem', lg: '4rem' }}
            id='resume'
        >           

            {/* Content */}
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                zIndex={2}
                textAlign="center"
                maxW="800px"
            >
                <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="bold"
                    mb={{ base: '1rem', md: '1.5rem' }}
                    textShadow="0 2px 10px rgba(0,0,0,0.1)"
                >
                    Ready to Work Together?
                </Heading>

                <Text
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    mb={{ base: '2rem', md: '3rem' }}
                    opacity={0.95}
                    maxW="600px"
                    textShadow="0 1px 5px rgba(0,0,0,0.1)"
                >
                    Download my CV to learn more about my experience, skills, and projects.
                </Text>

                <Button
                    onClick={handleDownloadCV}
                    size="lg"
                    height={{ base: '3.5rem', md: '4rem' }}
                    px={{ base: '2rem', md: '3rem' }}
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight="bold"
                    color="purple.600"
                    bg="white"
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                        bg: 'gray.50',
                    }}
                    _active={{
                        transform: 'translateY(0)',
                    }}
                    transition="all 0.3s ease"
                    boxShadow="0 4px 15px rgba(0,0,0,0.15)"
                >
                    Download My CV
                </Button>
            </Flex>
        </Box>
    );
};

export default DownloadCV;
