import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Slide  from '../components/Slide/Slide.js'
import Footer from '../components/Footer/Footer.js'
import Resume from '../components/Resume/Resume.js'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <Resume />
      <Footer/>
    </div>
  )
}

export default Home
