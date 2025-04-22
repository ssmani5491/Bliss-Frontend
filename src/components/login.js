import React, { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (email === '' || password === '') {
      setError('Both fields are required!');
      return;
    }

    // Assuming successful login
    setError('');

    // Save the login data in sessionStorage
    sessionStorage.setItem('user', JSON.stringify({ email, password }));

    console.log('Logging in with', email, password);

    // Redirect to dashboard after successful login
    navigate('/'); // Use navigate to redirect to dashboard
  };

  return (
    <div style={styles.pageBackground}>
      <header style={styles.header}>
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
            </div>
          </div>
        </div>
      </header>

      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card className="shadow-lg" style={styles.card}>
          <Card.Body>
            <h2 className="text-center">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form onSubmit={handleSubmit} className="mt-4">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.formControl}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.formControl}
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={styles.submitButton}>
                Login
              </Button>

              <p className="mt-3 text-center">
                Don't have an account? <a href="/register" className='text-primary'>Register here</a>
              </p>
            </Form>
          </Card.Body>
        </Card>
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
    </div>
  );
};

const styles = {
  
};

export default Login;
