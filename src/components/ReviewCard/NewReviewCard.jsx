'use client'

import { Diamond, Star } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import reviewsData from '@/data/reviewdata'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const SingleReviewCard = ({ review }) => {
  // Function to render stars based on rating
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

  // Function to truncate content
  const truncateContent = (text, maxLength = 200) => {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <div className='w-full flex flex-col items-center justify-center px-4 py-8'>
      {/* Comment area */}
      <div className='w-full max-w-md mx-auto mb-8'>
        <div className='gap-3 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-3 border rounded-2xl flex flex-col justify-start items-center relative z-20 bg-white'>
          {/* Diamond icon */}
          <Diamond 
            className='absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 z-0' 
            size={44} 
            color='#D1D1D1FF'  
          />

          {/* Dynamic star rating */}
          <div className='flex items-center gap-1'>
            {renderStars(review.rating)}
          </div>
          
          {/* Dynamic title */}
          <h2 className='font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl'>
            {review.title}
          </h2>
          
          {/* Dynamic content */}
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
          {/* Profile image */}
          <Image 
            src={review.image || '/assets/images/closeup_pic1.jpg'}
            alt={`${review.author || 'User'} profile picture`}
            width={50}
            height={50}
            quality={100}
            className='w-10 h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] rounded-full object-cover mb-2'
            onError={(e) => {
              e.target.src = '/assets/images/closeup_pic1.jpg'
            }}
          />
          {/* Author name */}
          <h2 className='font-bold text-sm sm:text-base md:text-lg'>
            {review.author || 'Anonymous'}
          </h2>
          {/* Position */}
          <p className='text-xs sm:text-sm text-[#4b4e52]'>
            {review.position || 'Customer'}
          </p>
        </div>
      </div>
    </div>
  )
}

const NewReviewCard = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render until mounted (prevents hydration issues)
  if (!isMounted) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading reviews...</p>
        </div>
      </div>
    )
  }

  if (!reviewsData || reviewsData.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500">No reviews available</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          // Mobile (default)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Small mobile
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // Tablet
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Medium tablet
          768: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          // Large tablet / Small desktop
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // Desktop
          1280: {
            slidesPerView: 1,
            spaceBetween: 35,
          },
          // Large desktop
          1536: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        className="review-swiper min-h-[500px]"
        style={{
          '--swiper-navigation-color': '#3b82f6',
          '--swiper-pagination-color': '#3b82f6',
          '--swiper-navigation-size': '24px',
        }}
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={review.id || index}>
            <SingleReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default NewReviewCard