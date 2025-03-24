import React, { useEffect, useRef } from 'react'
import Layout from '../layout/Layout'
import HomeComponent from '../components/Home/Home'
import { AnimatedSection } from './Home'
import { ProfileComponent } from '../components/about/Profile'


const Profile = () => {
  
  return (
    <Layout>
      <AnimatedSection>
        <ProfileComponent />
      </AnimatedSection>
    </Layout>
  )
}

export default Profile
