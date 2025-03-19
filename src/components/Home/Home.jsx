import { Box, Button, Text, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import {CustomScrollingText, TypingText} from '../../reusables/ScrollText'
import { imageLink } from '../../constants/imageLink';

const texts = [
  "I'm a SOFTWARE Engineer from Nigeria.",
  "I build FULLSTACK applications.",
  "I have a very strong background in FRONT END development.",
  "I orchestrate a FRONT END micro architecture.",
  "I write React.js, Next.js, Node.js, express.js, and Typescript.",
  "Experienced in Fintech, Ecommerce, and blockchain technology."
];

const HomeComponent = () => {
  return (
    <Flex flexDir={'column'} height={'90vh'} position='relative'>
        <Image src={imageLink.blob2} alt='' width='300px' position='absolute' top={'-75px'} right={'-105px'} opacity={0.4} zIndex={1} />
        <Flex flexDir={'column'} width={'40rem'} mt='5rem' zIndex={2} >
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
                <Button width='12rem' height='4rem' fontSize={'1.2rem'} fontWeight={'600'} variant={'solid'} color={'white'} bgColor={'black'} _hover={{backgroundColor: 'brand.quinary'}}>
                    Hire Me
                </Button>
                <Button ml={'2rem'} cursor={'pointer'} height='4rem' border={'1px solid'} onClick={() => alert('This is a placeholder for a contact form.')}>
                    Request a Quotation
                </Button>
            </Flex>
        </Flex>
        {/* <CustomScrollingText /> */}
    </Flex>
  )
}

export default HomeComponent