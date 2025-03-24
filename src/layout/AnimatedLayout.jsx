import React, { useEffect, useRef } from 'react'
import Layout from './Layout'
import HomeComponent from '../components/Home/Home'
import WhereHaveWorked from '../components/where_have_worked/WhereHaveWorked'
import { useDispatch } from 'react-redux'
import { setInitialData } from '../store/storeSlice'
import About from '../components/about/About'
import { motion, useInView } from 'framer-motion'
import { Gallery, ProjectGallery } from '../components/gallery/Gallery'
import CallToActionWithIllustration from '../components/Hero/Hero'
import ContactFormWithSocialButtons from '../components/contact/Contact'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' }
//   })
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const AnimatedSection = ({ children, delay }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' }) // Trigger when section is in view
  
    return (
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: delay }}
        // custom={0}
      >
        {children}
      </motion.div>
    )
  }

export const AnimatedLayout = ({children}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setInitialData())      
  }, [])

  return (
    <Layout>
      {children}
    </Layout>
  )
}

