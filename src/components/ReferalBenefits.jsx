import React from 'react';
import { Switch } from '@mui/material';
import FAQ from './FAQ';

const programs = [
  { name: 'Professional Certificate Program in Product Management', referrer: '₹ 7,000', referee: '₹ 9,000' },
  { name: 'PG Certificate Program in Strategic Product Management', referrer: '₹ 9,000', referee: '₹ 11,000' },
  { name: 'Executive Program in Data Driven Product Management', referrer: '₹ 10,000', referee: '₹ 10,000' },
  { name: 'Executive Program in Product Management and Digital Transformation', referrer: '₹ 10,000', referee: '₹ 10,000' },
  { name: 'Executive Program in Product Management', referrer: '₹ 10,000', referee: '₹ 10,000' },
  { name: 'Advanced Certification in Product Management', referrer: '₹ 10,000', referee: '₹ 10,000' },
  { name: 'Executive Program in Product Management and Project Management', referrer: '₹ 10,000', referee: '₹ 10,000' }
];
const program = [
    'ALL PROGRAMS',
    'PRODUCT MANAGEMENT',
    'STRATEGY & LEADERSHIP',
    'BUSINESS MANAGEMENT',
    'FINTECH',
    'SENIOR MANAGEMENT',
    'DATA SCIENCE',
    'DIGITAL TRANSFORMATION',
    'BUSINESS ANALYTICS'
  ];
const ReferralBenefits = () => {

  return (
    <>
    <div className="bg-gray-100 p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-4">
      <div className="bg-white rounded-lg shadow-md w-64">
      {program.map((progra, index) => (
        <div 
          key={index} 
          className={`flex justify-between items-center p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200
            ${index === 0 ? 'bg-blue-500 text-white rounded-t-lg' : 'border-t'}
            ${index === program.length - 1 ? 'rounded-b-lg' : ''}`}
        >
          <span className={`font-semibold ${index === 0 ? 'text-white' : 'text-gray-700'}`}>
            {progra}
          </span>
          <span className={`${index === 0 ? 'text-white' : 'text-gray-400'}`}>
            &gt;
          </span>
        </div>
      ))}
    </div>
    
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow">
         
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-100">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-blue-800">Programs</th>
                  <th className="text-left py-3 px-4 font-semibold text-blue-800">Referrer Bonus</th>
                  <th className="text-left py-3 px-4 font-semibold text-blue-800">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 flex items-center">
                      <span className="text-blue-600 mr-2">🎓</span>
                      {program.name}
                    </td>
                    <td className="py-3 px-4">{program.referrer}</td>
                    <td className="py-3 px-4">{program.referee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end p-2">
            <span className="mr-2">Enrolled</span>
            <Switch defaultChecked color="primary" />
          </div>
      </div>
      
    </div>
    <FAQ />
    </>
  );
};

export default ReferralBenefits;