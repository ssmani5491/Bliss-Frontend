
import React, { Fragment } from 'react';
// Importing hooks from React
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';




function Appointment() {
  const [formData, setFormData] = useState({
    graduate: '',
    training: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    message: '',
  });

  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Handle input changes and update formData state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://bliss-react-backend.onrender.com/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
          //  access_key: "YOUR_WEB3FORMS_API_KEY",
          }),
        }
      );
  
      if (response.ok) {
        console.log('Submission successful');
        navigate('/success'); // Navigate on success
      } else {
        alert('Something went wrong. Please try again!');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Error during form submission. Please try again.');
    }
  };
    return (
      <body id="top">
        <header>
          <div className="header-top-bar">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <ul className="top-bar-info list-inline-item pl-0 mb-0">
                    <li className="list-inline-item">
                      <a href="mailto:skilllab@mapims.edu.in">
                        <i className="icofont-support-faq mr-2"></i>
                        skilllab@mapims.edu.in
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <i className="icofont-location-pin mr-2"></i>
                      Adhipharasakthi Hospitals, Melmaruvathur
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                    <a href="tel:+91 44 7110 9999">
                      <span>Call Now : </span>
                      <span className="h4">+91 44 7110 9999 - 2415</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navigation" id="navbar">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src="images/logo.png" alt="" className="img-fluid" />
              </a>

              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarmain"
                aria-controls="navbarmain"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icofont-navigation-menu"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarmain">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog-sidebar"
                      id="dropdown05"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Courses <i className="icofont-thin-down"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown05">
                      <li>
                        <a className="dropdown-item" href="bls">
                          BLS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="Acls">
                          ACLS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="mbbsug">
                          MBBS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="mbbspg">
                          MD/MS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="bdsug">
                          BDS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="bdspg">
                          MDS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="nursing">
                          Nursing
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="service">
                      Services
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="department"
                      id="dropdown02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Department <i className="icofont-thin-down"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown02">
                      {/* <li><a className="dropdown-item" href="department"> All Departments</a></li> */}
                      <li>
                        <a className="dropdown-item" href="generalmedicine">
                          General Medicine
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="opthomology">
                          Opthomology
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="cardiology">
                          Cardiology
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="dentalcare">
                          Dental Care
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pulmology">
                          Pulmology
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="gynecology">
                          Gynecology
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="doctor"
                      id="dropdown03"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Doctors <i className="icofont-thin-down"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown03">
                      <li>
                        <a className="dropdown-item" href="doctor">
                          Doctors
                        </a>
                      </li>
                      {/* <li><a className="dropdown-item" href="doctor-single">Doctor Single</a></li> */}
                      <li>
                        <a className="dropdown-item" href="bookings">
                          Appoinment
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="blog-sidebar" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></a>
					<ul className="dropdown-menu" aria-labelledby="dropdown05">
						<li><a className="dropdown-item" href="blog-sidebar">Blog with Sidebar</a></li>

						<li><a className="dropdown-item" href="blog-single">Blog Single</a></li>
					</ul>
			  	</li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section className="page-title bg-1">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Book your Session</span>
                  <h1 className="text-capitalize mb-5 text-lg">Appoinment</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="appoinment section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mt-3">
                  <div className="feature-icon mb-3">
                    <i className="icofont-support text-lg"></i>
                  </div>
                  <span className="h3">Call for an Emergency Service!</span>
                  <h2 className="text-color mt-3" style={{ fontSize: "30px" }}>
                    +91 44 7110 9999 - 2415
                  </h2>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                  <h2 className="mb-2 title-color">Book an appoinment</h2>
                  <p className="mb-4">
                    Schedule a session with our experts and begin your journey
                    towards mastering healthcare skills with cutting-edge
                    simulation training.
                  </p>
                  <form
                    id="appoinmentForm"
                    className="appointment-form"
                    onSubmit={handleSubmit} // Call handleSubmit on form submission
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            className="form-control"
                            name="graduate"
                            value={formData.graduate}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Choose Graduates</option>
                            <option value="MBBS UG">MBBS UG</option>
                            <option value="MBBS UG - Intern">
                              MBBS UG - Intern
                            </option>
                            <option value="MBBS PG">MBBS PG</option>
                            <option value="BDS UG">BDS UG</option>
                            <option value="BDS UG - Intern">
                              BDS UG - Intern
                            </option>
                            <option value="BDS PG">BDS PG</option>
                            <option value="Nursing">Nursing</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            className="form-control"
                            name="training"
                            value={formData.training}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Training</option>
                            <option value="Basic Life Support (BLS)">
                              Basic Life Support (BLS)
                            </option>
                            <option value="Advanced Cardiovascular Life Support (ACLS)">
                              Advanced Cardiovascular Life Support (ACLS)
                            </option>
                            <option value="Skill Training for Nursing">
                              Skill Training for Nursing
                            </option>
                            <option value="Skill Training for Doctors">
                              Skill Training for Doctors
                            </option>
                            <option value="OT Training">OT Training</option>
                            <option value="Cost and Duration">
                              Cost and Duration
                            </option>
                            <option value="Scenario-Based Training for PG">
                              Scenario-Based Training for PG
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="date"
                            type="date"
                            className="form-control"
                            value={formData.date}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="time"
                            type="time"
                            className="form-control"
                            value={formData.time}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="phone"
                            type="tel"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group-2 mb-4">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-main btn-round-full"
                    >
                      Make Appointment{" "}
                      <i className="icofont-simple-right ml-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mr-auto col-sm-6">
                <div className="widget mb-5 mb-lg-0">
                  <div className="logo mb-4">
                    <img src="images/logo.png" alt="" className="img-fluid" />
                  </div>
                  <p>
                    We believe in the power of skill and empathy to transform
                    lives. At Bliss Skillful Care, our mission is to offer
                    innovative solutions while fostering a caring, supportive
                    environment for all.
                  </p>

                  <ul className="list-inline footer-socials mt-4">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://x.com/bliss_skill_lab">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget mb-5 mb-lg-0">
                  <br></br>
                  <br></br>
                  <br></br>
                  <h4
                    className="text-capitalize mb-3"
                    style={{ color: "white" }}
                  >
                    Department
                  </h4>
                  <div className="divider mb-4"></div>

                  <div className="footer-menu lh-35">
                    <p>Surgery</p>
                    <p>Women's Health</p>
                    <p>Radiology</p>
                    <p>Cardiac</p>
                    <p>Medicine</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget mb-5 mb-lg-0">
                  <br></br>
                  <br></br>
                  <br></br>
                  <h4
                    className="text-capitalize mb-3"
                    style={{ color: "white" }}
                  >
                    Support
                  </h4>
                  <div className="divider mb-4"></div>

                  <ul className="list-unstyled footer-menu lh-35">
                    <li>
                      <a href="termsandcondition">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="privacypolicy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="companysupport">Company Support </a>
                    </li>
                    <li>
                      <a href="faq">FAQuestions</a>
                    </li>
                    <li>
                      <a href="companylicence">Company Licence</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget widget-contact mb-5 mb-lg-0">
                  <br></br>
                  <br></br>
                  <br></br>
                  <h4
                    className="text-capitalize mb-3"
                    style={{ color: "white" }}
                  >
                    Get in Touch
                  </h4>
                  <div className="divider mb-4"></div>

                  <div className="footer-contact-block mb-4">
                    <div className="icon d-flex align-items-center">
                      <i className="icofont-email mr-3"></i>
                      <span className="h6 mb-0">
                        Support Available for 8hrs
                      </span>
                    </div>
                    <h4 className="mt-2">
                      <a href="mailto:skilllab@mapims.edu.in">
                        skilllab@mapims.edu.in
                      </a>
                    </h4>
                  </div>

                  <div className="footer-contact-block">
                    <div className="icon d-flex align-items-center">
                      <i className="icofont-support mr-3"></i>
                      <span className="h6 mb-0">
                        Mon to Fri : 08:30 - 18:00
                      </span>
                    </div>
                    <h4 className="mt-2">
                      <a href="tel:+91 44 7110 9999">+91 44 7110 9999 - 2415</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-btm py-4 mt-5">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6">
                  <div className="copyright">
                    &copy; Copyright Reserved to{" "}
                    <span className="text-color"> Bliss </span> by{" "}
                    <a
                      href="https://adhiparasakthihospitals.com/"
                      target="_blank" rel="noreferrer"
                    >
                      {" "}
                      APH - IT{" "}
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                    <form action="#" className="subscribe">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email address"
                      />
                      <a href="#" className="btn btn-main-2 btn-round-full">
                        Subscribe
                      </a>
                    </form>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <a className="backtop js-scroll-trigger" href="#top">
                    <i className="icofont-long-arrow-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <script src="plugins/jquery/jquery.js"></script>

        <script src="plugins/bootstrap/js/popper.js"></script>
        <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="plugins/counterup/jquery.easing.js"></script>

        <script src="plugins/slick-carousel/slick/slick.min.js"></script>

        <script src="plugins/counterup/jquery.waypoints.min.js"></script>

        <script src="plugins/shuffle/shuffle.min.js"></script>
        <script src="plugins/counterup/jquery.counterup.min.js"></script>

        <script src="plugins/google-map/map.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA&callback=initMap"></script>

        <script src="js/script.js"></script>
        <script src="js/contact.js"></script>
      </body>
    );
}

export default Appointment;