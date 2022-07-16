import React from 'react'
import About from './component/About/About'
import Nav from './component/Nav/Nav'
import Header from './component/Header/Header'
import Experience from './component/Experience/Experience'
import Service from './component/Services/Service'
import Portfolio from './component/Portfolio/Portfolio'
// import Testimonial from './component/Testimonial/Testimonial'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'



const App = () => {
  return (
    <>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />

    </>
  )
}

export default App