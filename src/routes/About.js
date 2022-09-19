import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Slide2 from '../components/Slide2/Slide2'
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
       <Navbar />
      <Slide2 heading='ABOUT.' text="I'm a friendly FullStack Web Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
