'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide }        from 'swiper/react'
import { Pagination, Autoplay }       from 'swiper/modules' // Removed Navigation import
import reviewsData                    from '@/data/reviewsData'
import SingleReviewCard               from '../SingleReviewCard/SingleReviewCard'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
// import './review-swiper.css' // <--- Custom CSS for theme bullets (see next section)

const ReviewList = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return (
      <div className="w-full h-auto flex items-center justify-center bg-gray-50 rounded-lg">
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
    <div className="w-full h-auto">
      <Swiper
        modules={[Pagination, Autoplay]} // No Navigation here
        spaceBetween={25}
        centeredSlides={false}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        style={{ paddingBottom: '56px', paddingTop: '8px' }}
        breakpoints={{
          320:   { slidesPerView: 1, spaceBetween: 8 },
          480:   { slidesPerView: 1, spaceBetween: 14 },
          640:   { slidesPerView: 1, spaceBetween: 18 },
          768:   { slidesPerView: 2, spaceBetween: 20 },
          1024:  { slidesPerView: 3, spaceBetween: 24 },
          1280:  { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="review-swiper"
      >
        {reviewsData.map((review) => (
          <SwiperSlide
            key={review.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              minHeight: '390px'
            }}
          >
            <SingleReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ReviewList
