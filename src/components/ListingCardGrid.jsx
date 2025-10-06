import React                from 'react'
import ListingCardComponent from './ListingCardComponent/ListingCardComponent'

const ListingCardGrid = ({ data = [] }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {data.map((listing) => (
          <ListingCardComponent key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  )
}

export default ListingCardGrid
