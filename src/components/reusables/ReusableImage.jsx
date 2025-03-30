import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import { imageLink } from '../../constants/imageLink'

export const ReusableImage = () => {
  return (
    <Flex w={{base:'100%',sm:'100%',md:'100%', lg:'50%'}} paddingTop={'6rem'}>
        <Box width={'400px'} height={'400px'} position={'relative'} border={'solid 4px brown'}>
            <Image src={imageLink.profilePics2}  width={'400px'} height={'400px'} left={'-30px'} alt="illustartion image 1" position={'absolute'} top='30px' />
        {/* <Image src={imageLink.il1_P} maxWidth={'80%'} alt="illustartion image 1" /> */}
        {/* <Image src={imageLink.blob2} maxWidth={'80%'} alt="blob shape image 1" position='absolute' top='630px' right={'130px'} /> */}
        </Box>
    </Flex>
  )
}
