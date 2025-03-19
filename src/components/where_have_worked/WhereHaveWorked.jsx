import { Flex, Text, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RxTriangleRight } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const WorkExperience = ({ experience }) => {
    const { companyName, position, startDate, endDate = 'present', deliverables = [] } = experience;

    return (
        <MotionFlex 
            flexDir={'column'}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
        >
            <Flex flexDir={'column'} mb='10px'>
                <Flex fontWeight={600} fontSize={'18px'}>
                    <Text mr='3px'>{position}</Text> @ <Text ml='3px' color='brand.tertiary'>{companyName}</Text>
                </Flex>
                <Text>({startDate} - {endDate})</Text>
            </Flex>
            <Flex flexDir='column'>
                <AnimatePresence>
                    {deliverables.map((deliverable, index) => (
                        <MotionFlex
                            key={index}
                            mb='10px'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <RxTriangleRight size='30px' width={'60px'} /> &nbsp;
                            <MotionText>{deliverable}</MotionText>
                        </MotionFlex>
                    ))}
                </AnimatePresence>
            </Flex>
        </MotionFlex>
    );
};

const WhereHaveWorked = () => {
    const [indx, setIndex] = useState(0);
    const { data } = useSelector(state => state.storeReducer);
    const [companies, setCompanies] = useState([]);
    const [currExperience, setCurrExperience] = useState(data[indx]);

    useEffect(() => {
        if (data?.length > 0) {
            setCompanies(data.map(company => company.companyName));
        }
    }, [data]);

    useEffect(() => {
        setCurrExperience(data[indx]);
    }, [data, indx]);

    return (
        <Flex justifyContent={'center'} gap={'2rem'} height={'30rem'} width={'80%'}>
            <Flex flexDir={'column'} width={'15rem'} borderLeft={'1px solid'} borderLeftColor={'brand.primaryBg'} justifyContent={'space-between'} height={'18rem'}>
                {companies?.map((company, i) => (
                    <MotionBox
                        key={i}
                        backgroundColor={i === indx ? 'brand.primaryBg' : ''}
                        color={i === indx ? 'white' : 'black'}
                        padding={'10px'}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIndex(i)}
                        cursor={'pointer'}
                    >
                        <Text fontWeight={600} fontSize={'18px'}>{company}</Text>
                    </MotionBox>
                ))}
            </Flex>
            <Flex width='35rem'>
                <AnimatePresence>
                    {currExperience && <WorkExperience experience={currExperience} key={indx} />}
                </AnimatePresence>
            </Flex>
        </Flex>
    );
};

export default WhereHaveWorked;
