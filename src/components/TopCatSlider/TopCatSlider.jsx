'use client';
import React                                                    from 'react'
import { Swiper, SwiperSlide }                                  from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { topCatList }                                           from '../../data/topCatList';
import { Autoplay, Navigation, FreeMode, Pagination }           from 'swiper/modules';



const TopCatSlider = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Swiper 
                className='mySwiper w-full h-fit flex justify-start items-start'

                    freeMode={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    // navigation={true}
                    // pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination, Autoplay, Navigation]}
                    
                     breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 5 },
    640: { slidesPerView: 2, spaceBetween: 5 },
    768: { slidesPerView: 3, spaceBetween: 10 },
    1024: { slidesPerView: 5, spaceBetween: 10 },
  }}
                >

                    {topCatList.map((item) => {
                        const IconComponent = item.catIcon;
                        return (
                            <>
                                <SwiperSlide key={item.id}>
                                    <div
                                        key={item.id}
                                        className="w-full max-w-[290px] border mx-auto my-42 md:min-w-[225px] md:max-w-[320px] lg:min-w-[225px] lg:max-w-[265px] p-[20px] relative group  border-[#f7f7f7] h-[228px] bg-[#f7f7f7] bg-cover group-hover:opacity-20  group-hover:bg-white  shadow-xl rounded-xl  flex-shrink-0  hover:bg-[url('/assets/images/Healthpic.jpg')] bg-center  group-hover:ease-in-out overflow-hidden"
                                        
                                    >
                                        <div className='absolute  w-full h-full inset-0  group-hover:bg-[#00000098]   rounded-2xl group-hover:transition duration-300'>

                                        <div
                                            className="  w-full h-full flex flex-col justify-center items-center rounded-lg gap-5"
                                
                                            >
                                                
                                            <IconComponent  className="w-12 h-12 text-blue-600  text-center p-[10px_10px] rounded-2xl bg-gray-200 group-hover:bg-[#ffffff70]   opacity-100 z-20"  />
                            
                                
                                        <h2 className="mt-3 font-semibold text-lg text-gray-800 group-hover:text-white  group-hover:font-extrabold  ">
                                            {item.catName}
                                        </h2>
                                        <p className=" text-sm bg-gray-200 w-15 text-center group-hover:bg-[#f7f7f7]  p-2 rounded-3xl">{item.catList}</p>
                                            </div>
                                        </div>

                                        

                                    </div></SwiperSlide>
                            </>
                    )}     
                    )}


                </Swiper>
        </div>
    )
}

export default TopCatSlider;