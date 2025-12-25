import React from 'react';

const Timeline = ({ data }) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto p-4">
      
      
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
      <div className="space-y-12">
        {data.map((item, index) => (
          <div key={index} className={`relative flex items-center md:justify-between ${
             index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}>
            
          
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black shadow-lg z-10"></div>

      
            <div className="hidden md:block w-5/12"></div>

          
            <div className="ml-12 md:ml-0 w-full md:w-5/12 p-4 bg-gray-100 rounded-lg [box-shadow:3px_3px_#000000] hover:scale-105 transition-transform duration-300 font-jetbrains">
              
              
              <h3 className="text-xl font-bold text-gray-800 mt-1">
                {item.title}
              </h3>
              
              <p className="text-sm font-medium text-gray-500 mb-2">
                {item.company}
              </p>
              
            <img className='w-[70%] p-3' src={item.logo} alt="logo" />

            <p className="text-sm font-medium text-gray-500 mb-2">
                {item.duration}
              </p>
              
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;