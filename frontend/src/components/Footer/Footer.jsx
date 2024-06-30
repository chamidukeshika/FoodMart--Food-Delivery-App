import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='logo' src={assets.logo} alt="" style={{ width: "150px", marginTop:"-30px"}} />
                    <p>At Foodmart, we are dedicated to providing you with the freshest and highest quality ingredients. Your health and well-being are our top priorities. Thank you for choosing us!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2 className='h2'>Our Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2 className='h2'>Send a Message</h2>
                    <ul>
                        <li>+94-71-234567</li>
                        <li>contact@foodmart.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright {new Date().getFullYear()} © <b style={{fontWeight:"300"}}>Food Mart</b>. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
