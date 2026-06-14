import { Box, Button, Flex, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const DownloadCV = () => {
    const handleDownloadCV = () => {
        // Replace with your actual CV file path
        const cvUrl = '/Ibraheem_Adeyemo_CV.pdf';
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
            minH={{ base: '380px', md: '460px' }}
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={{ base: '4rem', md: '6rem' }}
            px={{ base: '1.5rem', md: '2rem', lg: '4rem' }}
            bgGradient="linear(135deg, #010817 0%, #1B4D90 60%, #003B8B 100%)"
            id='Resume'
        >
            {/* Decorative circle accents */}
            <Box
                position="absolute"
                top="-80px"
                right="-80px"
                w="300px"
                h="300px"
                borderRadius="full"
                bg="whiteAlpha.50"
                pointerEvents="none"
            />
            <Box
                position="absolute"
                bottom="-60px"
                left="-60px"
                w="240px"
                h="240px"
                borderRadius="full"
                bg="whiteAlpha.50"
                pointerEvents="none"
            />

            {/* Content */}
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                zIndex={2}
                textAlign="center"
                maxW="700px"
            >
                <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="bold"
                    color="white"
                    mb={{ base: '1rem', md: '1.5rem' }}
                    textShadow="0 2px 16px rgba(0,0,0,0.4)"
                >
                    Ready to Work Together?
                </Heading>

                <Text
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    mb={{ base: '2rem', md: '2.5rem' }}
                    color="whiteAlpha.900"
                    maxW="520px"
                    lineHeight={1.8}
                >
                    Download my CV to learn more about my experience, skills, and projects.
                </Text>

                <Button
                    onClick={handleDownloadCV}
                    size="lg"
                    height={{ base: '3rem', md: '3.5rem' }}
                    px={{ base: '2rem', md: '2.5rem' }}
                    fontSize={{ base: 'md', md: 'lg' }}
                    fontWeight="bold"
                    color="#1B4D90"
                    bg="white"
                    _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
                        bg: 'gray.50',
                    }}
                    _active={{
                        transform: 'translateY(0)',
                    }}
                    transition="all 0.3s ease"
                    boxShadow="0 4px 20px rgba(0,0,0,0.25)"
                    borderRadius="full"
                >
                    Download My CV
                </Button>
            </Flex>
        </Box>
    );
};

export default DownloadCV;
