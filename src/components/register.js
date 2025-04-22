import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // useNavigate hook for navigation

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Handle registration submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for matching passwords and non-empty fields
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (name === '' || email === '' || phone === '' || dob === '' || gender === '' || password === '' || confirmPassword === '') {
      setError('All fields are required!');
      return;
    }

    // Assuming successful registration, store user data in sessionStorage (optional)
    sessionStorage.setItem('user', JSON.stringify({ name, email, phone, dob, gender, password }));

    // Reset error message
    setError('');

    console.log('Registering user:', name, email, phone, dob, gender, password);

    // Redirect to login page after successful registration
    navigate('/login'); // Redirecting to login page using useNavigate
  };

  return (
    <body id="top">

    <header>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex align-items-center">
              <ul className="top-bar-info list-inline mb-0">
                <li className="list-inline-item mr-4">
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
            <div className="col-lg-6 d-flex justify-content-lg-end align-items-center">
              <a href="tel:+91 44 7110 9999" className="call-now text-white">
                <span>Call Now : </span>
                <span className="h4 text-white">+91 44 7110 9999 - 2415</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="images/logo.png" alt="" className="img-fluid" />
          </a>

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="service">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Body>
              <h3 className="text-center mb-4 text-primary">Create Your Account</h3>

              {/* Display error message if exists */}
              {error && <div className="alert alert-danger text-center">{error}</div>}

              <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicDob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)} required className="form-control-lg">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3 py-2">
                  Register
                </Button>

                <p className="mt-3 text-center">
                  Already have an account? <a href="/login" className="text-primary">Login here</a>
                </p>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <footer className="footer ">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 mr-auto col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<div className="logo mb-4">
						<img src="images/logo.png" alt="" className="img-fluid"/>
					</div>
					<p>We believe in the power of skill and empathy to transform lives. At Bliss Skillful Care, our mission is to offer innovative solutions while fostering a caring, supportive environment for all.</p>

					<ul className="list-inline footer-socials mt-4">
						<li className="list-inline-item"><a href="https://www.facebook.com/"><i className="icofont-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://www.instagram.com/"><i className="icofont-instagram"></i></a></li>
						<li className="list-inline-item"><a href="https://x.com/bliss_skill_lab"><i className="icofont-twitter"></i></a></li>
					</ul>
				</div>
			</div>
      <div className="col-lg-2 col-md-6 col-sm-6">
  <div className="widget mb-5 mb-lg-0"><br></br><br></br><br></br>
    <h4 className="text-capitalize mb-3" style={{ color: 'white' }}>Department</h4>
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
				<div className="widget mb-5 mb-lg-0"><br></br><br></br><br></br>
					<h4 className="text-capitalize mb-3" style={{ color: 'white' }}>Support</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="termsandcondition">Terms & Conditions</a></li>
						<li><a href="privacypolicy">Privacy Policy</a></li>
						<li><a href="companysupport">Company Support </a></li>
						<li><a href="faq">FAQuestions</a></li>
						<li><a href="companylicence">Company Licence</a></li>
					</ul>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget widget-contact mb-5 mb-lg-0"><br></br><br></br><br></br>
					<h4 className="text-capitalize mb-3" style={{ color: 'white' }}>Get in Touch</h4>
					<div className="divider mb-4"></div>

					<div className="footer-contact-block mb-4">
						<div className="icon d-flex align-items-center">
							<i className="icofont-email mr-3"></i>
							<span className="h6 mb-0">Support Available for 8hrs</span>
						</div>
						<h4 className="mt-2"><a href="mailto:skilllab@mapims.edu.in">skilllab@mapims.edu.in</a></h4>
					</div>

					<div className="footer-contact-block">
						<div className="icon d-flex align-items-center">
							<i className="icofont-support mr-3"></i>
							<span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
						</div>
						<h4 className="mt-2"><a href="tel:+91 44 7110 9999">+91 44 7110 9999 - 2415</a></h4>
					</div>
				</div>
			</div>
		</div>
		
		<div className="footer-btm py-4 mt-5">
			<div className="row align-items-center justify-content-between">
				<div className="col-lg-6">
					<div className="copyright">
						&copy; Copyright Reserved to <span className="text-color"> Bliss </span> by <a href="https://adhiparasakthihospitals.com/" target="_blank" rel="noreferrer"> APH - IT </a>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="subscribe-form text-lg-right mt-5 mt-lg-0">
						<form action="#" className="subscribe">
							<input type="text" className="form-control" placeholder="Your Email address"/>
							<a href="#" className="btn btn-main-2 btn-round-full">Subscribe</a>
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

    </body>
  );
};

export default Register;
