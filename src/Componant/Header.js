import React from 'react'
import Image from '../image/Primecon Logo.png'
import '../Componant/Custome-Css/Custom.css'

const Header = () => {

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

<nav class="navbar navbar-expand-lg" id="nav"> 
        <div class="container">
          <a class="navbar-brand" href="#"> <img src={Image} alt="" width="60%"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto gap-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">Home  </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#service">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              {/* <!-- <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li> --> */}
              <li class="nav-item text-center">
                <button class="navbar_btn"><a  href="#contactus">REQUEST A QUOTE</a></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   </>
  )
}

export default Header