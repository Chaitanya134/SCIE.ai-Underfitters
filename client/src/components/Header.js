import React, { useEffect, useRef } from 'react'
import axios from 'axios';

const Header = () => {

  const navRef = useRef();
  const fileRef = useRef();

  function smoothScroll() {
    const target = this.dataset.target;
    const section = document.getElementById(target);

    section.scrollIntoView({
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    navRef.current.querySelectorAll("li").forEach(li => {
      li.onclick = smoothScroll;
    });
    document.getElementById("logo").onclick = smoothScroll;
  }, [])

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
    <header>
      <nav ref={navRef} className='navbar'>
        <h1 id="logo" className='logo' data-target="home">SCIE.ai</h1>
        <ul>
          <li data-target="home">Home</li>
          <li data-target="about">About</li>
          <li data-target="contact">Contact</li>
          <li className='predict-btn' onClick={getFiles}>Predict</li>
          <input ref={fileRef} type={"file"} style={{ display: "none" }} onChange={predict} />
        </ul>
      </nav>
    </header>
  )
}

export default Header