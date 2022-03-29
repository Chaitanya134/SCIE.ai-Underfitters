import React, { useRef } from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import axios from 'axios'

const Footer = () => {

    const fileRef = useRef();

    function getFiles() {
        fileRef.current.click();
    }

    async function predict() {

        const formData = new FormData();
        formData.append('image', fileRef.current.files[0]);

        const url = process.env.REACT_APP_API_URL + '/predict';
        console.log(url)
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.data.message === "1.0") {
            alert("There is a cyclone in the image");
        } else {
            alert("There is no cyclone in the image");
        }
    }

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
                    <button type='button' className='predict-btn' onClick={getFiles}>Predict</button>
                    <input ref={fileRef} type={"file"} style={{ display: "none" }} onChange={predict} />

                </div>
            </div>
            <span className='copyright details'>&copy; 2022 SCIE.ai</span>
        </footer>
    )
}

export default Footer