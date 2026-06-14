import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { TypingText } from '../../reusables/ScrollText'
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
    <Flex
      flexDir={{base: 'column-reverse', md:'column-reverse', lg:'row'}}
      minH={{base: 'auto', md: 'auto', lg: '70vh'}}
      width="100%"
      position='relative'
      id='Home'
      justifyContent={'space-between'}
      px={{base: '1.5rem', md: '2rem', lg: '0'}}
      py={{base: '2rem', md: '3rem', lg: '0'}}
    >
        <Flex
          flexDir={'column'}
          width={{base: '100%', md: '100%', lg: '40rem'}}
          mt={{base: '2rem', md: '3rem', lg: '5rem'}}
          ml={{base: '0', md: '0', lg: '4rem'}}
          zIndex={2}
        >
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 fade-in delay-1">
                  Hi,
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black fade-in delay-2">
                  I&apos;m Ibrahim Adeyemo
                </h1>
            </div>

            <Flex mt={{base: '2rem', md: '3rem', lg: '4rem'}}>
                <TypingText texts={texts} />
            </Flex>

            <Flex
              mt={{base: '3rem', md: '4rem', lg: '7rem'}}
              flexDir={{base: 'column', sm: 'row'}}
              gap={{base: '1rem', sm: '0'}}
            >
                <Button
                  width={{base: '100%', sm: '12rem'}}
                  height='4rem'
                  fontSize={'1.2rem'}
                  onClick={gotoContact}
                  fontWeight={'600'}
                  variant={'solid'}
                  color={'white'}
                  bgColor={'black'}
                  _hover={{backgroundColor: 'brand.quinary'}}
                >
                    Hire Me
                </Button>
                <Button
                  ml={{base: '0', sm: '2rem'}}
                  cursor={'pointer'}
                  width={{base: '100%', sm: 'auto'}}
                  height='4rem'
                  border={'1px solid'}
                  onClick={bookAMeeting}
                >
                    Book a Meeting
                </Button>
            </Flex>
        </Flex>

        <Flex
          overflow={'hidden'}
          position={'relative'}
          display={{base:'flex', md:'flex', lg:'flex'}}
          justifyContent={'center'}
          alignItems={'center'}
          mt={{base: '2rem', md: '2rem', lg: '0'}}
          mb={{base: '2rem', md: '2rem', lg: '0'}}
        >
            <Image
              src={imageLink.il1_P}
              width={{base: '100%', md: '600px', lg: '800px'}}
              height={{base: 'auto', md: '500px', lg: '700px'}}
              left={{base: '0', md: '0', lg: '-30px'}}
              alt="illustration image 1"
              objectFit={'contain'}
            />
            <Box
                position="absolute"
                top={{base: '420px', md: '420px', lg: '620px'}}
                right={{base: '50px', md: '100px', lg: '200px'}}
                width={{base: '200px', md: '300px', lg: '350px'}}
                height={{base: '150px', md: '250px', lg: '300px'}}
                display={{base: 'none', md: 'block'}}
            >
                <Image
                    src={imageLink.blob2}
                    alt=""
                    width={{base: '250px', md: '350px', lg: '400px'}}
                    height={{base: '125px', md: '175px', lg: '200px'}}
                    position="absolute"
                    top="2px"
                    left="10px"
                />
            </Box>
        </Flex>
    </Flex>
  )
}

export default HomeComponent