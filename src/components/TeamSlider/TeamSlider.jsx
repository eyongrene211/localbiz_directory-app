// components/TeamSlider/TeamSlider.jsx

'use client'
import React                                from 'react'
import { Swiper, SwiperSlide }              from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import TeamMemberCard                       from '../TeamMemberCard/TeamMemberCard'
import { teamMembers }                      from '@/data/teamData'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const TeamSlider = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <style jsx global>{`
        /* Custom Swiper styling */
        .swiper-slide {
          height: auto;
          display: flex;
          justify-content: center;
          align-items: stretch;
        }

        /* Pagination dots styling */
        .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2563eb;
        }

        .swiper-pagination {
          bottom: -40px !important;
        }

        /* Navigation arrows styling */
        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6;
          width: 40px;
          height: 40px;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px;
          font-weight: bold;
        }

        .swiper-button-prev {
          left: -45px;
        }

        .swiper-button-next {
          right: -45px;
        }

        /* Hide navigation arrows on mobile and tablet */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }

        /* Add padding to container for navigation arrows */
        @media (min-width: 769px) {
          .team-swiper-container {
            padding: 0 50px;
          }
        }

        /* Adjust pagination position on mobile */
        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: -45px !important;
          }
        }
      `}</style>

      <div className="team-swiper-container pb-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          breakpoints={{
            // Mobile (>= 640px)
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // Tablet (>= 768px)
            768: {
              slidesPerView: 2,
              spaceBetween: 25
            },
            // Desktop (>= 1024px)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // Large Desktop (>= 1280px)
            1280: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
          className="team-swiper"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamMemberCard
                name={member.name}
                position={member.position}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TeamSlider
