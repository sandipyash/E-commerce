import React from 'react';
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {GrTwitter} from 'react-icons/gr';
import {BsLinkedin} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7r5b9hr', 'template_2ielbiq', form.current, 'A5K17WQL09KDucBbQ') 
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();  
  };

  return (
    <section id="contact">
      
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
           <article className='contact__option'>
           <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sandipadhikary7188@gmail.com</h5>
            <a href='mailto:sandipadhikary7188@gmail.com' target="_blank">Send a Message</a>
           </article>

           <article className='contact__option'>
           <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Sandip Adhikary</h5>
            <a href="https://www.linkedin.com/in/sandip-adhikary-03158b1aa"  target="_blank">Linkedin Profile</a>
           </article>

           <article className='contact__option'>
           <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+916289743240</h5>
            <a href="https://wa.me/+916289743240" target='_blank'>Whatsapp Me</a>
           </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Enter Your Email' required/>
          <textarea name='textarea' rows='7' placeholder='Enter Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;