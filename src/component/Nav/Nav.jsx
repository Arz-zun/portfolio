import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookReader} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessengerLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#home');
  const activenavbar=()=>
  {
    setActiveNav('#about')
  }
  return (
    <>
    <nav >
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav==='#home'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={activenavbar} className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>
      <a href="#experience"  onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''} ><BiBookReader/></a>
      <a href="#service"  onClick={()=>setActiveNav('#service')} className={activeNav==='#service'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><RiMessengerLine/></a>
      
    </nav>
    
    
    </>
  )
}

export default Nav