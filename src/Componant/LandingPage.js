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
import { AddformAction, fileUpload } from "./Store/action/AddFormAction";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Toast } from "bootstrap";
import { Form, ToastHeader } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Image from "../image/Primecon Logo.png";
import { useSelector } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [checkButton, setCheckButton] = useState('Submit');
  // const [checkFile, setCheckFile] = useState()
  // const [buttonDisable, setButtonDisable] = useState(true);
  const [inputChangeValue, setinputChangeValue] = useState({
    name: "",
    email: "",
    phone: "",
    pinCode: "",
    message: "",
    files: []
  });

  const [error, setError] = useState({})
  // const [error, seterror] = useState({
  //   name: false,
  //   email: false,
  //   phone: false,
  //   pinCode: false,
  //   message: false,
  //   nofile: false,
  // });

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const closeButtonJquery = () => {
    $('#button-reset').click(function (e) {
      var $el = $('#file-to-upload');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
    });
  }

  useEffect(() => {
    closeButtonJquery()
  })

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // console.log(props.AddformAction);

  // useEffect(() => {
  //   if (props.AddformReducer?.success) {
  //     toast.success("I'm never gonna toast you!");
  //   }
  // }, [props.AddformReducer]);

  const onInputChange = (e) => {
    setinputChangeValue({
      ...inputChangeValue,
      [e.target.name]: e.target.value,
    })
    // setinputChangeValue((preve) => (
    //   console.log(preve)
    // ))
  };

  const onFileUpload = (e) => {

    // dispatch(fileUpload(e.target.files,inputChangeValue,setinputChangeValue))

    const formData = new FormData();

    for (let i = 0; i < e.target.files.length; i++) {
      formData.append('image', e.target.files[i])
    }

    axios.post("https://primecon-backend.onrender.com/v1/user/upload-file", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log('129', res)
          // setCheckFile(res.status)
          // setButtonDisable(false)
          setinputChangeValue({
            ...inputChangeValue,
            files: res.data.data
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const isValidate = () => {
    let err = {}

    if (inputChangeValue.name === '') {
      err.name = "Name is Required"
    }

    if (inputChangeValue.phone === '') {
      err.phone = "phone is Required"
    }
    else {
      if (inputChangeValue.phone.length > 10 || inputChangeValue.phone.length < 10) {
        err.phone = "Please Enter Valid phone"
      }
    }

    if (inputChangeValue.email === "") {
      err.email = "Email is Required"
    } else {
      let regex = /^\w+([\.-]?\w+)*@gmail.com/
      if (!regex.test(inputChangeValue.email)) {
        err.email = "Please Enter Valid Email"
      }
    }

    setError({ ...err })

    return Object.keys(err).length < 1
  }

  const resetForm = () => {
    setinputChangeValue({
      name: "",
      email: "",
      phone: "",
      pinCode: "",
      message: "",
      files: [],
    })
  }

  const inputSubmit = (e) => {

    e.preventDefault();

    let isValid = isValidate()
    if (isValid) {
      setCheckButton("Submitting...");
      axios.post("https://primecon-backend.onrender.com/v1/user/add", inputChangeValue)
        .then((res) => {
          console.log("191", res);
          toast.success("Successfully Submmited !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // setTimeout(() => {
          setCheckButton("Submit");
          // }, 3000);
          resetForm();
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        console.log("b");
      }


    // if (
    //   inputChangeValue.name !== "" &&
    //   inputChangeValue.email !== "" &&
    //   inputChangeValue.phone !== "" &&
    //   inputChangeValue.pinCode !== ""
    // ) {
    //   console.log('181', inputChangeValue)
    // dispatch(
    //   AddformAction({
    //     name: inputChangeValue.name,
    //     email: inputChangeValue.email,
    //     phone: inputChangeValue.phone,
    //     pinCode: inputChangeValue.pinCode,
    //     message: inputChangeValue.message,
    //   })
    // );
    // }
  };

  return (
    <div>
      {/* <span id="buttonnn"><i className="text-dark fa-solid fa-chevron-up"></i></span> */}
      <ToastContainer />
      <section className="prime_hero" id="home">
        <div className="container-fluid p-lg-0">
          <div className="d-lg-flex align-items-center">
            <div
              className="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="col-12 col-lg-9 m-auto text-center text-lg-start">
                <h1 className="headding_h">
                  <span>QUALITY</span> & <span>TIME</span> MATTERS !
                </h1>
                <p className="headding_text">
                  As a residential and commercial general contractor, we
                  specialize in managing construction projects from start to
                  finish. We have the expertise and experience to handle a wide
                  range of projects. Our team of professionals works closely
                  with clients to ensure that their vision for their project is
                  realized, while also staying within budget and on schedule.
                </p>
                <button className="buttons">
                  <a href="tel:+15195741080">
                    <i className="fa-solid fa-phone"></i> Contact Now
                  </a>
                </button>
              </div>
            </div>
            <div
              className="col-12 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={heroimg} alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section className="prime_weare" id="whoweare">
        <div className="container">

          {showTopBtn && (
            <span id="buttonnn" onClick={goToTop}
              data-aos="fade-left"
              data-aos-duration="5000">
              <i className="fw-bold fa-solid fa-chevron-up"></i>
            </span>
          )}

          <div className="flex-wrap d-flex align-items-center">
            <div
              className="col-12 col-lg-6 order-last order-lg-first"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img src={whoWeAre} alt="" width="100%" />
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start order-first order-lg-last">
              <div className="ms-0 ms-lg-5">
                <h2
                  className="headding_h"
                  data-aos="fade-left"
                  data-aos-duration="100"
                >
                  Who We Are
                </h2>
                <p
                  className="headding_text"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <span>Primecon Construction</span> is a single stop solution
                  for Residential and Commercial general contractor with a team
                  of experienced professionals
                </p>
                <button
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="buttons"
                >
                  <a href="tel:+15195741080">Contact Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prime_service" id="service">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 className="headding_h">Our Services</h2>
            <p className="headding_text">
              We Specialize In The Types Of Renovations That Add The Most Value
              To Your Home
            </p>
          </div>
          <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="d-flex align-items-center align-items-md-start services_name">
                <h2 className="service_number">01</h2>
                <p className="service_text col-7">
                  Kitchen <br />
                  Renovations
                </p>
              </div>
              <img className="imgborder" src={service1} alt="" width="100%" />
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="d-flex align-items-center align-items-md-start services_name">
                <h2 className="service_number">02</h2>
                <p className="service_text col-7">
                  Bathroom <br />
                  Renovations
                </p>
              </div>
              <img className="imgborder" src={service2} alt="" width="100%" />
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="d-flex align-items-center align-items-md-start services_name">
                <h2 className="service_number">03</h2>
                <p className="service_text col-7">Basement</p>
              </div>
              <img className="imgborder" src={service3} alt="" width="100%" />
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="d-flex align-items-center align-items-md-start services_name">
                <h2 className="service_number">04</h2>
                <p className="service_text col-7">Flooring</p>
              </div>
              <img className="imgborder" src={service4} alt="" width="100%" />
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="d-flex align-items-center align-items-md-start services_name">
                <h2 className="service_number">05</h2>
                <p className="service_text col-7">
                  Decks & <br />
                  Fences
                </p>
              </div>
              <img className="imgborder" src={service5} alt="" width="100%" />
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="d-flex align-items-center align-items-md-start services_name">
                <h2 className="service_number">06</h2>
                <p className="service_text col-7">
                  Electrical <br />
                  Services
                </p>
              </div>
              <img className="imgborder" src={service6} alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section className="prime_Project" id="projects">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 className="headding_h">Featured Projects</h2>
            <p className="headding_text">
              Take A Look At What Our Clients Have Achieved With Us
            </p>
          </div>
          <ul
            className="nav nav-pills mt-5 mb-3 justify-content-center  m-auto col-2"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation" data-aos="fade-right">
              <button
                className="nav-link active frist_tab"
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
            <li className="nav-item" role="presentation" data-aos="fade-left">
              <button
                className="nav-link second_tab"
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
          <div className="tab-content text-center" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center harsh">
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res1} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res2} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res3} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res4} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res5} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res1} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res2} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res3} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res4} alt="" width="100%" />
                </div>
                <div className="col d-block d-md-none" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={res5} alt="" width="100%" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm1} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm2} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm3} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm4} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm5} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm6} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm7} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm8} alt="" width="100%" />
                </div>
                <div className="col" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm9} alt="" width="100%" />
                </div>
                <div className="col d-block d-md-none" data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  <img className="proimgborder" src={comm1} alt="" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prime_choosus" id="whychooseus">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 className="headding_h">Why Choose Us ?</h2>
            <p className="headding_text">
              Experience the difference of a team committed to quality and
              precision
            </p>
          </div>
          <div className="d-md-flex justify-content-around col-12 col-md-10 p-0 m-auto choosus_cards">
            <div
              className="text-center mb-3 mb-md-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={Hat} alt="" width="30%" />

              <h3 className="choos_hedding">Experience & Expertise</h3>
              <p className="choos_text">
                We use our experience and expertise to deliver high-quality work
                that meets our clients' needs and exceeds their expectations.
              </p>
            </div>
            <div
              className="text-center mb-3 mb-md-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={Quality} alt="" width="30%" />

              <h3 className="choos_hedding">Quality and Reliability</h3>
              <p className="choos_text">
                We prioritize quality and reliability by utilizing the best
                materials and techniques for dependable and lasting results.
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={Satisfaction} alt="" width="30%" />

              <h3 className="choos_hedding">Customer Satisfaction</h3>
              <p className="choos_text">
                We prioritize customer satisfaction by listening to our clients'
                needs and delivering exceptional results.
              </p>
            </div>
          </div>
          <div
            className="d-lg-flex justify-content-around gap-3 col-12 col-md-10 m-auto form"
            id="contactus"
          >
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <h3 className="form_first_headding">HAVE A PROJECT ?</h3>
              <h2 className="headding_h">Let’s Work Together </h2>
              <p className="headding_text p-0 pe-lg-5">
                At Prime-Con, we understand that every project is unique, and we
                tailor our approach to meet our clients' specific needs. We work
                closely with our clients to develop a project plan that takes
                into account their budget, timeline, and desired outcome. By
                working together and leveraging our expertise, we can ensure
                that our clients' projects are successful and exceed their
                expectations.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="form_headding text-center text-lg-start">
                Get In Touch
              </h2>
              <form
                className="row g-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
                onSubmit={inputSubmit}
              >
                <div className="col-md-6">
                  <input
                    name="name"
                    type="text"
                    value={inputChangeValue.name}
                    className={inputChangeValue.name === "" ? (
                      error.name ? "is-invalid form-control" : "form-control"
                    ) : "form-control"}
                    autoComplete="off"
                    placeholder="Name"
                    onChange={onInputChange}
                  />
                  {
                    inputChangeValue.name === '' && (
                      error.name && (
                        <small className="text-danger">
                          {error.name}
                        </small>
                      )
                    )
                  }
                </div>

                <div className="col-md-6">
                  <input
                    name="phone"
                    type="phone"
                    value={inputChangeValue.phone}
                    className={`
                      ${inputChangeValue.phone === "" ? (
                        error.phone ? "is-invalid form-control" : "form-control"
                      ) : "form-control"}
                  ${(inputChangeValue.phone.length > 10 || inputChangeValue.phone.length < 10) ? (
                        error.phone ? "is-invalid form-control" : "form-control"
                      ) : "form-control"}
                    `}
                    id="inputPassword4"
                    maxLength="10"
                    autoComplete="off"
                    placeholder="Phone"
                    onChange={onInputChange}
                  />
                  {
                    inputChangeValue.phone === '' ?
                      error.phone ? (
                        <small className="text-danger">
                          {error.phone}
                        </small>
                      ) : ''
                      : (inputChangeValue.phone.length > 10 || inputChangeValue.phone.length < 10) ?
                        error.phone && (
                          <small className="text-danger">
                            {error.phone}
                          </small>
                        )
                        : ''
                  }
                  {/* {
                    error.phone && (
                      <small className="text-danger">
                        {error.phone}
                      </small>
                    )
                  } */}
                </div>
                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    value={inputChangeValue.email}
                    className={`
                      ${inputChangeValue.email === "" ? (
                        error.email ? "is-invalid form-control" : "form-control"
                      ) : "form-control"}
                  ${(!(/^\w+([\.-]?\w+)*@gmail.com/).test(inputChangeValue.email)) ? (
                        error.email ? "is-invalid form-control" : "form-control"
                      ) : "form-control"}
                    `}
                    id="inputEmail4"
                    autoComplete="off"
                    placeholder="Email id"
                    onChange={onInputChange}
                  />
                  {
                    inputChangeValue.email === '' ?
                      error.email ? (
                        <small className="text-danger">
                          {error.email}
                        </small>
                      ) : ''
                      : (!(/^\w+([\.-]?\w+)*@gmail.com/).test(inputChangeValue.email)) ?
                        error.email && (
                          <small className="text-danger">
                            {error.email}
                          </small>
                        )
                        : ''
                  }
                  {/* {
                      error.email && (
                        <small className="text-danger">
                          {error.email}
                        </small>
                      )
                  } */}
                </div>
                <div className="col-md-6">
                  <input
                    name="pinCode"
                    type="text"
                    className="form-control"
                    value={inputChangeValue.pinCode}
                    autoComplete="off"
                    id="inputPassword4"
                    placeholder="Pin Code"
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    value={inputChangeValue.message}
                    className="form-control"
                    rows="3"
                    autoComplete="off"
                    placeholder="Message"
                    id="inputPassword4"
                    onChange={onInputChange}
                  ></textarea>
                </div>
                {/* <div className="col-md-6">
                  <input
                    name="nofile"
                    className="form-control form-control-lg file_choose_fild"
                    id="formFileLg"
                    onChange={onInputChange}
                    type="file" />
                  {error.message && (
                    <>
                      <span className="text-danger">{error.nofile}</span>
                    </>
                  )}
                </div> */}
                {/* <div className="input-group">
                  <input name="nofile" onChange={onFileUpload} className="form-control" id="file-to-upload" type="file" />
                  <button id="button-reset" className="close_button" type="button">
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </div> */}
                {/* new add */}
                <div className="input-group">
                  <fieldset className="col-12">
                    <input name="files" onChange={onFileUpload} className="form-control" id="file-to-upload" type="file" multiple />
                    <button id="button-reset" className="close_button" type="button">
                      <i className="fa-regular fa-circle-xmark"></i>
                    </button>
                  </fieldset>
                </div>
                <div className="col-12">
                  <button
                    className="buttons"
                    type="submit"
                  >
                    {checkButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div >
      </section >

      <section className="prime_footer">
        <div className="container text-center text-lg-start">
          <div className="flex-wrap d-flex">
            <div className="col-12 col-lg-4">
              <img src={Image} alt="" width="50%" />

              <ul>
                <li>
                  <a href="tel:+15195741080">
                    <i className="fa-solid fa-phone p-2"></i> +1 519 574 1080
                  </a>
                </li>
                <li>
                  <a href="mailto:info@primecon.ca">
                    <i className="fa-solid fa-envelope p-2"></i> Info@primecon.ca
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/3vNcTiWrZDtk2jZt5">
                    <i className="fa-solid fa-location-dot p-2"></i> Etobicoke,
                    Toronto, Ontario.
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-4">
              <h2 className="footer_headding">Navigations</h2>
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
            <div className="col-12 col-lg-4">
              <h2 className="footer_headding">Follow Us</h2>
              <ul>
                {/* <li>
                  <a href="tel:+15195741080">
                    <i className="fa-brands fa-facebook-f p-2"></i> Facebook
                  </a>
                </li> */}
                <li>
                  <a href="mailto:Contact@primecon.ca">
                    <i className="fa-brands fa-instagram p-2"></i>Instagram
                  </a>
                </li>
                {/* <li>
                  <a href="https://goo.gl/maps/3vNcTiWrZDtk2jZt5">
                    <i className="fa-brands fa-twitter p-2"></i> Twitter
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="text-center copyright">
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
    </div >
  );
};

// export default LandingPage

const mapStateToProps = (state) => ({
  AddformReducer: state.AddformReducer,
});
const mapDispatchToProps = (dispatch) => ({
  AddformAction: (details) => dispatch(AddformAction(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
