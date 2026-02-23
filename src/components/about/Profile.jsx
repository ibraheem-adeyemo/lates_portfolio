import { Flex, Heading, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { imageLink } from '../../constants/imageLink';
import { SkillBars } from './About'

const contacts = [
    {
        fieldName : 'Email address',
        fieldVal: 'aderemiibrahim11@gmail.com',        
    },
    {
        fieldName : 'Phone number',
        fieldVal: '+234 703 585 3137',
    },
    {
        fieldName: 'Address',
        fieldVal: 'Ede, Osun State, Nigeria'
    }
]

const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Typescript", level: 70 },
    { name: "Node.js", level: 78 },
    { name: "Redux.js", level: 78 },
    { name: "Next.js", level: 88 },

  ];


export const ProfileComponent = () => {
  return (
    <Flex>
        <Flex flexDir={'column'}>
        <Flex borderBottom='1px solid' borderColor='gray.300'>
            <Flex mr='2rem' ml='1rem'>
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Image src={imageLink.profilePics} alt='' width='200px' height='200px' objectFit='cover' borderRadius='0' />
                </motion.div>
            </Flex>
            <Flex flexDir={'column'}>
                <Flex flexDir='column' gap='0.2rem' mb='2rem'>
                    <Heading as={'h4'} size={'sm'}>Ibrahim Adeyemo</Heading>
                    <Text>Software Engineer</Text>
                </Flex>
                <Flex flexDir='column' gap='0.5rem'>
                    {
                        contacts.map((cont) => {
                            return (
                            <Flex>
                                <Text width='8rem'>{cont.fieldName}</Text>
                                <Text fontWeight={700}>{cont.fieldVal}</Text>
                            </Flex>)
                        })
                    }
                </Flex>
            </Flex>
        </Flex>
        <Flex>
            <SkillBars skills={skills} />
        </Flex>
        </Flex>
    </Flex>
  )
}
