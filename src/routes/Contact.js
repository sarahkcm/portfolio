import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Slide2 from '../components/Slide2/Slide2'
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Slide2 heading='CONTACT.' text="You can contact me for more information " />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
