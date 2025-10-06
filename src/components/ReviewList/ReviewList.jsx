'use client'
import React                                from 'react'
import { Swiper, SwiperSlide }              from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { generalReviews }                   from '@/data/reviewsData'
import StarRating                           from '@/components/StarRating/StarRating'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ReviewList() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {generalReviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
                />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {review.position}
                  </p>
                </div>
              </div>

              {/* Rating & Title */}
              <div className="mb-3">
                <StarRating rating={review.rating} size={16} />
                <h5 className="font-semibold text-slate-800 dark:text-slate-100 mt-2">
                  {review.title}
                </h5>
              </div>

              {/* Content */}
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {review.content}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
