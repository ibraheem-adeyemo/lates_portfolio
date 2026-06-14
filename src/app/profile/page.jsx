'use client'

import Layout from '../../layout/Layout'
import { AnimatedSection } from '../../components/reusables/AnimatedSection'
import { ProfileComponent } from '../../components/about/Profile'

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
