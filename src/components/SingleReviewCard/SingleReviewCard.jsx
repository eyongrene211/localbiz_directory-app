'use client'
import React, { useState } from 'react'
import Image               from 'next/image'

// Utility to return array like ['full', 'full', 'half', 'empty', 'empty']
function getStarIcons(rating) {
  const icons = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) icons.push('full')
    else if (rating >= i - 0.5) icons.push('half')
    else icons.push('empty')
  }
  return icons
}

// SVG for star types
const StarSVG = ({ type }) => (
  <svg viewBox="0 0 20 20" width="22" height="22" fill="none" className="inline-block">
    {type === 'full' && (
      <path fill="#fbbf24" stroke="#fbbf24"
            d="M10 1.8l2.65 6.37 6.92.57-5.25 4.52L16.09 19 10 15.7 3.91 19l1.77-5.76-5.25-4.52 6.92-.57L10 1.8z"/>
    )}
    {type === 'half' && (
      <>
        <defs>
          <linearGradient id="halfGradient">
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <path fill="url(#halfGradient)" stroke="#fbbf24"
              d="M10 1.8l2.65 6.37 6.92.57-5.25 4.52L16.09 19 10 15.7 3.91 19l1.77-5.76-5.25-4.52 6.92-.57L10 1.8z"/>
      </>
    )}
    {type === 'empty' && (
      <path fill="#e5e7eb" stroke="#d1d5db"
            d="M10 1.8l2.65 6.37 6.92.57-5.25 4.52L16.09 19 10 15.7 3.91 19l1.77-5.76-5.25-4.52 6.92-.57L10 1.8z"/>
    )}
  </svg>
)

const SingleReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false)
  const starTypes = getStarIcons(review.rating)

  const truncatedText = (text, maxLength = 140) =>
    !text ? ''
      : expanded || text.length <= maxLength ? text
      : text.slice(0, maxLength) + "..."

  return (
      <div className="w-full md:w-auto flex flex-col items-center justify-center">
          
      {/* Review Card Box */}
      <div className="bg-white shadow-xl rounded-2xl max-w-[355px] w-full mx-auto overflow-hidden transition-all duration-300 hover:shadow-2xl px-6 py-8 flex flex-col items-center"
           style={{ minHeight: '270px' }}>
        {/* Stars */}
        <div className="flex gap-1 items-center mb-3">
          {starTypes.map((type, idx) => <StarSVG type={type} key={idx} />)}
        </div>
        {/* Title */}
        <h3 className="font-bold text-center text-sm md:text-base mt-2 mb-2 text-gray-800">{review.title}</h3>
        {/* Review text */}
        <p className="text-center text-xs sm:text-sm text-gray-700 leading-relaxed max-w-[250px] min-h-[60px]">
          {truncatedText(review.content)}
          {review.content.length > 140 && (
            <span
              className="block mt-2 text-blue-600 cursor-pointer hover:underline select-none"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Read more."}
            </span>
          )}
        </p>
      </div>

      {/* Profile Section BELOW the Review Box */}
      <div className="flex flex-col items-center -mt-6 mb-2 p-4 bg-white rounded-xl shadow-sm w-full max-w-[280px]">
        <Image
          src={review.image || '/assets/images/closeup_pic1.jpg'}
          alt={`${review.author || 'User'} profile picture`}
          width={56}
          height={56}
          className="rounded-full border-2 border-blue-200 object-cover mb-3"
          quality={90}
        />
        <h2 className="font-semibold text-base text-gray-900 text-center">{review.author || "Anonymous"}</h2>
        <div className="text-xs text-blue-400 mb-1 font-medium uppercase tracking-wide text-center">
          {review.position || "User"}
        </div>
      </div>
    </div>
  )
}

export default SingleReviewCard
