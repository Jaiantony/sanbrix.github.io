import React from 'react'
import NavButton from '../images/svg/navButton'
import NavLogo from '../images/svg/NavLogo'
import $ from 'jquery';
function Header() {
  function toggleNavBar(){
    console.log('clicked')
    $('#nav_list').toggleClass('nav_list_active')
  }
  return (  
    <header>
      <div className='nav_button'  onClick={toggleNavBar}>
        <NavButton/>
      </div>
      <div className='nav_logo'>
        <img src='/images/home/nav_logo.png' alt="logo"/>
      
        {/* <NavLogo/> */}
      </div>
      <div id='nav_list' className='nav_list'>
        <a href='#!'>Home</a>
        <a href='#!'>Projects</a>
        <a href='#!'>Testimonials</a>
        <a href='#!'>Media Center</a>
        <a href='#!'>Blogs</a>
        <a href='#!'>Contact Us</a>
      </div>
    </header>
  )
}

export default Header