import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { imageLink } from '../constants/imageLink'
import { motion } from 'framer-motion'
import Footer from '../components/footer/Footer'

// Sidebar animation (slide in from left)
const sidebarVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Main content animation (fade in & slide up)
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } }
}

const Layout = ({ children }) => {
  return (
    <Flex bgColor={{base:'gold',sm:'yellow',md:'blue.100',lg:'green', xl:'red.100', '2xl':'pink.100'}}>
      {/* Animated Sidebar */}
      <motion.div initial="hidden" animate="visible" variants={sidebarVariants}>
        <Box width={'20rem'} bgColor="brand.primaryBg" display={{base:'none',sm:'none', md:'none', lg:'none'}} position={'fixed'}>
          <Sidebar />
        </Box>
      </motion.div>

      {/* Animated Main Content */}
      <motion.div initial="hidden" animate="visible" variants={contentVariants} style={{ width: '100%', overflowX:'hidden', overflowY:'hidden' }}>
        <Box w="100%" minH="100vh" p={4} ml={{base:'1rem',sm:'1rem',md:'3rem',lg:'20rem', xl:'20rem', '2xl':'20rem'}} overflowX="hidden" overflowY="hidden" position="relative">
          <Image src={imageLink.blob2} alt="Profile" width="100%" position="absolute" opacity={0.15} zIndex={-3} />
          {children}
        </Box>
        <motion.div>
            <Footer />
        </motion.div>
      </motion.div>    
    </Flex>
  )
}

export default Layout
