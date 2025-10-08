'use client'

import React             from 'react';
import Link              from 'next/link';
import { motion }        from 'framer-motion';
import NavBarComponent   from '@/components/NavBarComponent/NavBarComponent';
import HeroComponent     from '../components/HeroComponent/HeroComponent';
import TopCatSlider      from '@/components/TopCatSlider/TopCatSlider';
import TopListingsSlider from '@/components/TopListingsSlider';
import EventComponent    from '@/components/EventComponent/EventComponent';
import FooterComponent   from '@/components/Footer/FooterComponent';
import SubscribeLetter   from '@/components/SubscribeSection/SubscribeLetter';
import ReviewList        from '@/components/ReviewList/ReviewList';
import AnimatedSection   from '@/components/AnimatedSection/AnimatedSection';
import { blogPosts }     from '@/data/blogData';
import { ArrowRight }    from 'lucide-react';

const Page = () => {
  // Get first 3 blog posts for homepage
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden transition-colors duration-300 flex flex-col">
      <NavBarComponent />
      <HeroComponent />
      
      <main className="flex-1 w-full">

        {/* Hot & Trending Categories */}
        <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="down" duration={0.7}>
              <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl lg:text-5xl text-center mb-12">
                Hot & Trending Categories
              </h1>
            </AnimatedSection>
            
            {/* ✅ FIXED: Removed negative margin */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <TopCatSlider />
            </motion.div>
          </div>
        </section>

        {/* Popular Listing */}
        <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="fade" duration={0.7}>
              <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl lg:text-5xl text-center mb-12">
                Popular Listing in Douala
              </h1>
            </AnimatedSection>
            
            {/* ✅ FIXED: Removed negative margin */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <TopListingsSlider />
            </motion.div>
          </div>
        </section>

        {/* Our Great Reviews */}
        <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="down" duration={0.7}>
              <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl lg:text-5xl text-center mb-10">
                Our Great Reviews
              </h1>
            </AnimatedSection>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pb-16 pt-2 w-full max-w-6xl mx-auto"
            >
              <ReviewList />
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with View All Link */}
            <AnimatedSection direction="fade" duration={0.6}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
                <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl lg:text-5xl">
                  Explore Upcoming Events
                </h2>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors group"
                >
                  View All Events
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Events Grid with Staggered Animation */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <AnimatedSection 
                  key={post.id} 
                  direction="up" 
                  delay={0.1 + (index * 0.15)} 
                  duration={0.6}
                >
                  <EventComponent post={post} />
                </AnimatedSection>
              ))}
            </div>

            {/* Mobile View All Button */}
            <AnimatedSection direction="fade" delay={0.5}>
              <div className="mt-10 flex justify-center sm:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  View All Events
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <AnimatedSection direction="up" duration={0.8}>
        <SubscribeLetter />
      </AnimatedSection>
      
      <FooterComponent />
    </div>
  );
};

export default Page;
