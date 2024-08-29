import React from 'react';

const ExperienceCard = ({ title, subtitle, bulletPoints }) => {
  return (
    <div className="bg-lightYellow rounded-2xl p-6 shadow-md mb-6">
      <div className={`text-xl font-museomoderno font-bold px-1 rounded-md inline-block ${subtitle === '' ? 'mb-4' : 'mb-1'}`}>
        {title}
      </div>
      {subtitle !== '' && (
        <div className="px-1 rounded-lg inline-block mb-2">
          {subtitle}
        </div>
      )}
      <ul className="space-y-2 ml-6">
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