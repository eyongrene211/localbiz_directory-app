'use client'

import React, { useEffect, useState }       from 'react'
import { Swiper, SwiperSlide }              from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import TopListingCard                       from './TopListingCard/TopListingCard'
import { listingsData }                     from '../data/listingsData'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const TopListingsSlider = ({ 
  title = "Featured Listings", 
  data = listingsData, 
  autoplay = true,
  showNavigation = true,
  showPagination = true,
  loop = true 
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render until mounted (prevents hydration issues)
  if (!isMounted) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading listings...</p>
        </div>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500">No listings available</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Slider Container */}
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={showNavigation ? {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          } : false}
          pagination={showPagination ? {
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 4,
          } : false}
          autoplay={autoplay ? {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          } : false}
          loop={loop && data.length > 4} // Only loop if we have more than 4 items
          breakpoints={{
            // Mobile (320px - 639px): 1 slide
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            // Mobile landscape (480px): 1 slide with more space
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Tablet (640px - 1023px): 2 slides
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Tablet landscape (768px): 2 slides
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            // Small desktop (1024px): 3 slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            // Large desktop (1280px+): 4 slides
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="listings-swiper"
          style={{
            '--swiper-navigation-color': '#3b82f6',
            '--swiper-pagination-color': '#3b82f6',
            '--swiper-navigation-size': '24px',
            paddingBottom: '50px', // Space for pagination
          }}
        >
          {data.map((listing) => (
            <SwiperSlide key={listing.id}>
              <div className="h-full flex justify-center">
                <TopListingCard listing={listing} />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          {showNavigation && data.length > 1 && (
            <>
              <div className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </div>
              <div className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </>
          )}
        </Swiper>
      </div>

      {/* Custom Styles */}
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