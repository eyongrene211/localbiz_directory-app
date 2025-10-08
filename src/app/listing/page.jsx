'use client'
import React            from 'react'
import NavBarComponent  from '@/components/NavBarComponent/NavBarComponent'
import FooterComponent  from '@/components/Footer/FooterComponent'
import ListingContainer from '@/components/ListingContainer/ListingContainer'
import { motion }       from 'framer-motion'

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <NavBarComponent />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Discover Local Businesses
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Browse through hundreds of verified local businesses and services across Cameroon
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ListingContainer />
      </main>

      <FooterComponent />
    </div>
  )
}
