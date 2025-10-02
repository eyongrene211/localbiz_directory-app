import React from 'react'
import TopListingsSlider from './TopListingsSlider'
import { listingsData } from '../data/listingsData'

const ExampleSliderPage = () => {
  // You can filter or modify data as needed
  const featuredListings = listingsData.filter(listing => listing.isFeatured)
  const allListings = listingsData

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Local Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the best restaurants, cafes, services, and more in your area
          </p>
        </div>
      </div>

      {/* Featured Listings Slider */}
      <section className="bg-white">
        <TopListingsSlider 
          title="Featured Listings" 
          data={featuredListings}
          autoplay={true}
          showNavigation={true}
          showPagination={true}
          loop={true}
        />
      </section>

      {/* All Listings Slider */}
      <section className="bg-gray-50">
        <TopListingsSlider 
          title="All Listings" 
          data={allListings}
          autoplay={false}
          showNavigation={true}
          showPagination={false}
          loop={false}
        />
      </section>

      {/* Coffee Shops Only */}
      <section className="bg-white">
        <TopListingsSlider 
          title="Coffee Shops" 
          data={listingsData.filter(listing => listing.category === "Coffee Shop")}
          autoplay={true}
          showNavigation={false}
          showPagination={true}
          loop={true}
        />
      </section>
    </div>
  )
}

export default ExampleSliderPage