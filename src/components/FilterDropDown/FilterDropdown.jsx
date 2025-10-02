'use client'
// import { useState }        from 'react';
import React, { useState } from 'react';
import { ChevronDown }     from 'lucide-react';

const FilterDropdown = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  // State to store the selected filter option
  const [selectedOption, setSelectedOption] = useState('Default Order');

  // Define the filter options
  const filterOptions = [
    'Default Order',
    'Highest Rated',
    'Most Reviewed',
    'New Listings',
    'Old Listings',
    'Featured Listings',
    'Most Viewed',
    'Sort by A-Z',
  ];

  // Function to handle option selection and close dropdown
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle the dropdown */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center gap-2 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        {selectedOption}
        <ChevronDown
          className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown menu, shown conditionally */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            {filterOptions.map((option) => (
              <a
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;