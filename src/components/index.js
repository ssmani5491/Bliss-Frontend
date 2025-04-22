import React, { Fragment } from 'react';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




// src/components//.js


function Index() {
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
                    <i className="icofont-location-pin mr-2"></i>Adhipharasakthi
                    Hospitals, Melmaruvathur
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
                        MDMS
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
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing">
                  WELCOME TO BLISS SKILL LAB
                </span>
                <h1 className="mb-3 mt-3" style={{ textAlign: "start" }}>
                  Your most trusted <br></br> health partner
                </h1>
                <p className="mb-4 pr-5">
                  MedSimulation Skill Lab is dedicated to training the next
                  generation of healthcare professionals using advanced
                  simulation technology. We empower individuals with the skills
                  and confidence needed to excel in patient care.
                </p>
                <div
                  className="btn-container"
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <a
                    href="bookings"
                    className="btn btn-main-2 btn-icon btn-round-full"
                  >
                    Make appointment{" "}
                    <i className="icofont-simple-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div class="feature-item mb-5 mb-lg-0">
                  <div class="feature-icon mb-4">
                    <i class="icofont-surgeon-alt"></i>
                  </div>
                  <span>8 Hours Service</span>
                  <h4 class="mb-3">Apply Online</h4>
                  <p class="mb-4">
                    Kickstart your journey in healthcare training with our
                    advanced simulation programs. Apply online and take the
                    first step towards a fulfilling career.
                  </p>
                  <a href="bookings" class="btn btn-main btn-round-full">
                    Make a appoinment
                  </a>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-ui-clock"></i>
                  </div>
                  <span>Get Informed</span>
                  <h4 className="mb-3">MedSimulation Skill Lab</h4>
                  <p className="mb-4">
                    Discover our job-focused healthcare courses and enhance your
                    career opportunities.
                  </p>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-support"></i>
                  </div>
                  <span>Earn Your Certification</span>
                  <h4 className="mb-3">Elevate Your Skills</h4>
                  <p>
                    Advance your career with our industry-recognized
                    credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-lg-7 col-sm-12 mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
              <div className="about-img">
                <img
                  src="images/about/img-3.jpg"
                  alt="about-img-3"
                  className="img-fluid rounded shadow-lg w-100"
                  // style={{ objectFit: '', height: 'auto', width: '100%', maxHeight:'100%'}}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="col-lg-5">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color mb-4">About Bliss Skillful Care</h2>

                <div className="about-page">
                  <Container className="text-center my-5">
                    {/* Welcome Section */}
                    <Row>
                      <Col>
                        <h6 className="display-5 mb-3 welcome-heading">
                          Welcome to Bliss Skillful Care
                        </h6>

                        <p className="lead">
                          Empowering individuals with skills and knowledge to
                          thrive in healthcare and wellness.
                        </p>
                      </Col>
                    </Row>

                    {/* What We Offer Section - Vertical Bullet Points */}
                    <Row className="my-4">
                      <Col>
                        <h4>What We Offer</h4> <br></br>
                        <ul class="d-flex flex-column align-items-start list-unstyled">
                          <li class="mb-3">
                            <i class="icofont-check mr-2 pink-icon"></i>{" "}
                            Comprehensive Training Programs
                          </li>
                          <li class="mb-3">
                            <i class="icofont-check mr-2 pink-icon"></i>{" "}
                            Experienced Faculty
                          </li>
                          <li class="mb-3">
                            <i class="icofont-check mr-2 pink-icon"></i> Job
                            Placement Support
                          </li>
                          <li class="mb-3">
                            <i class="icofont-check mr-2 pink-icon"></i> Soft
                            Skills Development
                          </li>
                          <li class="mb-3">
                            <i class="icofont-check mr-2 pink-icon"></i>{" "}
                            State-of-the-Art Infrastructure
                          </li>
                          <li class="mb-3">
                            <i class="icofont-check mr-2 pink-icon"></i>{" "}
                            Holistic Learning
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta position-relative">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-doctor"></i>
                  <span className="h3">
                    <CountUp start={0} end={58} duration={2.5} suffix="k" />
                  </span>
                  <p>Student Enrolled</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-flag"></i>
                  <span className="h3">
                    <CountUp start={0} end={700} duration={2.5} suffix="+" />
                  </span>
                  <p>Class Completed</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-badge"></i>
                  <span className="h3">
                    <CountUp start={0} end={40} duration={2.5} suffix="+" />
                  </span>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-globe"></i>
                  <span className="h3">
                    <CountUp start={0} end={20} duration={2.5} />
                  </span>
                  <p>Top Instructors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Award winning patient care</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  At Bliss Skillful Care, we provide exceptional patient care
                  recognized by leading healthcare awards. Our dedicated team of
                  healthcare professionals is committed to offering
                  compassionate, personalized, and high-quality care.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-heart-beat-alt text-lg"></i>
                  <h4 className="mt-3 mb-3">BLS Training</h4>
                </div>
                <div className="content">
                  <p className="mb-4">
                    Basic Life Support (BLS) training teaches CPR, AED use, and
                    emergency response skills. It focuses on recognizing cardiac
                    arrest and performing chest compressions and rescue breaths.
                    BLS is essential for healthcare providers and the general
                    public. Certification ensures proficiency in life-saving
                    techniques during emergencies, potentially saving countless
                    lives in critical situations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-heart-beat-alt text-lg"></i>
                  <h4 className="mt-3 mb-3">CPR Training</h4>
                </div>
                <div className="content">
                  <p className="mb-4">
                    CPR training teaches individuals how to perform
                    cardiopulmonary resuscitation to save lives during cardiac
                    emergencies. It includes techniques for chest compressions,
                    rescue breaths, and using an AED. CPR training is crucial
                    for both healthcare professionals and the general public.
                    Certification ensures competence in responding effectively
                    to life-threatening situations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-heart-beat-alt text-lg"></i>
                  <h4 className="mt-3 mb-3">ACLS</h4>
                </div>
                <div className="content">
                  <p className="mb-4">
                    Advanced Cardiovascular Life Support (ACLS) training teaches
                    advanced skills for handling cardiac emergencies. It
                    includes techniques like managing arrhythmias, airway
                    management, and medication administration. ACLS is vital for
                    healthcare professionals in critical care settings.
                    Certification ensures readiness to manage life-threatening
                    cardiovascular situations effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-nurse" style={{ fontSize: "35px" }}></i>
                  <h4 className="mt-3 mb-3">Training for Nursing</h4>
                </div>

                <div className="content">
                  <p className="mb-4">
                    Nursing training equips individuals with the knowledge and
                    skills to provide patient care in various healthcare
                    settings. It includes coursework in anatomy, pharmacology,
                    and clinical practice. Nurses are trained in patient
                    assessment, administering medications, and supporting
                    recovery. Certification and licensing are required to
                    practice as a registered nurse.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i
                    className="icofont-doctor"
                    style={{ fontSize: "35px" }}
                  ></i>
                  <h4 className="mt-3 mb-3">Training for Doctors</h4>
                </div>
                <div className="content">
                  <p className="mb-4">
                    Doctor training involves completing a medical degree,
                    followed by clinical rotations and hands-on experience. It
                    covers subjects like anatomy, physiology, and procedures.
                    Doctors must complete residency programs for specialized
                    practice. Licensing, skills development, and continuing
                    education are essential for maintaining qualifications and
                    providing high-quality care.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i
                    className="icofont-ui-user"
                    style={{ fontSize: "35px" }}
                  ></i>
                  <h4 className="mt-3 mb-3">OT Training</h4>
                </div>

                <div className="content">
                  <p className="mb-4">
                    Occupational Therapy (OT) helps individuals improve their
                    ability to perform daily activities despite physical,
                    mental, or cognitive challenges. OT professionals assess and
                    create personalized treatment plans to enhance independence.
                    They work in various settings, including healthcare,
                    schools, and rehabilitation. OT focuses on promoting overall
                    well-being and quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section appoinment">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div className="appoinment-content">
                <img
                  src="images/about/img-4.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="emergency">
                  <h2 className="text-lg">
                    <i className="icofont-phone-circle text-lg"></i>+91 44 7110
                    9999 - 2415
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-10 ">
              <div className="appoinment-wrap mt-5 mt-lg-0">
                <h2 className="mb-2 title-color">Book a Training Schedule</h2>
                <p className="mb-4">
                  Schedule a session with our experts and begin your journey
                  towards mastering healthcare skills with cutting-edge
                  simulation training.
                </p>
                <form
                  id="appoinmentForm"
                  className="appointment-form"
                  method="post"
                  action="/submit-appoinment"
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

                  <button type="submit" className="btn btn-main btn-round-full">
                    Make Appointment{" "}
                    <i className="icofont-simple-right ml-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonial-2 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>We trained over 5000+ Students</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  Empowering healthcare professionals with hands-on training and
                  simulation technology to shape the future of patient care.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 testimonial-wrap-2">
              <Carousel
                slide={true} // No sliding transition
                interval={2000} // Prevent automatic transition
                nextIcon={true}
                prevIcon={true}
              >
                {/* Testimonial 1 */}
                <Carousel.Item>
                  <div className="row">
                    <div className="col-6">
                      <div className="testimonial-block style-2 gray-bg">
                        <i className="icofont-quote-right"></i>
                        <div className="testimonial-thumb">
                          <img
                            src="images/team/2.png"
                            loading="lazy"
                            alt="John Partho"
                            className="img-fluid"
                          />
                        </div>
                        <div className="client-info">
                          <h4>Outstanding Service!</h4>
                          <span>Shalini</span>
                          <p>
                            They offer exceptional service, focused on achieving
                            top-quality results and ensuring complete customer
                            satisfaction. Expect quick, efficient solutions
                            tailored to meet your needs.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="testimonial-block style-2 gray-bg">
                        <i className="icofont-quote-right"></i>
                        <div className="testimonial-thumb">
                          <img
                            src="images/team/1.png"
                            alt="Mullar Sarth"
                            className="img-fluid"
                          />
                        </div>
                        <div className="client-info">
                          <h4>Skilled Doctors!</h4>
                          <span>Sowmiya</span>
                          <p>
                            Our skilled doctors offer outstanding care,
                            prioritizing your health and well-being. Rely on
                            their expertise to provide personalized, effective
                            treatment for all your needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>

                {/* Testimonial 2 */}
                <Carousel.Item>
                  <div className="row">
                    <div className="col-6">
                      <div className="testimonial-block style-2 gray-bg">
                        <i className="icofont-quote-right"></i>
                        <div className="testimonial-thumb">
                          <img
                            src="images/team/1.jpg"
                            alt="Kolis Mullar"
                            className="img-fluid"
                          />
                        </div>
                        <div className="client-info">
                          <h4>Reliable Support!</h4>
                          <span>Samson</span>
                          <p>
                            Our support team is committed to offering timely,
                            dependable assistance whenever required. Trust us
                            for fast solutions and outstanding customer service.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="testimonial-block style-2 gray-bg">
                        <i className="icofont-quote-right"></i>
                        <div className="testimonial-thumb">
                          <img
                            src="images/team/4.jpg"
                            alt="Partho Sarothi"
                            className="img-fluid"
                          />
                        </div>
                        <div className="client-info">
                          <h4>Comfortable Environment!</h4>
                          <span>Ajith Kumar</span>
                          <p>
                            Relax in a warm and inviting space designed for your
                            comfort and well-being. We focus on fostering an
                            atmosphere where you feel appreciated and at ease.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>

                {/* Additional Testimonial Items can be added here */}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="section clients">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>We trained us</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  MedSimulation Skill Lab is committed to providing top-tier
                  healthcare training with advanced simulation technologies,
                  preparing professionals to excel in real-world medical
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <Carousel
            interval={3000}
            pause="hover"
            controls={false}
            indicators={false}
            wrap={true}
          >
            <Carousel.Item>
              <div className="row clients-logo">
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Hos - Logo.png"
                      alt="Logo 1"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Colle - Logo.png"
                      alt="Logo 2"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Dent - Logo.png"
                      alt="Logo 3"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Eng - Logo.png"
                      alt="Logo 4"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Phar Coll - Logo.png"
                      alt="Logo 5"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Horti - Logo.png"
                      alt="Logo 6"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row clients-logo">
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Matric - Logo.png"
                      alt="Logo 7"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/GB - logo.png"
                      alt="Logo 8"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Agri - Logo.png"
                      alt="Logo 9"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Ats - Logo.png"
                      alt="Logo 10"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Phar Coll - Logo.png"
                      alt="Logo 5"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="client-thumb">
                    <img
                      src="images/about/Dent - Logo.png"
                      alt="Logo 3"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
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
                  &copy; Copyright Reserved to <span> Bliss by </span>{" "}
                  <a
                    href="https://adhiparasakthihospitals.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    APH-IT{" "}
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

export default Index;