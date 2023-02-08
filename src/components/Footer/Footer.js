import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='mainFooter'>

            <div id='footer'>
                <div>
                    <h3>QUICK LINKS</h3>
                    <p>About</p>
                    <p>Privacy Popcy</p>
                    <p>Terms and Condition</p>
                    <p>Post Your Business</p>
                </div>
                <div>
                    <h3>CATEGORIES</h3>
                    <p>Top Categories</p>
                    <p>Popular Spaa & Salon</p>
                    <p>Best Deals</p>
                    <p>Latest Submission</p>
                </div>
                <div>
                    <h3>CONTACTS</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Connaught Place, New Delhi, India</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <span>+91 9999-999-999</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-envelope"></i>
                        <span>info@spaalon.com</span>
                    </p>

                </div>
                <div>
                    <h3>KEEP IN TOUCH</h3>
                    <p>
                        <input placeholder='Your Email' />
                        <button> <i className="fa-solid fa-greater-than"></i> </button>
                    </p>
                    <h3>Follow Us</h3>
                    <div>
                        <img src='https://spaalon.com/images/twitter_icon.svg' />
                        <img src='https://spaalon.com/images/facebook_icon.svg' />
                        <img src='https://spaalon.com/images/instagram_icon.svg' />
                        <img src='https://spaalon.com/images/youtube_icon.svg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer