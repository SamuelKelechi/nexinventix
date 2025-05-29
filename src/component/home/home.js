import React from 'react'
import HeroSection from './heroSection/heroSection';
import Mission from './mission/mission';
import Features from './features/features';
import Founded from './founded/founded';
import Services from './services/services'
import OurTechnologies from './OurTechnologies/OurTechnologies';
import Partners from './partners/partners';

const home = () => {
  return (
    <>
        <HeroSection />
        <Mission />
        <Features />
        <Founded />
        <Services />
        <OurTechnologies />
        <Partners />
    </>
  )
}

export default home