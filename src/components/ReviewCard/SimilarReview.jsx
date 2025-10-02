'use client'

import { Diamond, Star } from 'lucide-react'
import Image             from 'next/image'
import React             from 'react'
import reviewsData       from '@/data/reviewdata'

// Simple Review Card without Swiper for testing
const SimpleReviewCard = ({ review }) => {
  const renderStars = (rating = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i}>
        <Star 
          size={16} 
          className='sm:w-5 sm:h-5' 
          fill={i < rating ? "currentColor" : "none"}
          color={i < rating ? "#fbbf24" : "#d1d5db"}
        />
      </span>
    ))
  }

  const truncateContent = (text, maxLength = 200) => {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <div className='container relative flex flex-col gap-[40px] h-full mx-4 sm:mx-8 md:mx-12 lg:mx-[3rem] max-w-md mx-auto'>
      {/* Comment area */}
      <div className='gap-3 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-3 border rounded-2xl flex flex-col justify-start items-center relative z-20 bg-white'>
        <Diamond 
          className='absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 z-0' 
          size={44} 
          color='#D1D1D1FF'  
        />

        <div className='flex items-center gap-1'>
          {renderStars(review.rating)}
        </div>
        
        <h2 className='font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl'>
          {review.title}
        </h2>
        
        <p className='w-full max-w-[263px] sm:max-w-[320px] md:max-w-[400px] mx-auto text-center text-xs sm:text-sm md:text-base leading-relaxed'>
          {truncateContent(review.content)}
          {review.content && review.content.length > 200 && (
            <span className='block text-center mt-2 text-blue-500 cursor-pointer hover:underline'>
              Read more.
            </span>
          )}
        </p>
      </div>

      {/* Comment profile */}
      <div className='h-auto min-h-[107px] border flex flex-col items-center justify-center text-center relative z-30 bg-white rounded-lg p-4 sm:p-6'>
        <Image 
          src={review.image || '/assets/images/closeup_pic1.jpg'}
          alt={`${review.author || 'User'} profile picture`}
          width={50}
          height={50}
          quality={100}
          className='w-10 h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] rounded-full object-cover mb-2'
        />
        <h2 className='font-bold text-sm sm:text-base md:text-lg'>
          {review.author || 'Anonymous'}
        </h2>
        <p className='text-xs sm:text-sm text-[#4b4e52]'>
          {review.position || 'Customer'}
        </p>
      </div>
    </div>
  )
}

const TestReviewCard = () => {
  console.log('TestReviewCard rendering...')
  console.log('reviewsData:', reviewsData)

  if (!reviewsData || reviewsData.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-red-500">No reviews available</p>
      </div>
    )
  }

  // Show first review only for testing
  const firstReview = reviewsData[0]
  
  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Test Review Card</h1>
      <p className="text-center mb-4">Found {reviewsData.length} reviews</p>
      <SimpleReviewCard review={firstReview} />
    </div>
  )
}

export default TestReviewCard