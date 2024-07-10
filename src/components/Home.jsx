
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-sky-100 p-4 text-black text-sm text-center">
        Navigate your ideal career path with tailored expert advice
        <a href="#" className="ml-16 underline">Contact Expert</a>
      </div>
      <nav className="bg-white py-4 px-8 flex justify-between items-center shadow-lg">
        <div className="flex items-center">
          <span className="text-blue-600 text-3xl font-semibold">accredian</span>

          <span><button className="bg-blue-600 text-white py-2 px-4 rounded ml-9">Courses<ExpandMoreIcon /></button></span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-600">Resources</a>
          <a href="#" className="text-gray-600">About Us</a>
          <a href="#" className="text-black bg-slate-200 rounded-lg p-3">Login</a>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Try for free</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-blue-50 p-6 shadow-lg z-50">
            <button onClick={toggleMenu} className="text-blue-600 mb-4">
              <X />
            </button>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-blue-600">Courses</a>
              <a href="#" className="text-gray-600">Resources</a>
              <a href="#" className="text-gray-600">About Us</a>
              <a href="#" className="text-gray-600">Login</a>
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Try for free</button>
            </div>
          </div>
        </div>
      )}

     
      
    </>
  );
};

export default Navbar;
