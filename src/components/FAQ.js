import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the selected question
    }
  };

  const faqData = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on the 'Forgot Password' link. Enter your email address, and we will send you a link to reset your password."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team by emailing us at support@medskills.com or calling +1 (123) 456-7890. You can also use our live chat feature on the platform."
    },
    {
      question: "How do I update my profile information?",
      answer: "Once logged in, navigate to your account settings. From there, you can update your personal information, such as your name, email, and contact details."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. Simply go to your account settings, navigate to the 'Subscription' section, and click on 'Cancel Subscription'."
    },
    {
      question: "What happens after I cancel my subscription?",
      answer: "Once your subscription is canceled, you will continue to have access to the service until the end of your current billing cycle. After that, your access will be revoked."
    },
    {
      question: "How do I get technical support?",
      answer: "If you're facing any technical issues, please reach out to our support team via email at support@medskills.com. Alternatively, you can use the live chat on our platform for immediate assistance."
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Frequently Asked Questions (FAQs)</h1>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item mb-3">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
              style={{
                cursor: 'pointer',
                padding: '15px',
                backgroundColor: '#f7f7f7',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginBottom: '10px'
              }}
            >
              <h4>{faq.question}</h4>
            </div>

            {activeIndex === index && (
              <div className="faq-answer" style={{ padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderTop: 'none' }}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
