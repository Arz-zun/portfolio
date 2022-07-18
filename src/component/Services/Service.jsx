import React from 'react'
import './Service.css'
import { BsCheck2All } from 'react-icons/bs'
const Service = () => {
  return (
    <section id='service'>

      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container service_container'>


          {/* ============  for   UI/UX============*/}

        <article className='service'>


          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Figma</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>PSD</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Adobe</p>
            </li>
            
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Many more</p>
            </li>

          </ul>
        </article>


        {/*=============Fro  web Development===========*/}
        <article className='service'>


          <div className='service_head'>
            <h3>Web Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>React JS</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Tailwind CSS</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Bootstrap</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Node JS</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Laravel</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Wordpress</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>CMS</p>
            </li>
          </ul>
        </article>

        {/*====================for   gr*/}
        <article className='service'>


          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>CEO Friendly</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Advertise</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Facbook Boost</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Content Writer</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Great communication skill</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service