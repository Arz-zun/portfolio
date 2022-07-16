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
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
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
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
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
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>
            <li>
              <BsCheck2All className='service_list_icon' />
              <p>Arjun</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service