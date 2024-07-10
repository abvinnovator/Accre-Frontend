import React, { useState } from 'react';
import axios from 'axios';

const ReferralModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let formErrors = {};
    if (!formData.referrerName) formErrors.referrerName = 'Your name is required';
    if (!formData.referrerEmail) {
      formErrors.referrerEmail = 'Your email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      formErrors.referrerEmail = 'Invalid email address';
    }
    if (!formData.refereeName) formErrors.refereeName = 'Friend\'s name is required';
    if (!formData.refereeEmail) {
      formErrors.refereeEmail = 'Friend\'s email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
      formErrors.refereeEmail = 'Invalid email address';
    }
    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await axios.post('http://localhost:3000/api/referrals', formData);
        setSuccessMessage(response.data.message);
        setTimeout(() => {
          onClose();
          setSuccessMessage('');
        }, 3000);
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        setErrors({ submit: error.response?.data?.error || 'Failed to submit referral' });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-full max-w-md mx-4 p-6 rounded-lg overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Refer a Friend</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        {successMessage && <p className="text-green-600 text-sm mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.referrerName && <p className="text-red-600 text-sm">{errors.referrerName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.referrerEmail && <p className="text-red-600 text-sm">{errors.referrerEmail}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Friend's Name</label>
            <input
              type="text"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.refereeName && <p className="text-red-600 text-sm">{errors.refereeName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Friend's Email</label>
            <input
              type="email"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.refereeEmail && <p className="text-red-600 text-sm">{errors.refereeEmail}</p>}
          </div>
          {errors.submit && <p className="text-red-600 text-sm mb-4">{errors.submit}</p>}
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
