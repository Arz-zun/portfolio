import React from 'react'
import './Testimonial.css'
import IMAGE from '../../assets/Balen.jpeg'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Navigation } from 'swiper';


const data=[
  {
    id: 10,
    image:IMAGE,
    name: "Balen Shah",
    review:"Excelent"
  },
  {
    id: 20,
    image:IMAGE,
    name: "Balen Shah",
    review:"Excelent"
  },
  {
    id: 30,
    image:IMAGE,
    name: "Balen Shah",
    review:"Excelent"
  },
  {
    id: 40,
    image:IMAGE,
    name: "Balen Shah",
    review:"Excelent"
  },
  {
    id: 50,
    image:IMAGE,
    name: "Balen Shah",
    review:"Excelent"
  },
  {
    id: 60,
    image:IMAGE,
    name: "Balen Shah",
    review:"Excelent"
  }
]




const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
    <h2>Testimoinals</h2>
    <Swiper className="container testimonial_container"  
    modules={[Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
     >
    {
      data.map(({id,image,name,review})=>{
        return(
        <SwiperSlide key={id} className='testimonial'>
        <div className="client_avatar">
          <img src={image} alt="Balen" />
        </div>
          <h5 className='client_name'>{name}</h5>
        <small className='client_review'>{review}</small>
      </SwiperSlide>)
      })
    }

    </Swiper>

  <h5 className='testimonial_slide'>&laquo; slide for more &raquo;</h5>

    </section>
  )
}

export default Testimonial