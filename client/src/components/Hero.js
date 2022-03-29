import React, { useRef } from 'react'
import axios from 'axios'

const Hero = () => {

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
        <section id="home" className='hero'>
            <div className='content'>
                <h1 className='title'>Predicting the <span>Cyclone Intensity</span></h1>
                <p className='description'>Using CNN to predict the intensity of cyclone using INSAT-3D IR Images.</p>
                <div className='button-container'>
                    <a href="https://github.com/Chaitanya134/SCIE.ai"><button type="button" className='github-btn'>Github</button></a>
                    <button type='button' className='predict-btn' onClick={getFiles}>Predict</button>
                    <input ref={fileRef} type="file" style={{ display: "none" }} onChange={predict} />
                </div>
            </div>
            <div className='cyclone'>
                <img src='cyclone_ir3.png' alt='Cyclone' />
            </div>
        </section>
    )
}

export default Hero