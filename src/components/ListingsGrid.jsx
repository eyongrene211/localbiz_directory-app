import React from 'react'
import TopListingCard from './TopListingCard/TopListingCard'
import { listingsData } from '../data/listingsData'

const ListingsGrid = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>Featured Listings</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {listingsData.map((listing) => (
          <TopListingCard 
            key={listing.id} 
            listing={listing} 
          />
        ))}
      </div>
    </div>
  )
}

export default ListingsGrid