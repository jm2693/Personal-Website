import React from 'react';

const ExperienceCard = ({ title, subtitle, bulletPoints }) => {
  return (
    <div className="bg-gray-200 rounded-2xl p-6 shadow-md">
      <div className="bg-yellow-100 text-yellow-800 font-bold px-4 rounded-md inline-block mb-1">
        {title}
      </div>
      <div className="bg-yellow-100 text-yellow-800 px-4 rounded-lg inline-block mb-2">
        {subtitle}
      </div>
      <ul className="space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index} className="bg-white rounded-md p-2 shadow-sm">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;