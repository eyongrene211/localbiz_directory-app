'use client'
import React, { useState } from 'react'
import { ChevronDown }     from 'lucide-react'

const OPTIONS = [
  'Default Order',
  'Highest Rated',
  'Most Reviewed',
  'New Listings',
  'Old Listings',
  'Featured Listings',
  'Most Viewed',
  'Sort by A-Z',
]

const FilterDropdown = ({ value = 'Default Order', onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(value)

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange?.(option)
  }

  return (
    <div className="relative inline-block text-left z-40">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption}
        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 z-10">
          <ul className="py-1" role="listbox" aria-label="Sort options">
            {OPTIONS.map((option) => (
              <li key={option}>
                <a
                  onClick={() => handleOptionClick(option)}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer transition"
                  role="option"
                  aria-selected={selectedOption === option}
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown
