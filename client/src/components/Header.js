import React, { useEffect, useRef } from 'react'

const Header = () => {

  const navRef = useRef();

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

  return (
    <header>
      <nav ref={navRef} className='navbar'>
        <h1 id="logo" className='logo' data-target="home">SCIE.ai</h1>
        <ul>
          <li data-target="home">Home</li>
          <li data-target="about">About</li>
          <li data-target="contact">Contact</li>
          <li className='predict-btn'>Predict</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header