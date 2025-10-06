import React    from 'react'
import { Star } from 'lucide-react'
import Image    from 'next/image'

const SingleReviewCard = ({ review }) => {
  // Render stars by rating
  const renderStars = (rating = 5) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className="mx-[1px]"
        fill={i < rating ? "#fbbf24" : "none"}
        color={i < rating ? "#fbbf24" : "#d1d5db"}
      />
    ))

  // Truncate content
  const truncateContent = (text, maxLength = 180) =>
    text && text.length > maxLength
      ? text.slice(0, maxLength) + '...'
      : text

  return (
    <div className="flex flex-col items-center w-full h-full px-2 py-4">
      {/* Card */}
      <div className="relative bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 shadow-lg rounded-2xl p-6 flex flex-col items-center w-full max-w-[340px] min-h-[370px] mx-auto">
        {/* Stars */}
        <div className="flex items-center mb-2 mt-1">{renderStars(review.rating)}</div>
        <h2 className="font-bold text-lg text-center text-gray-800 dark:text-gray-100 mb-2 truncate">
          {review.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4 max-w-[260px] overflow-hidden leading-relaxed">
          {truncateContent(review.content)}
          {review.content && review.content.length > 180 && (
            <span className="text-blue-500 ml-1 cursor-pointer hover:underline">Read more</span>
          )}
        </p>
        {/* Decorative triangle */}
        <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-900 w-7 h-7 rotate-45 border-l border-t border-gray-100 dark:border-slate-700 z-2" />
      </div>
      {/* Profile Bar */}
      <div className="relative mt-5 md:mt-8  z-20  dark:bg-slate-800     flex flex-col items-center  mx-auto">
        <Image
          src={review.image || '/assets/images/closeup_pic1.jpg'}
          alt={(review.author || 'User') + " profile"}
          width={44}
          height={44}
          quality={80}
          className="rounded-full object-cover border-4 border-white dark:border-slate-800 mb-1"
        />
        <h3 className="font-semibold text-gray-700 dark:text-gray-100 text-md">
          {review.author || 'Anonymous'}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{review.position || 'Customer'}</p>
      </div>
    </div>
  )
}

export default SingleReviewCard
