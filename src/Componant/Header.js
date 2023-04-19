import React, { useEffect, useState } from 'react'
import Image from '../image/Primecon Logo.png'
import '../Componant/Custome-Css/Custom.css'
// import '../js/script.js'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const Header = () => {

  const scrollDirection = useScrollDirection();

  // useEffect(() => {
  //   AOS.init();
  // }, [])

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg" id="nav"> 
        <div className="container">
          <a className="navbar-brand" href="#">
          <img src={Image} alt="" width="60%"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item text-center">
                <button className="navbar_btn"><a className="nav-link" href="#contactus">REQUEST A QUOTE</a></button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* <nav className="navbar navbar-expand-lg" id="nav"> */}
      <nav className={`sticky ${scrollDirection === "down" ? "hide" : "show"} navbar navbar-expand-lg`} id="nav">
        <div className="container">
          <a className="navbar-brand" href="#"> <img src={Image} alt="" width="60%" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              {/* <!-- <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li> --> */}
              <li className="nav-item text-center">
                <button className="navbar_btn"><a href="#contactus">REQUEST A QUOTE</a></button>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Header