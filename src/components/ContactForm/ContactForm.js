import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactAPP_SERVICE = process.env.REACT_APP_serviceID;
const ReactAPP_TEMPLATEID = process.env.REACT_APP_templateID;
const ReactAPP_PUBLICKEY = process.env.REACT_APP_PUBLICKEY;

const ContactForm = () => {
  const [note,setNote] = useState(true)
  const form = useRef();

  const notify = () => {note ? toast.success("Email Sent!") : toast.error("Error while sending the Email")};


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${ReactAPP_SERVICE}`,
        `${ReactAPP_TEMPLATEID}`,
        form.current,
        `${ReactAPP_PUBLICKEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
         setNote(!note)
        },
        (error) => {
          console.log(error.text);
          setNote(!note)
         }
      );
  };
  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <label >Your Name</label>
        <input type='text' name='user-name'></input>
        <label>Email</label>
        <input type='email' name='user-email'></input>
        <label>Object</label>
        <input type='text' name='object'></input>
        <label>Message</label>
        <textarea
          rows='6'
          placeholder='Type your message here'
          name='message'
        />
        <button className='btn' onClick={notify}>Submit</button>
        <ToastContainer /> 
      
      </form>
       
    </div>
  );
};

export default ContactForm;
