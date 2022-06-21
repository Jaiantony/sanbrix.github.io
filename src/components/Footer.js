import React from 'react'
import FacebookLogo from '../images/svg/FacebookLogo'
import InstagramLogo from '../images/svg/InstagramLogo'
import LinkedinLogo from '../images/svg/LinkedinLogo'
import TwitterLogo from '../images/svg/TwitterLogo'
   
function Footer() {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
              <img src='/images/home/Sanbrix---Logo.png'/>
          </div>
          <div className='col-lg-4'>
            <h5>Sanbrix Square</h5>
            <p>No : 70,Third Floor, East power House road, Tatabad, 11th Street, Coimbatore – 641 012.</p>
            <p> <a href="tel:+91 97512 75000"> +91 97512 75000</a> /<a href="tel:+91 95009 04444"> +91 95009 04444</a></p>
            <p><a href="mailto:info@sanbrix.com"> info@sanbrix.com</a></p>
          </div>
          <div className='col-lg-4' style={{display:'flex',justifyContent:'space-evenly'}}>
            <div className='footer_links'>     
                  <a>Home</a>
                  <a>Projects</a>
                  <a>Testimonials</a>
                  <a>Media Center</a>
                  <a>Blogs</a>
                  <a>Contact Us</a>
            </div>
            <div className='footer_social'>  
            <a><FacebookLogo/></a>
            <a><InstagramLogo/></a>
            <a><LinkedinLogo/></a>
            <a><TwitterLogo/></a>          
            </div>
          </div>
        </div>
        <hr/>
        <p> © 2022, Sanbrix Properties | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer