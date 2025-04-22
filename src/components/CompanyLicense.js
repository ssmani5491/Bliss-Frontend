import React from 'react';

const CompanyLicense = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Company License Information</h1>

      <div className="license-details">
        <p>
          <strong>Company Name:</strong> MedSkills Health Solutions Pvt. Ltd.
        </p>
        <p>
          <strong>Company Registration Number:</strong> MS123456789
        </p>
        <p>
          <strong>Registered Office Address:</strong> 123 Health Road, Medical City, XYZ, 123456
        </p>

        <h4>Licenses and Certifications</h4>
        <ul>
          <li>
            <strong>Health Industry Certification</strong>: Accredited by the National Health Authority (NHA) for providing medical training and simulation services.
          </li>
          <li>
            <strong>ISO Certification</strong>: ISO 9001:2015 - Quality Management Systems for healthcare training services.
          </li>
          <li>
            <strong>Data Protection Compliance</strong>: Fully compliant with GDPR and HIPAA regulations for data protection and patient confidentiality.
          </li>
          <li>
            <strong>FDA Registered</strong>: FDA-approved medical simulation devices and training modules.
          </li>
        </ul>

        <h4>Regulatory Compliance</h4>
        <p>
          We comply with all applicable local, national, and international regulations governing healthcare training, including medical device safety, data protection, and patient confidentiality laws.
        </p>

        <h4>Our Commitment</h4>
        <p>
          MedSkills Health Solutions is dedicated to maintaining the highest standards of quality, safety, and ethical practice in all our operations. We are committed to providing the best training programs and certifications to healthcare professionals globally.
        </p>

        <h4>For More Information</h4>
        <p>
          If you have any questions regarding our company licenses or certifications, feel free to reach out to our customer service team at <a href="mailto:support@medskills.com">support@medskills.com</a> or call us at <strong>+1 (123) 456-7890</strong>.
        </p>
      </div>
    </div>
  );
};

export default CompanyLicense;
