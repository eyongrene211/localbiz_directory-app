import React                from 'react'
import TopListingCard       from './TopListingCard/TopListingCard'
import { listingsData }     from '../data/listingsData'
import ListingCardComponent from './ListingCardComponent/ListingCardComponent'

const ListingCardGrid = () => {
  return (
    <div className='container mx-auto '>
      <h1 className='text-3xl font-bold text-center mb-8'>Featured Listings</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 '>
        {listingsData.map((listing) => (
          <ListingCardComponent
            key={listing.id} 
            listing={listing} 
          />
        ))}
      </div>
    </div>
  )
}

export default ListingCardGrid