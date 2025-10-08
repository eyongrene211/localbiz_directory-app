import React from 'react'

const ElectronicsIcon = ({ className = 'w-6 h-6', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

export default ElectronicsIcon
