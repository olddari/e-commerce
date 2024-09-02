import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="./images/logo.png" alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis error omnis totam odio obcaecati earum rem nemo praesentium, exercitationem quasi autem voluptate. Doloremque dolorum laborum exercitationem maiores. Exercitationem, in quos!</p>
          <div className="footer-social-icons">
            <img src="./images/twitter.png" alt="" />
            <img src="./images/instagram.png" alt="" />
            <img src="./images/linkedin.png" alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IM TOUCH</h2>
          <ul>
            <li>+90 (532) 465 8519</li>
            <li>contaxt@bravebird.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 c BraveBird.com - All Right Reversed.</p>
    </div>
  )
}

export default Footer
