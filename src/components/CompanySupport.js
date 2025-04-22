import React from 'react';

const CompanySupport = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Company Support</h1>
      
      <section className="support-section">
        <h2>Contact Support</h2>
        <p>If you need any assistance or have any questions, please reach out to our support team. We're here to help!</p>
        
        <div className="support-details">
          <div className="contact-item">
            <h4>Email Support</h4>
            <p>If you have a query, issue, or require technical assistance, you can reach us by email.</p>
            <p>Email: <a href="mailto:support@medskills.com">support@medskills.com</a></p>
          </div>

          <div className="contact-item">
            <h4>Phone Support</h4>
            <p>If you prefer to speak to one of our customer support agents, feel free to give us a call.</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          <div className="contact-item">
            <h4>Live Chat</h4>
            <p>For immediate assistance, use the live chat feature available on our platform.</p>
          </div>
        </div>
      </section>

      <section className="faq-section mt-5">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-item">
          <h4>1. How do I reset my password?</h4>
          <p>To reset your password, go to the login page and click on the "Forgot Password" link. Enter your email address, and we will send you a link to reset your password.</p>
        </div>

        <div className="faq-item">
          <h4>2. How do I update my profile information?</h4>
          <p>Once logged in, navigate to your account settings. From there, you can update your personal information, such as your name, email, and contact details.</p>
        </div>

        <div className="faq-item">
          <h4>3. Can I cancel my subscription?</h4>
          <p>Yes, you can cancel your subscription anytime. To cancel, go to the 'Subscription' section of your account settings, and select 'Cancel Subscription'. If you have any issues, feel free to contact us directly for assistance.</p>
        </div>

        <div className="faq-item">
          <h4>4. How do I get technical support?</h4>
          <p>If you encounter any technical issues while using the platform, please reach out to our support team via email at <a href="mailto:support@medskills.com">support@medskills.com</a>, or contact us via the live chat feature.</p>
        </div>
      </section>

      <section className="contact-form mt-5">
        <h2>Contact Us Directly</h2>
        <p>If you have a specific inquiry or need further assistance, please fill out the form below, and our team will get back to you as soon as possible.</p>

        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" className="form-control" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email address" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" className="form-control" rows="4" placeholder="Write your message" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default CompanySupport;
