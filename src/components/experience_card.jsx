import React from 'react';

const ExperienceCard = ({ title, subtitle, bulletPoints }) => {
  // for (let i = 0; i < bulletPoints.length(); i++) {
  //   let tempList = bulletPoints[i].split('#/');
  //   if (title === 'Software Engineer') {
  //     tempList.splice(0, 1, '')
  //   } else if (title === 'Web Developer') {
  //     tempList.splice()
  //   }
  // } 

  return (
    <div className="bg-transparent backdrop-blur-sm rounded-2xl p-6 shadow-md mb-6">
      <div className={`text-xl font-museomoderno font-bold px-1 rounded-md inline-block ${subtitle === '' ? 'mb-4' : 'mb-1'}`}>
        {title}
      </div>
      <div>
        {subtitle !== '' && (
          <div className="px-1 rounded-lg inline-block mb-2">
            {subtitle}
          </div>
        )}
      </div>
      <ul className="space-y-2 ml-6">
        {bulletPoints.map((point, index) => (
          <li key={index} className="bg-primaryBrown font-semibold bg-opacity-10 backdrop-blur-lg rounded-md p-2 shadow-sm">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;