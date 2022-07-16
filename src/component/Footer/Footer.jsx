import React from 'react'
import './Footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>Arjun</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com"><FiFacebook/></a>
        <a href="https://www.instagram.com"><BsInstagram/></a>
        <a href="https://www.github.com"><AiFillGithub/></a>  
      </div>
      <div className="footer_copyright">
        <small>&copy; Arjun Chaudhary. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer