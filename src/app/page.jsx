'use client'
import React             from 'react';
import Image             from 'next/image';
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
    <div className='min-h-screen bg-white overflow-x-hidden'>
      {/* Navigation Bar - Full Width */}
      <NavBarComponent />
      
      {/* Hero Section - Full Width */}
      <HeroComponent />
      
      {/* Main Content Container */}
      <main className='w-full'>
        
        {/* Categories Section */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h1 className='text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl'>
                Hot & Trending Categories
              </h1>
            </div>
            <TopCatSlider />
          </div>
        </section>
        
        {/* Popular Listings Section */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h1 className='text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl'>
                Popular Listing in Douala
              </h1>
            </div>
            <TopListingsSlider />
          </div>
        </section>
        
        {/* Reviews Section */}
        <section className='h-auto bg-gray-50'>
          <div className='max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-10'>
              <h1 className='text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl'>
                Our Great Reviews
              </h1>
            </div>
            <div className="relative pb-16 pt-2 w-full"> 
              <ReviewList />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl'>
                Explore Upcoming Events
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <EventComponent />
              <EventComponent />
              <EventComponent />
            </div>
            {/* Subscribe To Letter Section */}
          </div>
          <SubscribeLetter/>
        </section>
      </main>
      {/* Footer Section */}
      <FooterComponent />
    </div>
  );
}
export default Page;
