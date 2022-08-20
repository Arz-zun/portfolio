import React from 'react'
import './Contact.css'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { SiMessenger } from 'react-icons/si'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f809tsl', 'template_zq9425q', form.current, 'LiXdBFYPlSZ5BaCT9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
    };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMailOpen className='contact_icon' />
            <h4>Email</h4>
            <h5>arjunchaudhary757@gmail.com</h5>
            <a href="mailto:arjunchaudhary757@gmail.com">send mail</a>
          </article>
          <article className='contact_option'>
            <SiMessenger className='contact_icon' />
            <h4>Messenger</h4>
            <h5>Arjun Chaudhary</h5>
            <a href="https://m.me/arjunchaudhary2052">send message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineWhatsApp className='contact_icon' />
            <h4>whats App / Viber</h4>
            <h5>+977 980600000</h5>
            <a href="https://api.whatsapp.com/send?pone+9779806871568" >send message</a>
          </article>
        </div>
        {/* end 0f contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" id="" cols="30" rows="10" required placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact