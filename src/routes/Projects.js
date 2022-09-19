import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Slide2 from '../components/Slide2/Slide2'
import Work from '../components/Work/Work'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Slide2 heading="PROJECTS." text='Some of my recent works'  />
      <Work />
      <Footer />
    </div>
  )
}

export default Projects
