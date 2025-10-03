// ProcessStepCard.jsx

import React from 'react';

/**
 * A reusable component for displaying a single step in a process.
 * Includes responsive styling for icons, titles, and descriptions.
 */
const ProcessStepCard = ({ Icon, title, description, stepNumber }) => {
    return (
        <div className='flex flex-col items-center p-4 text-center group transition duration-300 hover:shadow-xl rounded-lg border border-transparent hover:border-blue-400'>
            {/* Icon and Step Number Container */}
            <div className='relative w-fit'>
                {/* Step Icon */}
                <div className='w-fit rounded-full p-4 sm:p-5 bg-blue-300 transition duration-300 group-hover:bg-blue-400'>
                    {/* Render the Lucide or SVG Icon provided */}
                    <Icon className="w-8 h-8 text-blue-800 transition duration-300 group-hover:text-white" />
                </div>
                {/* Step Number Badge */}
                <span className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
                                bg-blue-500 text-white text-xs font-bold 
                                rounded-full w-6 h-6 flex items-center justify-center 
                                border-2 border-white'>
                    {stepNumber}
                </span>
            </div>
            
            {/* Title */}
            <h2 className='font-bold text-xl mt-4 mb-2'>
                {title}
            </h2>
            {/* Description */}
            <p className='text-gray-600 text-sm'>
                {description}
            </p>
        </div>
    );
};

export default ProcessStepCard;