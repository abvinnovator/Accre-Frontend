import React,{useState} from 'react';
import money from '../assets/money.png'
import smart from '../assets/img.png'
import how from '../assets/ste.png'

import ReferralBenefits from './ReferalBenefits';
import ReferralModal from './ReferralModal';
const ReferEarn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="bg-slate-100 min-h-screen p-8">
      <nav className="mb-8 ">
        <ul className="flex justify-center space-x-8 bg-white rounded-full shadow-md p-4 max-w-xl mx-auto">
          <li><a href="#" className="text-blue-600 font-semibold">Refer</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Benefits</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Support</a></li>
        </ul>
      </nav>

      <div className="bg-cyan-50 rounded-3xl shadow-lg overflow-hidden max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Learn & Earn</h1>
            <p className="text-xl mb-6">
              Get a chance to win up-to <span className="text-blue-600 font-semibold">Rs. 15,000</span>
            </p>
            <button onClick={handleOpenModal} className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out w-40">
              Refer Now
            </button>
          </div>        
         
          <div className="md:w-1/2 relative">
            <img src={smart} alt="People with smartphone" className="w-full h-full object-cover border-none md:mb-0 mb-8" />
            <img src={money} alt="Money" className="absolute top-4 left-4 w-16 h-12 rotate-12 hidden md:block" />
            <img src={money} alt="Money" className="absolute bottom-4 right-4 w-16 h-12 -rotate-12 hidden md:block" />
          </div>
          <ReferralModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>
      <div className="bg-blue-50 py-24 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-8">
        How Do I <a href="#" className="text-blue-600 underline">Refer?</a>
      </h2>
      <div className="flex justify-center mb-8">
        <img
          src={how}
          alt="Referral Steps"
          className="w-full max-w-6xl md:max-w-4xl lg:max-w-3xl"
        />
      </div>
      <button className="bg-blue-600 text-white py-2 px-6 rounded">
        Refer Now
      </button>
    </div>
      <ReferralBenefits />
    </div>
   
    </>
  );
};

export default ReferEarn;
