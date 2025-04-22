import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  // Handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Remove non-numeric characters for phone field
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // Removes all non-numeric characters
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validate phone number format (Ensures only 10 digits)
  const isValidPhoneNumber = (phone) => {
    return /^[0-9]{10}$/.test(phone.trim()); // Trim extra spaces & ensure exactly 10 digits
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!isValidPhoneNumber(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await fetch(
        "https://bliss-react-backend.onrender.com/contactus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // ✅ Send the updated state
        }
      );

      if (response.ok) {
        console.log("Submission successful");
        navigate("/ussuccess"); // Navigate on success
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Error during form submission. Please try again.");
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
                    {/* <li>
                    <a className="dropdown-item" href="doctor-single"
                      >Doctor Single</a
                    >
                  </li> */}
                    <li>
                      <a className="dropdown-item" href="bookings">
                        Appoinment
                      </a>
                    </li>
                  </ul>
                </li>

                {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="blog-sidebar"
                  id="dropdown05"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Blog <i className="icofont-thin-down"></i
                ></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                  <li>
                    <a className="dropdown-item" href="blog-sidebar"
                      >Blog with Sidebar</a
                    >
                  </li>

                  <li>
                    <a className="dropdown-item" href="blog-single"
                      >Blog Single</a
                    >
                  </li>
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
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-info pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-live-support"></i>
                <h5>Call Us</h5>
                +91 44 7110 9999 - 2415
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-support-faq"></i>
                <h5>Email Us</h5>
                skilllab@mapims.edu.in
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-location-pin"></i>
                <h5>Location</h5>
                Adhipharasakthi Hospitals, Melmaruvathur
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="text-md mb-2">Contact us</h2>
                <div className="divider mx-auto my-4"></div>
                <p className="mb-5">
                  Our team is here to help! Reach out to us for inquiries,
                  feedback, or support regarding our Skill Lab services.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <form
                id="contactForm"
                class="contact__form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-12">
                    <div
                      className="alert alert-success contact__msg"
                      style={{ display: "none" }}
                      role="alert"
                    >
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name"
                        required
                        value={formData.name} // ✅ Bind state
                        onChange={handleChange} // ✅ Update state
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Your Query Topic"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        id="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Your Mobile Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group-2 mb-4">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="8"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-main btn-round-full"
                    name="submit"
                    type="submit"
                    value="Send Message"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.5154095049058!2d79.81334803257656!3d12.433286493579308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5319ff6aa4b8bd%3A0xe04ed74a39febd5!2sAdhiparasakthi%20Hospital%20%26%20Research%20Institute!5e0!3m2!1sen!2sin!4v1733291328809!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

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
                <h4 className="text-capitalize mb-3" style={{ color: "white" }}>
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
                <h4 className="text-capitalize mb-3" style={{ color: "white" }}>
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
                <h4 className="text-capitalize mb-3" style={{ color: "white" }}>
                  Get in Touch
                </h4>
                <div className="divider mb-4"></div>

                <div className="footer-contact-block mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-email mr-3"></i>
                    <span className="h6 mb-0">Support Available for 8hrs</span>
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
                    <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
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
                    target="_blank"
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

export default Contact;
