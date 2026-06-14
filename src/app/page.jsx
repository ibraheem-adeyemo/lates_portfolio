'use client'

import Layout from '../layout/Layout'
import HomeComponent from '../components/Home/Home'
import WhereHaveWorked from '../components/where_have_worked/WhereHaveWorked'
import About from '../components/about/About'
import { Gallery } from '../components/gallery/Gallery'
import DownloadCV from '../components/DownloadCV/DownloadCV.jsx'
import CallToActionWithIllustration from '../components/Hero/Hero'
import ContactFormWithSocialButtons from '../components/contact/Contact'
import { AnimatedSection } from '../components/reusables/AnimatedSection'

const Home = () => {
  return (
    <Layout>
      <AnimatedSection>
        <HomeComponent />
      </AnimatedSection>

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <WhereHaveWorked />
      </AnimatedSection>

      <AnimatedSection>
       <Gallery />
      </AnimatedSection>

      <AnimatedSection>
       <DownloadCV />
      </AnimatedSection>

      <AnimatedSection>
        <CallToActionWithIllustration />
      </AnimatedSection>

      <AnimatedSection>
        <ContactFormWithSocialButtons />
      </AnimatedSection>
    </Layout>
  )
}

export default Home
