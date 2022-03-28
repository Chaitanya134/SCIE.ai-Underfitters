import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer id="contact">
            <div>
                <div className="contact">
                    <h3>Contact Us on</h3>
                    <div>
                        <span>Email: </span><span className='details'>chaitanyagiri2@gmail.com</span>
                    </div>
                    <div>
                        <span>Phone Number: </span><span className='details'>768685358</span>
                    </div>
                    <div className="socials">
                        <div className="social">
                            <a href='https://www.github.com/Chaitanya134'><div className="icon"><BsGithub /></div></a>
                        </div>
                        <div className="social">
                            <a href='https://www.github.com/Chaitanya134'><div className="icon"><BsLinkedin /></div></a>
                        </div>
                        <div className="social">
                            <a href='https://www.github.com/Chaitanya134'><div className="icon"><BsTwitter /></div></a>
                        </div>
                    </div>
                </div>
                <div className="predict">
                    <button type='button' className='predict-btn'>Predict</button>
                </div>
            </div>
            <span className='copyright details'>&copy; 2022 SCIE.ai</span>
        </footer>
    )
}

export default Footer