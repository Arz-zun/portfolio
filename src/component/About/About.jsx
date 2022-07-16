import React from 'react'
import './About.css'
import Me from '../../assets/arjun.jpg'
import { FiAward } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
const About = () => {
  return (
    <>
      <section id='about'>

        <h5>Get To Know</h5>
        <h2>About Me </h2>
        <div className="container about_container">
          <div className="about_me">
            <img src={Me} alt='Arjun' className="about_image"></img>
            <img src={Me} alt='Arjun' className='about_image1'></img>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FiAward className='about_icon' />
                <h5>Experience</h5>
                <small>1+ year Working</small>
              </article>
              <article className="about_card">
                <AiOutlineUserAdd className='about_icon' />
                <h5>Clients</h5>
                <small>200+ In Worldwide</small>
              </article>
              <article className="about_card">
                <MdWorkOutline className='about_icon' />
                <h5>Projects</h5>
                <small>20+ Projects Are Done</small>
              </article>
            </div>
            <p>Intermediate React Developer with experience. Proficient with React.
              Used problem-solving attitude to enhance application performance. Created
              data visualization tools and integrated designs. Increased speed of product
              lifecycle and 100% of the time delivered projects within deadline. Seeking to join your
              renown company with experience in React.JS
              to impress existing clients and obtain new one.
            </p>
            <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About