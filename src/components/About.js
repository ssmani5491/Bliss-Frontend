import React, { useState } from 'react';

function About() {

	const [isExpanded, setIsExpanded] = useState(false);

const toggleContent = () => {
  setIsExpanded(!isExpanded);
};

    return (
      
            <body id="top">
<header>
	<div className="header-top-bar">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<ul className="top-bar-info list-inline-item pl-0 mb-0">
						<li className="list-inline-item"><a href="mailto:skilllab@mapims.edu.in"><i className="icofont-support-faq mr-2"></i>skilllab@mapims.edu.in</a></li>
						<li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Adhipharasakthi Hospitals, Melmaruvathur </li>
					</ul>
				</div>
				<div className="col-lg-6">
					<div className="text-lg-right top-right-bar mt-2 mt-lg-0">
						<a href="tel:+91 44 7110 9999" >
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
			  	<img src="images/logo.png" alt="" className="img-fluid"/>
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

			   <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="blog-sidebar" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses <i className="icofont-thin-down"></i></a>
					<ul className="dropdown-menu" aria-labelledby="dropdown05">
					<li><a className="dropdown-item" href="bls">BLS</a></li>
					<li><a className="dropdown-item" href="Acls">ACLS</a></li>
						<li><a className="dropdown-item" href="mbbsug">MBBS</a></li>
						<li><a className="dropdown-item" href="mbbspg">MD/MS</a></li>
            <li><a className="dropdown-item" href="bdsug">BDS</a></li>
            <li><a className="dropdown-item" href="bdspg">MDS</a></li>
            <li><a className="dropdown-item" href="nursing">Nursing</a></li>
           

					</ul>
			  	</li>


			    <li className="nav-item"><a className="nav-link" href="service">Services</a></li>

			    <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="department" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department <i className="icofont-thin-down"></i></a>
						<ul className="dropdown-menu" aria-labelledby="dropdown02">
						{/* <li><a className="dropdown-item" href="department"> All Departments</a></li> */}
						<li><a className="dropdown-item" href="generalmedicine">General Medicine</a></li>
						<li><a className="dropdown-item" href="opthomology">Opthomology</a></li>
						<li><a className="dropdown-item" href="cardiology">Cardiology</a></li>
						<li><a className="dropdown-item" href="dentalcare">Dental Care</a></li>
						<li><a className="dropdown-item" href="pulmology">Pulmology</a></li>
						<li><a className="dropdown-item" href="gynecology">Gynecology</a></li>
					</ul>
			  	</li>

			  	<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="doctor" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down"></i></a>
					<ul className="dropdown-menu" aria-labelledby="dropdown03">
						<li><a className="dropdown-item" href="doctor">Doctors</a></li>
						{/* <li><a className="dropdown-item" href="doctor-single">Doctor Single</a></li> */}
						<li><a className="dropdown-item" href="bookings">Appoinment</a></li>
					</ul>
			  	</li>

			   {/* <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="blog-sidebar" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></a>
					<ul className="dropdown-menu" aria-labelledby="dropdown05">
						<li><a className="dropdown-item" href="blog-sidebar">Blog with Sidebar</a></li>

						<li><a className="dropdown-item" href="blog-single">Blog Single</a></li>
					</ul>
			  	</li> */}
			   <li className="nav-item"><a className="nav-link" href="contact">Contact</a></li>
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
          <span className="text-white">About Us</span>
          <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section about-page">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-text" >
            At Bliss-Site, we believe that true happiness is a journey, not a destination. 
            Our mission is to empower individuals to live their most fulfilling lives by fostering personal growth, wellness, and inner peace.Founded on the principles of mindfulness, self-care, and positive transformation, Bliss-Site is your trusted companion in the pursuit of happiness.
          </p>

          <p className="about-text">
            In today’s fast-paced world, it’s easy to get overwhelmed by the demands of daily life. 
            At Bliss-Site, we focus on helping you reconnect with your inner self, manage stress, and cultivate joy in all areas of your life. 
            Our approach combines expert guidance, practical tools, and a supportive community to help you unlock your full potential.
          </p>

          <p className="about-text">
            Whether you're seeking emotional balance, physical wellness, or spiritual growth,Bliss-Site offers a comprehensive platform to guide you toward lasting change. 
            Our offerings are designed to help you build healthier habits, improve your mindset, and embrace a life full of positivity and purpose.
          </p>

          <h2 className="values-title">Our Values</h2>
          <ul className="values-list">
            <li> Holistic Wellness</li>
            <li> Expert Guidance</li>
            <li> Community-Driven Support</li>
            <li> Personalized Approach</li>
          </ul>
        </div>

        <img src="images/about/sign.png" alt="Bliss-Site Logo" className="img-fluid mt-4"/>
      </div>
    </div>
  </div>
</section>




<section className="fetaure-page ">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6">
				<div className="about-block-item mb-5 mb-lg-0">
					<img src="images/about/about-1.jpg" alt="" className="img-fluid w-100"/>
					<h4 className="mt-3">Healthcare for Kids</h4>
					<p>
					We provide compassionate and expert healthcare tailored to meet the unique needs of your child.</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6">
				<div className="about-block-item mb-5 mb-lg-0">
					<img src="images/about/about-2.jpg" alt="" className="img-fluid w-100"/>
					<h4 className="mt-3">Medical Counseling</h4>
					<p>
					We provide expert medical counseling to help you make informed health decisions.</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6">
				<div className="about-block-item mb-5 mb-lg-0">
					<img src="images/about/about-3.jpg" alt="" className="img-fluid w-100"/>
					<h4 className="mt-3">Modern Equipments</h4>
					<p>
					We use advanced, state-of-the-art equipment for precise and effective healthcare.</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6">
				<div className="about-block-item">
					<img src="images/about/about-4.jpg" alt="" className="img-fluid w-100"/>
					<h4 className="mt-3">Qualified Doctors</h4>
					<p>
					Our qualified doctors provide expert care with a focus on your health and well-being.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="section awards">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-lg-4">
				<h2 className="title-color">Our Doctors achievements </h2>
				<div className="divider mt-4 mb-5 mb-lg-0"></div>
			</div>
			<div className="col-lg-8">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="images/about/3.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="images/about/4.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="images/about/1.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="images/about/2.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="images/about/5.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="images/about/6.png" alt="" className="img-fluid"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section team">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-6">
				<div className="section-title text-center">
					<h2 className="mb-4">Meet Our Specialist</h2>
					<div className="divider mx-auto my-4"></div>
					<p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="images/team/1.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single">Samson</a></h4>
						<p>Internist, Emergency Physician</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="images/team/2.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single">Shalini</a></h4>
						<p>Surgeon, Сardiologist</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="images/team/3.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single">Ajith</a></h4>
						<p>Internist, General Practitioner</p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block">
					<img src="images/team/4.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single">Raj</a></h4>
						<p>Orthopedic Surgeon</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section testimonial">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 offset-lg-6">
				<div className="section-title">
					<h2 className="mb-4">What they say about us</h2>
					<div className="divider  my-4"></div>
				</div>
			</div>
		</div>
		<div className="row align-items-center">
			<div className="col-lg-6 testimonial-wrap offset-lg-6">
				<div className="testimonial-block">
					<div className="client-info ">
						<h4>Amazing service!</h4>
						<span>Anand</span>
					</div>
					<p>
					"As a professional dedicated to helping people achieve mental wellness, I was seeking a platform that offers both practical tools and emotional support for my clients. I found exactly that in Bliss-Site. 
      Their comprehensive wellness approach, which integrates mindfulness, stress management, and personal growth, has been incredibly effective."
					</p>
					<i className="icofont-quote-right"></i>
					
				</div>

				

				<div className="testimonial-block">
					<div className="client-info">
						<h4>Good Support!</h4>
						<span>Jhonson</span>
					</div>
					<p>
      "I’ve had the pleasure of working with Bliss-Site, and their customer support is absolutely outstanding. From the moment I reached out for assistance, their team went above and beyond to address my needs. They didn't just offer generic solutions—they took the time to understand my challenges and provide tailored support that truly made a difference.
    </p>
					<i className="icofont-quote-right"></i>
				</div>

				<div className="testimonial-block">
					<div className="client-info">
						<h4>Nice Environment!</h4>
						<span>Divya</span>
					</div>
					<p>
      I felt supported and at home, which allowed me to truly focus on my goals and growth. The energy of the space, combined with their holistic approach, has made a real difference in my personal and professional life. I highly recommend Bliss-Site to anyone who values not just great service, but also a nurturing environment that promotes healing and growth."
    </p>
					<i className="icofont-quote-right"></i>
				</div>

				<div className="testimonial-block">
					<div className="client-info">
						<h4>Modern Service!</h4>
						<span>Murali</span>
					</div>
					<p>
					They offer exceptional services, tailored to meet the needs of each individual client. With a focus on reliability and excellence, their team ensures that every project is completed to the highest standard. Whether addressing complex challenges or streamlining operations, they bring expertise and dedication to every task. Clients can rely on their consistent support, comprehensive solutions, and commitment to delivering outstanding results.
					</p>
					<i className="icofont-quote-right"></i>
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


    <script src="plugins/jquery/jquery.js"></script>
    <script  src="plugins/bootstrap/js/popper.js"></script>
    <script  src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script  src="plugins/counterup/jquery.easing.js"></script>
    <script  src="plugins/slick-carousel/slick/slick.min.js"></script>
    <script  src="plugins/counterup/jquery.waypoints.min.js"></script>
    
    <script  src="plugins/shuffle/shuffle.min.js"></script>
    <script  src="plugins/counterup/jquery.counterup.min.js"></script>

    <script  src="plugins/google-map/map.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA&callback=initMap"></script>    
    
    <script src="js/script.js"></script>
    <script src="js/contact.js"></script>

  </body>
       
    );
};

export default About;