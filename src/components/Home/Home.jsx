import { Box, Button, Text, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import {CustomScrollingText, TypingText} from '../../reusables/ScrollText'
import { imageLink } from '../../constants/imageLink';
import { useHref, useLocation, useNavigate } from 'react-router-dom';
import { ReusableImage } from '../reusables/ReusableImage';

const texts = [
  "I'm a SOFTWARE Engineer from Nigeria.",
  "I build FULLSTACK applications.",
  "I have a very strong background in FRONT END development.",
  "I orchestrate a FRONT END micro architecture.",
  "I write React.js, Next.js, Node.js, express.js, and Typescript.",
  "Experienced in Fintech, Ecommerce, and blockchain technology."
];

const HomeComponent = () => {
    const bookAMeeting = () => {
        window.open('https://calendly.com/onlinelamu/30min', '_blank')
    }

    const gotoContact = () => {
        const contactForm = document.getElementById('Contact');

        if(contactForm){
            contactForm.scrollIntoView({ behavior:'smooth' })
        }
    }
  return (
    <Flex flexDir={{md:'column',lg:'row'}} minH={'70vh'}  width={{base:'100%', md:'100%', lg:'80%'}} position='relative' id='Home' justifyContent={'space-between'}>
        {/* <Image src={imageLink.blob2} alt='' width='300px' position='absolute' top={'-75px'} right={'-105px'} opacity={0.4} zIndex={1} bgColor={'red.100'} /> */}
        <Flex flexDir={'column'} width={'40rem'} mt='5rem' ml='4rem' zIndex={2} >
            <Flex flexDir={'column'} fontSize={'2rem'} fontWeight={'700'}>
                <Text>Hi, </Text>
                <Flex >I'm Ibrahim Adeyemo</Flex> 
                {/* <Text>a professional software engineer from Nigeria</Text> */}
            </Flex>
            {/* <Button width='20rem'>available for hire</Button> */}
            <Flex mt='4rem'>
                <TypingText texts={texts} />
            </Flex>
            <Flex mt='7rem'>
                <Button width='12rem' height='4rem' fontSize={'1.2rem'} onClick={gotoContact} fontWeight={'600'} variant={'solid'} color={'white'} bgColor={'black'} _hover={{backgroundColor: 'brand.quinary'}}>
                    Hire Me
                </Button>
                <Button ml={'2rem'} cursor={'pointer'} height='4rem' border={'1px solid'} onClick={bookAMeeting}>
                    Book a Meeting
                </Button>
            </Flex>
        </Flex>
        <Flex overflow={'hidden'} position={'relative'}>
            <Image src={imageLink.il1_P}  width={'800px'} height={'700px'} left={'-30px'} alt="illustartion image 1" />
            <Box 
                position="absolute" 
                top="620px" 
                right="200px" 
                width="350px"  // Set the width of visible portion
                height="300px" // Set the height of visible portion
                // overflow="hidden"
            >
                <Image 
                    src={imageLink.blob2} 
                    width="400px" // Ensure the image is larger so you can "clip" it
                    height="200px"
                    // objectFit="cover"
                    position="absolute"
                    top="2px"   // Shift the image upwards
                    left="10px"  // Shift the image leftwards
                />
            </Box>
        </Flex>
        {/* <CustomScrollingText /> */}
    </Flex>
  )
}

export default HomeComponent