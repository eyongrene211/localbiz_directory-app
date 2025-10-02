'use client';
import React                from 'react';
import NavBarComponent      from '@/components/NavBarComponent/NavBarComponent';
import {
    BriefcaseBusiness, Calendar, Chromium, Facebook, Heart, Instagram,
    Mail, MapPin, Phone, Star, Twitter, YoutubeIcon
} from 'lucide-react';
import AccordionDemo        from '@/components/AccordionComponent/AccordionComponent';
import FooterComponent      from '@/components/Footer/FooterComponent';

import BusinessOwnerDetails from '@/components/BusinessOwnerDetails/BusinessOwnerDetails';
import SubscribeLetter      from '@/components/SubscribeSection/SubscribeLetter';

const Page = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <NavBarComponent />

            {/* Hero Section with background image */}
           <section
  className="relative w-full bg-[url('/assets/images/Healthpic.jpg')] bg-cover bg-center text-white h-[500px] sm:h-[550px] md:h-[600px] lg:h-[600px] xl:h-[650px]"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content Container */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center lg:justify-between lg:flex-row lg:items-end gap-6 lg:pb-12">

    {/* Left: Avatar + Title + Info */}
    <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-6">
      {/* Avatar */}
      <div className="w-24 h-24 md:w-28 md:h-28 p-2 bg-blue-500 rounded-lg flex-shrink-0">
        <img src="/assets/images/image.png" alt="avatar_pic" className="w-full h-full object-cover rounded-md" />
      </div>

      {/* Title + Location + Reviews */}
      <div className="flex flex-col justify-start gap-2">
        {/* Title */}
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Christmas Monday</h1>
          <span className="w-6 h-6">
            <img
              width={22}
              src="data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20561%20560'%20width='561'%20height='560'%3e%3cstyle%3e.a{fill:%232ca862}.b{fill:%23fff}%3c/style%3e%3cpath%20class='a'%20d='m561%20293.1c0%2019.6-4.7%2037.8-14.1%2054.4-9.4%2016.6-22%2029.6-37.9%2038.7q0.7%204.4%200.7%2013.8c0%2029.6-10%2054.8-29.7%2075.6-19.8%2020.9-43.6%2031.2-71.5%2031.2-12.5%200-24.4-2.3-35.6-6.8-8.8%2017.9-21.4%2032.3-37.9%2043.4-16.4%2011.1-34.4%2016.6-54%2016.6-20%200-38.2-5.4-54.4-16.3-16.3-10.8-28.7-25.4-37.5-43.7-11.3%204.5-23.1%206.8-35.7%206.8-27.8%200-51.8-10.3-71.8-31.2-20-20.8-30-46.1-30-75.6%200-3.3%200.5-7.9%201.2-13.8-15.8-9.2-28.4-22.1-37.8-38.7-9.3-16.6-14-34.8-14-54.4%200-20.8%205.2-39.9%2015.6-57.2%2010.4-17.3%2024.4-30.1%2041.9-38.4-4.6-12.4-6.9-25-6.9-37.5%200-29.5%2010-54.8%2030-75.6%2020-20.7%2044-31.2%2071.8-31.2%2012.5%200%2024.4%202.3%2035.7%206.8%208.8-17.9%2021.3-32.3%2037.8-43.4%2016.5-11%2034.5-16.6%2054.1-16.6%2019.6%200%2037.6%205.6%2054%2016.5%2016.4%2011.1%2029.1%2025.5%2037.9%2043.4%2011.2-4.6%2023-6.9%2035.6-6.9%2027.9%200%2051.7%2010.4%2071.5%2031.3%2019.8%2020.9%2029.7%2046.1%2029.7%2075.6%200%2013.8-2.1%2026.3-6.3%2037.5%2017.5%208.3%2031.5%2021.1%2041.9%2038.4%2010.4%2017.4%2015.7%2036.5%2015.7%2057.3z'/%3e%3cpath%20class='b'%20d='m137.7%20310l30.9-38.9%2077.9%2061.7%20138.8-175.4%2038.9%2030.9-169.6%20214.3z'/%3e%3c/svg%3e"
              alt="verified"
            />
          </span>
        </div>

        {/* Location & Category */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm text-white/90">
          <div className="flex items-center gap-2 flex-wrap">
            <MapPin /> Old Paris, France
            <BriefcaseBusiness /> Events & Weddings
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-2">
            <ul className="flex items-center gap-[2px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}><Star size={16} /></li>
              ))}
            </ul>
            <span className="text-sm">(42 Reviews)</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Event Time + Call Button */}
    <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-3 mt-4 md:mt-0">
      <div className="flex flex-col text-white">
        <span className="text-sm">Event Time</span>
        <p className="text-lg md:text-base">24 Nov 2024 - 10:30AM To 14:30PM</p>
      </div>
      <button className="mt-2 md:mt-0 w-36 h-14 flex items-center justify-center gap-2 rounded-full border border-white text-white hover:bg-white/10 transition">
        <Phone /> Call Now
      </button>
    </div>
  </div>
</section>



            {/* Main Content */}
            <main className="w-full pb-20">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <AccordionDemo category="Events & Weddings" />

                        {/* Right Column */}
                        <BusinessOwnerDetails />
                    </div>
                </section>
            </main>
                    <SubscribeLetter/>

            <FooterComponent />
        </div>
    );
};

export default Page;
