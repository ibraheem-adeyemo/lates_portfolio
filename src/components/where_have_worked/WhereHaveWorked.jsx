import { Flex, Text, Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { RxTriangleRight } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionBox = motion(Box);

export const SectionTitle = ({ titleContent, titleNo }) => {
    return (
        <Flex color='orange.400' width='fit-content' my='3rem' alignSelf={'center'}>
                <Heading mr='2rem' size={{base:'md', sm:'md', lg:'md'}} color={'gray.500'}>{titleNo}</Heading>
                <Heading size={{base:'md', sm:'md', lg:'md'}}>{titleContent} </Heading>
            </Flex>
    )
}
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
  const { data } = useSelector((state) => state.storeReducer);
  const currExperience = data[indx];

  // Scrollable Companies List Component
  const CompaniesList = ({ layout, listHeight = "25rem" }) => (
    <Flex
      flexDir={layout === "column" ? "column" : "row"}
      overflow={layout === "row" ? "scroll" : "unset"}
      width={layout === "row" ? "100%" : { base: "100%", lg: "15rem" }}
      borderLeft={layout === "column" ? "1px solid" : "none"}
      borderTop={layout === "row" ? "1px solid" : "none"}
      borderColor="gray.300"
      justifyContent="space-between"
      height={listHeight}
    >
      {data.map((company, i) => (
        <MotionBox
          key={i}
          padding="10px"
          cursor="pointer"
          onClick={() => setIndex(i)}
          color={i === indx ? "orange.500" : "black"}
          borderLeft={layout === "column" && i === indx ? "3px solid orange.500" : "none"}
          borderTop={layout === "row" && i === indx ? "3px solid orange.500" : "none"}
        >
          <Text fontWeight={600} fontSize="18px" width={{ base: "10rem", lg: "15rem" }}>
            {company.companyName}
          </Text>
        </MotionBox>
      ))}
    </Flex>
  );

  return (
    <Flex flexDir="column" width="100%">
      <SectionTitle titleContent="Where have worked" titleNo="02" />
      <Flex
        gap="2rem"
        justifyContent="center"
        height={{ base: "auto", lg: "30rem" }}
        flexDir={{ base: "column", lg: "row" }}
        px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
      >
        {/* Mobile: Horizontal List */}
        <Flex display={{ base: "flex", lg: "none" }}>
          <CompaniesList layout="row" listHeight='fit-content' />
        </Flex>

        {/* Desktop: Vertical List */}
        <Flex display={{ base: "none", lg: "flex" }}>
          <CompaniesList layout="column" />
        </Flex>

        {/* Work Experience Section */}
        <Flex flex={1} height={{ base: "auto", lg: "25rem" }} overflowY="auto">
          <AnimatePresence>{currExperience && <WorkExperience experience={currExperience} key={indx} />}</AnimatePresence>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WhereHaveWorked;
