import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/image1.jpg'

const data=[

{
  id:1,
  image: IMG,
  title:'Web app',
  github:'https://github.com'
},   
{
  id:2,
  image: IMG,
  title:'Web',
  github:'https://github.com'
},

{
  id:3,
  image: IMG,
  title:'Web app',
  github:'https://github.com'
},

{
  id:4,
  image: IMG,
  title:'Web app',
  github:'https://github.com'
},
{
  id:5,
  image: IMG,
  title:'Web app',
  github:'https://github.com'
},

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <a href={github} target="_blank " className='btn'>Github</a>
          </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio