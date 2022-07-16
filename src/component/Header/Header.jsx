import React from 'react'
import CTA from './CTA'
import ME from '../../assets/arjun1.jpg'
import Social from './Social'
import './Header.css'

const Header = () => {
  return (
    <>
      <header id='home'>
        <div className="container header_container"> 
          <h5>Hello I am </h5>
          <h1>Arjun Chaudhary</h1>
          <h3 className="text-light">React.JS Developer</h3>
          <CTA />
          <Social/>
          <div >
            <img src={ME} alt="Arjun" className="me"></img>
          </div>
<a href='#contact' className='scroll_down'>scroll down &rarr;</a>

        </div>

      </header>



    </>
  )
}

export default Header