import { Box, Collapse, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaBars, FaEnvelope, FaPhone, FaTimes, FaWhatsapp } from "react-icons/fa";

const ContactInfoBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <Flex align="center" gap={2}>
        <FaPhone />
        <Text as={Link} href="tel:+2347035853137" _hover={{ textDecor: "underline" }} fontWeight={'500'} fontSize={'20px'}>
          +234 70 3585 3137
        </Text>
      </Flex>

      <Flex align="center" gap={2}>
        <FaEnvelope />
        <Text as={Link} href="mailto:aderemiibrahim11@gmail.com" _hover={{ textDecor: "underline" }} fontWeight={'500'} fontSize={'20px'}>
          aderemiibrahim11@gmail.com
        </Text>
      </Flex>

      <Flex align="center" gap={2}>
        <FaWhatsapp />
        <Text
          as={Link}
          href="https://wa.me/2347035853137"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecor: "underline" }}
          fontWeight={'500'} fontSize={'20px'}
        >
          Chat on WhatsApp
        </Text>
      </Flex>
    </>
  );

  return (
    <Flex flexDir="column" align="flex-end">
      {/* Hamburger toggle — mobile only */}
      <IconButton
        display={{ base: 'flex', lg: 'none' }}
        icon={isOpen ? <FaTimes /> : <FaBars />}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        bg="gray.900"
        color="white"
        _hover={{ bg: 'gray.700' }}
        size="md"
        borderRadius="md"
        m={1}
      />

      {/* Desktop: always visible */}
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        bg="gray.900"
        color="white"
        p={2}
        align="center"
        gap={6}
      >
        {links}
      </Flex>

      {/* Mobile: collapses under the toggle button */}
      <Box display={{ base: 'block', lg: 'none' }}>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            bg="gray.900"
            color="white"
            p={3}
            flexDir="column"
            gap={3}
            borderRadius="md"
          >
            {links}
          </Flex>
        </Collapse>
      </Box>
    </Flex>
  );
};

export default ContactInfoBar;
