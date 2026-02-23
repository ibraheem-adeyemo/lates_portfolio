import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { imageLink } from '../constants/imageLink'
import { motion } from 'framer-motion'
import Footer from '../components/footer/Footer'
import WithSubnavigation from '../components/nav-bar/NavBar'

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
    <Flex>
      {/* Animated Sidebar */}
      <motion.div initial="hidden" animate="visible" variants={sidebarVariants}>
        <Box width={'20rem'} bgColor="brand.primaryBg" display={{base:'none',sm:'none', md:'none', lg:'flex'}} position={'fixed'}>
          <Sidebar />
        </Box>
      </motion.div>

      {/* Animated Main Content */}
      <motion.div initial="hidden" animate="visible" variants={contentVariants} style={{ width: '100%', overflowX:'hidden', overflowY:'hidden' }}>
        <Flex position={'fixed'} right={'10px'} zIndex={20}>
        <WithSubnavigation />
        </Flex>
        <Box minH="100vh" ml={{base:'0',sm:'0',md:'0',lg:'20rem', xl:'20rem', '2xl':'20rem'}} overflowX="hidden" overflowY="hidden" position="relative">
          <Image src={imageLink.blob2} alt="Profile" width="100%" position="absolute" opacity={0.15} zIndex={-3} />
          {children}
        </Box>
        <Box ml={{base:'0',sm:'0',md:'0',lg:'20rem', xl:'20rem', '2xl':'20rem'}}>
            <Footer />
        </Box>
      </motion.div>    
    </Flex>
  )
}

export default Layout
