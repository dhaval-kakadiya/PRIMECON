import React, { useEffect, useState } from "react";
import heroimg from "../image/hero-img.png";
import whoWeAre from "../image/who-we-are.png";
import service1 from "../image/service1.png";
import service2 from "../image/service2.png";
import service3 from "../image/service3.png";
import service4 from "../image/service4.png";
import service5 from "../image/service5.png";
import service6 from "../image/service6.png";
import res1 from "../image/res1.jpg";
import res2 from "../image/res2.jpg";
import res3 from "../image/res3.jpg";
import res4 from "../image/res4.jpg";
import res5 from "../image/res5.jpg";
import comm1 from "../image/comm1.jpg";
import comm2 from "../image/comm2.png";
import comm3 from "../image/comm3.jpg";
import comm4 from "../image/comm4.jpg";
import comm5 from "../image/comm5.jpg";
import comm6 from "../image/comm6.jpg";
import comm7 from "../image/comm7.jpg";
import comm8 from "../image/comm8.jpg";
import comm9 from "../image/comm9.jpg";
import project from "../image/project-img.png";
import project1 from "../image/project-img1.png";
import project2 from "../image/project-img2.png";
import Satisfaction from "../image/Satisfaction.png";
import Quality from "../image/Quality.png";
import Hat from "../image/Hat.png";
import { AddformAction } from "./Store/action/AddFormAction";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Toast } from "bootstrap";
import { ToastContainer, ToastHeader } from "react-bootstrap";
import { toast } from "react-toastify";
import Image from "../image/Primecon Logo.png";
import { useSelector } from "react-redux";

const LandingPage = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const [inputChangeValue, setinputChangeValue] = useState({
    name: "",
    email: "",
    number: "",
    pinCode: "",
    message: "",
    nofile: "",
  });

  const [error, seterror] = useState({
    name: false,
    email: false,
    number: false,
    pinCode: false,
    message: false,
    nofile: false,
  });

  console.log(props.AddformAction);

  // useEffect(() => {
  //   if (props.AddformReducer?.success) {
  //     toast.success("I'm never gonna toast you!");
  //   }
  // }, [props.AddformReducer]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setinputChangeValue((preve) => ({
      ...preve,
      [name]: value,
    }));
    console.log(inputChangeValue);

    //   switch (name) {
    //     case "name":
    //       if (inputChangeValue.name == "") {
    //         seterror((preve) => ({
    //           ...preve,
    //           name: "Name is Requiredddd",
    //         }));
    //       } else {
    //         seterror((preve) => ({
    //           ...preve,
    //           name: false,
    //         }));
    //       }
    //       break;
    //     case "email":
    //       if (inputChangeValue.email === "") {
    //         seterror((preve) => ({
    //           ...preve,
    //           email: "email is Required",
    //         }));
    //       } else {
    //         seterror((preve) => ({
    //           ...preve,
    //           email: false,
    //         }));
    //       }
    //       break;
    //     case "number":
    //       if (inputChangeValue.number === "") {
    //         seterror((preve) => ({
    //           ...preve,
    //           number: "number is Required",
    //         }));
    //       } else {
    //         seterror((preve) => ({
    //           ...preve,
    //           number: false,
    //         }));
    //       }
    //       break;
    //     case "pinCode":
    //       if (inputChangeValue.pinCode === "") {
    //         seterror((preve) => ({
    //           ...preve,
    //           pinCode: "pinCode is Required",
    //         }));
    //       } else {
    //         seterror((preve) => ({
    //           ...preve,
    //           pinCode: false,
    //         }));
    //       }
    //       break;
    //     case "message":
    //       if (inputChangeValue.message === "") {
    //         seterror((preve) => ({
    //           ...preve,
    //           message: "message is Required",
    //         }));
    //       } else {
    //         seterror((preve) => ({
    //           ...preve,
    //           message: false,
    //         }));
    //       }
    //       break;

    //     default:
    //       break;
    //   }
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    // if (inputChangeValue.name === "") {
    //   seterror((preve) => ({
    //     ...preve,
    //     name: "Name Is Required",
    //   }));
    // }
    // if (inputChangeValue.email === "") {
    //   seterror((preve) => ({
    //     ...preve,
    //     email: "Email Is Required",
    //   }));
    // }
    // if (inputChangeValue.number === "") {
    //   seterror((preve) => ({
    //     ...preve,
    //     number: "Number Is Required",
    //   }));
    // }
    // if (inputChangeValue.pinCode === "") {
    //   seterror((preve) => ({
    //     ...preve,
    //     pinCode: "Pincode Is Required",
    //   }));
    // }

    e.preventDefault();
    if (
      inputChangeValue.name !== "" &&
      inputChangeValue.email !== "" &&
      inputChangeValue.number !== "" &&
      inputChangeValue.pinCode !== ""
    ) {
      dispatch(
        AddformAction({
          name: inputChangeValue.name,
          email: inputChangeValue.email,
          number: inputChangeValue.number,
          pinCode: inputChangeValue.pinCode,
          message: inputChangeValue.message,
        })
      );
    }
  };

  return (
    <div>
          <a id="buttonnn"><i class="fa-solid fa-chevron-up"></i></a>

      <section class="prime_hero" id="home">
        <div class="container-fluid p-lg-0">
          <div class="d-lg-flex align-items-center">
            <div
              class="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div class="col-12 col-lg-9 m-auto text-center text-lg-start">
                <h1 class="headding_h">
                  <span>QUALITY</span> & <span>TIME</span> MATTERS !
                </h1>
                <p class="headding_text">
                  As a residential and commercial general contractor, we
                  specialize in managing construction projects from start to
                  finish. We have the expertise and experience to handle a wide
                  range of projects. Our team of professionals works closely
                  with clients to ensure that their vision for their project is
                  realized, while also staying within budget and on schedule.
                </p>
                <button class="buttons">
                  <a href="tel:+15195741080">
                    <i class="fa-solid fa-phone"></i> Contact Now
                  </a>
                </button>
              </div>
            </div>
            <div
              class="col-12 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={heroimg} alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section class="prime_weare" id="whoweare">
        <div class="container">
          <div class="flex-wrap d-flex align-items-center">
            <div
              class="col-12 col-lg-6 order-last order-lg-first"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img src={whoWeAre} alt="" width="100%" />
            </div>
            <div class="col-12 col-lg-6 text-center text-lg-start order-first order-lg-last">
              <div class="ms-0 ms-lg-5">
                <h2
                  class="headding_h"
                  data-aos="fade-left"
                  data-aos-duration="100"
                >
                  Who We Are
                </h2>
                <p
                  class="headding_text"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <span>Primecon Construction</span> is a single stop solution
                  for Residential and Commercial general contractor with a team
                  of experienced professionals
                </p>
                <button
                  class="buttons"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <a href="tel:+15195741080">Contact Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="prime_service" id="service">
        <div class="container">
          <div
            class="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 class="headding_h">Our Services</h2>
            <p class="headding_text">
              We Specialize In The Types Of Renovations That Add The Most Value
              To Your Home
            </p>
          </div>
          <div class="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
            <div class="col" data-aos="fade-up" data-aos-duration="1000">
              <div class="d-flex align-items-center align-items-md-start services_name">
                <h2 class="service_number">01</h2>
                <p class="service_text col-7">
                  Kitchen <br />
                  Renovations
                </p>
              </div>
              <img class="imgborder" src={service1} alt="" width="100%" />
            </div>
            <div class="col" data-aos="fade-up" data-aos-duration="1000">
              <div class="d-flex align-items-center align-items-md-start services_name">
                <h2 class="service_number">02</h2>
                <p class="service_text col-7">
                  Bathroom <br />
                  Renovations
                </p>
              </div>
              <img class="imgborder" src={service2} alt="" width="100%" />
            </div>
            <div class="col" data-aos="fade-up" data-aos-duration="1000">
              <div class="d-flex align-items-center align-items-md-start services_name">
                <h2 class="service_number">03</h2>
                <p class="service_text col-7">Basement</p>
              </div>
              <img class="imgborder" src={service3} alt="" width="100%" />
            </div>
            <div class="col" data-aos="fade-up" data-aos-duration="1000">
              <div class="d-flex align-items-center align-items-md-start services_name">
                <h2 class="service_number">04</h2>
                <p class="service_text col-7">Flooring</p>
              </div>
              <img class="imgborder" src={service4} alt="" width="100%" />
            </div>
            <div class="col" data-aos="fade-up" data-aos-duration="1000">
              <div class="d-flex align-items-center align-items-md-start services_name">
                <h2 class="service_number">05</h2>
                <p class="service_text col-7">
                  Decks & <br />
                  Fences
                </p>
              </div>
              <img class="imgborder" src={service5} alt="" width="100%" />
            </div>
            <div class="col" data-aos="fade-up" data-aos-duration="1000">
              <div class="d-flex align-items-center align-items-md-start services_name">
                <h2 class="service_number">06</h2>
                <p class="service_text col-7">
                  Electrical <br />
                  Services
                </p>
              </div>
              <img class="imgborder" src={service6} alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section class="prime_Project" id="projects">
        <div class="container">
          <div
            class="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 class="headding_h">Featured Projects</h2>
            <p class="headding_text">
              Take A Look At What Our Clients Have Achieved With Us
            </p>
          </div>
          <ul
            class="nav nav-pills mt-5 mb-3 justify-content-center  m-auto col-2"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation" data-aos="fade-right">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Residential
              </button>
            </li>
            <li class="nav-item" role="presentation" data-aos="fade-left">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Commercial
              </button>
            </li>
          </ul>
          <div class="tab-content text-center" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div class="row row-cols-2 row-cols-md-3 g-4 justify-content-center harsh">
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res1} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res2} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res3} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res4} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res5} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res1} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res2} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res3} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res4} alt="" width="100%" />
                </div>
                <div class="col d-block d-md-none" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={res5} alt="" width="100%" />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div class="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm1} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm2} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm3} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm4} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm5} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm6} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm7} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm8} alt="" width="100%" />
                </div>
                <div class="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm9} alt="" width="100%" />
                </div>
                <div class="col d-block d-md-none" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img class="proimgborder" src={comm1} alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="prime_choosus" id="whychooseus">
        <div class="container">
          <div
            class="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 class="headding_h">Why Choose Us ?</h2>
            <p class="headding_text">
              Experience the difference of a team committed to quality and
              precision
            </p>
          </div>
          <div class="d-md-flex justify-content-around col-12 col-md-10 p-0 m-auto choosus_cards">
            <div
              class="text-center mb-3 mb-md-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={Hat} alt="" width="30%" />

              <h3 class="choos_hedding">Experience & Expertise</h3>
              <p class="choos_text">
                We use our experience and expertise to deliver high-quality work
                that meets our clients' needs and exceeds their expectations.
              </p>
            </div>
            <div
              class="text-center mb-3 mb-md-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={Quality} alt="" width="30%" />

              <h3 class="choos_hedding">Quality and Reliability</h3>
              <p class="choos_text">
                We prioritize quality and reliability by utilizing the best
                materials and techniques for dependable and lasting results.
              </p>
            </div>
            <div
              class="text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={Satisfaction} alt="" width="30%" />

              <h3 class="choos_hedding">Customer Satisfaction</h3>
              <p class="choos_text">
                We prioritize customer satisfaction by listening to our clients'
                needs and delivering exceptional results.
              </p>
            </div>
          </div>
          <div
            class="d-lg-flex justify-content-around gap-3 col-12 col-md-10 m-auto form"
            id="contactus"
          >
            <div class="col-12 col-lg-6 text-center text-lg-start">
              <h3 class="form_first_headding">HAVE A PROJECT ?</h3>
              <h2 class="headding_h">Let’s Work Together </h2>
              <p class="headding_text pe-5">
                At Prime-Con, we understand that every project is unique, and we
                tailor our approach to meet our clients' specific needs. We work
                closely with our clients to develop a project plan that takes
                into account their budget, timeline, and desired outcome. By
                working together and leveraging our expertise, we can ensure
                that our clients' projects are successful and exceed their
                expectations.
              </p>
            </div>
            <div class="col-12 col-lg-6">
              <h2 class="form_headding text-center text-lg-start">
                Get In Touch
              </h2>
              <form
                className="row g-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="col-md-6">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={onInputChange}
                  />
                  {error.name && (
                    <>
                      <span className="text-danger">{error.name}</span>
                    </>
                  )}
                </div>

                <div className="col-md-6">
                  <input
                    name="number"
                    type="number"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Phone"
                    onChange={onInputChange}
                  />

                  {error.number && (
                    <>
                      <span className="text-danger">{error.number}</span>
                    </>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email id"
                    onChange={onInputChange}
                  />
                  {error.email && (
                    <>
                      <span className="text-danger">{error.email}</span>
                    </>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    name="pinCode"
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Pin Code"
                    onChange={onInputChange}
                  />
                  {error.pinCode && (
                    <>
                      <span className="text-danger">{error.pinCode}</span>
                    </>
                  )}
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Message"
                    id="inputPassword4"
                    onChange={onInputChange}
                  ></textarea>
                  {error.message && (
                    <>
                      <span className="text-danger">{error.message}</span>
                    </>
                  )}
                </div>
                <div className="col-md-6">
                  <input 
                  name="nofile"
                  class="form-control form-control-lg file_choose_fild" 
                  id="formFileLg"
                  onChange={onInputChange}
                  type="file" />
                  {error.message && (
                    <>
                      <span className="text-danger">{error.nofile}</span>
                    </>
                  )}
                </div>    
                <div className="col-12">
                  <button
                    className="buttons"
                    type="submit"
                    onClick={inputSubmit}
                  >
                    <a href="">Submit</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="prime_footer">
        <div class="container text-center text-lg-start">
          <div class="flex-wrap d-flex">
            <div class="col-12 col-lg-4">
              <img src={Image} alt="" width="50%" />

              <ul>
                <li>
                  <a href="tel:+15195741080">
                    <i class="fa-solid fa-phone p-2"></i> +1 519 574 1080
                  </a>
                </li>
                <li>
                  <a href="mailto:Contact@primecon.ca">
                    <i class="fa-solid fa-envelope p-2"></i> Contact@primecon.ca
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/3vNcTiWrZDtk2jZt5">
                    <i class="fa-solid fa-location-dot p-2"></i> Etobicoke,
                    Toronto, Ontario.
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg-4">
              <h2 class="footer_headding">Navigations</h2>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#whoweare">Who Are We</a>
                </li>
                <li>
                  <a href="#service">Our Services</a>
                </li>
                <li>
                  <a href="#projects">Featured Projects</a>
                </li>
                <li>
                  <a href="#whychooseus">Why Choose Us?</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg-4">
              <h2 class="footer_headding">Follow Us</h2>
              <ul>
                {/* <li>
                  <a href="tel:+15195741080">
                    <i class="fa-brands fa-facebook-f p-2"></i> Facebook
                  </a>
                </li> */}
                <li>
                  <a href="mailto:Contact@primecon.ca">
                    <i class="fa-brands fa-instagram p-2"></i>Instagram
                  </a>
                </li>
                {/* <li>
                  <a href="https://goo.gl/maps/3vNcTiWrZDtk2jZt5">
                    <i class="fa-brands fa-twitter p-2"></i> Twitter
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div class="text-center copyright">
            <p>
              © Copyright 2023{" "}
              <a href="https://www.primecon.ca/" target="_blank">
                Primecon
              </a>{" "}
              All Rights Reserved
            </p>
          </div> */}
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  AddformReducer: state.AddformReducer,
});
const mapDispatchToProps = (dispatch) => ({
  AddformAction: (details) => dispatch(AddformAction(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
