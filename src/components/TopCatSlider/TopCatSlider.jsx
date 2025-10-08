'use client'

import React                   from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import { Autoplay, FreeMode }  from 'swiper/modules'
import { topCatList }          from '../../data/topCatList'

const TopCatSlider = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-6">
      <Swiper
        freeMode={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {topCatList.map((item) => {
          const IconComponent = item.catIcon
          return (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div
                className="w-full max-w-[350px] h-[230px] rounded-xl shadow-lg relative overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 group"
              >
                {/* Background image hidden by default, shown on hover */}
                <div
                  className={
                    `absolute inset-0 bg-cover bg-center rounded-xl transition-opacity duration-500 ` + 
                    `opacity-0 group-hover:opacity-100`
                  }
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                {/* Base background */}
                <div className="absolute inset-0 group-hover:bg-gradient-to-tr from-black/50 to-black/50 dark:from-slate-900/80 dark:to-slate-900/70 rounded-xl z-10" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 space-y-4 z-20">
                  <IconComponent className="w-12 h-12 p-3 bg-blue-100 rounded-xl text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white" />
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-white group-hover:font-extrabold transition-colors truncate">
                    {item.catName}
                  </h2>
                  <p className="bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 group-hover:bg-white group-hover:text-blue-600 transition-colors truncate">
                    {item.catList}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default TopCatSlider
