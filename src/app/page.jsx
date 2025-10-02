import React             from 'react';
import Image             from 'next/image';
import NavBarComponent   from '@/components/NavBarComponent/NavBarComponent';
import HeroComponent     from '../components/HeroComponent/HeroComponent';
import { Cat }           from 'lucide-react';
import CatCard           from '@/components/CatCard/CatCard';
import { categories }    from '@/data/categories';
import ActiveSlider      from '@/components/ListingContainer/ListingContainer';
import TopCatSlider      from '@/components/TopCatSlider/TopCatSlider';
import { motion }        from "motion/react";
import TopListingCard    from '@/components/TopListingCard/TopListingCard';
import ReviewCard        from '@/components/ReviewCard/ReviewCard';
import TopListingsSlider from '@/components/TopListingsSlider';
import ListingsGrid      from '@/components/ListingsGrid';
import EventComponent    from '@/components/EventComponent/EventComponent';
import FooterComponent   from '@/components/Footer/FooterComponent';
import SubscribeLetter   from '@/components/SubscribeSection/SubscribeLetter';
import "@radix-ui/themes/styles.css";

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
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h1 className='text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl'>
                Our Great Reviews
              </h1>
            </div>
            <ReviewCard />
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
        
        </section>
            <SubscribeLetter/>
      </main>
      
      {/* Footer Section */}
      <FooterComponent />
    </div>
  );
  
}
export default Page;