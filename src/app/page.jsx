'use client'

import React             from 'react';
import NavBarComponent   from '@/components/NavBarComponent/NavBarComponent';
import HeroComponent     from '../components/HeroComponent/HeroComponent';
import TopCatSlider      from '@/components/TopCatSlider/TopCatSlider';
import TopListingsSlider from '@/components/TopListingsSlider';
import EventComponent    from '@/components/EventComponent/EventComponent';
import FooterComponent   from '@/components/Footer/FooterComponent';
import SubscribeLetter   from '@/components/SubscribeSection/SubscribeLetter';
import ReviewList        from '@/components/ReviewList/ReviewList';

const Page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden transition-colors duration-300 flex flex-col">
      <NavBarComponent />
      <HeroComponent />
      <main className="flex-1 w-full">

        {/* Hot & Trending Categories */}
        <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl lg:text-5xl text-center mb-12">
              Hot & Trending Categories
            </h1>
            <TopCatSlider />
          </div>
        </section>

        {/* Popular Listing */}
        <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl lg:text-5xl text-center mb-12">
              Popular Listing in Douala
            </h1>
            <div className="w-full">
              <TopListingsSlider />
            </div>
          </div>
        </section>

        {/* Our Great Reviews */}
        <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl lg:text-5xl text-center mb-10">
              Our Great Reviews
            </h1>
            <div className="relative pb-16 pt-2 w-full max-w-6xl mx-auto">
              <ReviewList />
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl lg:text-5xl text-center mb-12">
              Explore Upcoming Events
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EventComponent />
              <EventComponent />
              <EventComponent />
            </div>
          </div>
           
        </section>
      </main>
              <SubscribeLetter />
      <FooterComponent />
    </div>
  );
};

export default Page;
