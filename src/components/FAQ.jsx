import React from 'react';
import Footer from './Footer';

const FAQ = () => {
  return (
    <>
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      
      <div className="flex mb-8">
        <div className="w-1/3 pr-4">
          <button className="w-full py-2 px-4 mb-4 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition duration-300">
            Eligibility
          </button>
          <button className="w-full py-2 px-4 mb-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300">
            How To Use?
          </button>
          <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300">
            Terms & Conditions
          </button>
        </div>
        
        <div className="w-2/3">
          <div className="mb-4">
            <button className="w-full text-left py-2 px-4 bg-white rounded-md shadow flex justify-between items-center">
              <span className="text-blue-600 font-medium">Do I need to have prior Product Management and Project Management experience to enroll in the program?</span>
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p className="mt-2 px-4 text-gray-600">
              No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
            </p>
          </div>
          
          <div>
            <button className="w-full text-left py-2 px-4 bg-white rounded-md shadow flex justify-between items-center">
              <span className="text-blue-600 font-medium">What is the minimum system configuration required?</span>
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-600 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-10 h-10 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <div className="text-white">
            <h3 className="font-semibold">Want to delve deeper into the program?</h3>
            <p className="text-sm">Share your details to receive expert insights from our program team!</p>
          </div>
        </div>
        <button className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300">
          Get in touch &rarr;
        </button>
      </div>
    </div>
   
    </>
  );
};

export default FAQ;