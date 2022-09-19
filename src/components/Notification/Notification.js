import React, { useState } from 'react'
import toast, { Toaster } from 'solid-toast';
import ContactForm from '../ContactForm/ContactForm';

const Notification = () => {
    const [width, setWidth] = useState(0);
    const [intervalID, setIntervalID] = useState(null);
    const notify = () => toast.success('Here is your toast.');
  
  return (
    <div>
    <ContactForm notify={notify} toast={Toaster} />
      
    </div>
  )
}

export default Notification
