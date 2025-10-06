'use client'

import React, { useEffect, useState }       from 'react'
import { Swiper, SwiperSlide }              from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import TopListingCard                       from './TopListingCard/TopListingCard'
import { listingsData }                     from '../data/listingsData'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const TopListingsSlider = ({
  title = 'Featured Listings',
  data = listingsData,
  autoplay = true,
  showNavigation = true,
  showPagination = true,
  loop = true,
}) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-50 dark:bg-slate-800 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading listings...</p>
        </div>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">No listings available</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={
            showNavigation
              ? {
                  nextEl: '.custom-swiper-button-next',
                  prevEl: '.custom-swiper-button-prev',
                }
              : false
          }
          pagination={
            showPagination
              ? {
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 4,
                }
              : false
          }
          autoplay={
            autoplay
              ? {
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          loop={loop && data.length > 4}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="listings-swiper"
          style={{
            '--swiper-navigation-color': '#3b82f6',
            '--swiper-pagination-color': '#3b82f6',
            '--swiper-navigation-size': '24px',
            paddingBottom: '50px',
          }}
        >
          {data.map((listing) => (
            <SwiperSlide key={listing.id}>
              <div className="h-full flex items-center justify-center py-4">
                <TopListingCard listing={listing} />
              </div>
            </SwiperSlide>
          ))}

          {showNavigation && data.length > 1 && (
            <>
              <div className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700 dark:text-gray-300"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </div>
              <div className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700 dark:text-gray-300"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </>
          )}
        </Swiper>
      </div>

      {/* Inline Swiper styles */}
      <style jsx>{`
        .listings-swiper .swiper-pagination {
          bottom: 10px !important;
        }
        .listings-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .listings-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.2);
        }
        @media (max-width: 640px) {
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            width: 35px;
            height: 35px;
          }
        }
        .custom-swiper-button-prev:hover,
        .custom-swiper-button-next:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  )
}

export default TopListingsSlider
