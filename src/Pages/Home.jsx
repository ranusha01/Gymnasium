import React from 'react'

import Hero from '../Components/Hero'

import Services from '../Components/Services'
import Services2 from '../Components/Services2'
import Services3 from '../Components/Services3'



import ContactUs from '../Components/ContactUs'
const Home = () => {
  return (
    <div>
        {/* hero section */}
       
        <Hero />
      
        <Services />
        <Services2 />
        <Services3 />
      
      
        <ContactUs />
        
    </div>
  )
}

export default Home