import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and CTA */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">accredian</h2>
            <p className="text-sm text-gray-400">Credentials that matter</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-xs mt-2 text-gray-400">Speak with our Learning Advisor</p>
          </div>

          {/* Programs */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {['Data Science & AI', 'Product Management', 'Business Analytics', 'Digital Transformation', 'Business Management', 'Project Management', 'Strategy & Leadership', 'Senior Management', 'Fintech'].map((program, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{program}</span>
                  <span className="text-xl">+</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email us (For Data Science Queries): admissions@accredian.com</li>
              <li>Email us (For Product Management Queries): pm@accredian.com</li>
              <li>Data Science Admission Helpline:+91 9079633292 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline:+91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4 mb-2">Why Accredian</h4>
            <h4 className="text-lg font-semibold mt-4 mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Accredian */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accredian</h3>
            <ul className="space-y-2">
              {['About', 'Career', 'Blog', 'Admission Policy', 'Referral Policy', 'Privacy Policy', 'Terms Of Service', 'Master FAQs'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;