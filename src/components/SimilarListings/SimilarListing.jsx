'use client';
import React                    from 'react';
import { Swiper, SwiperSlide }  from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import listingsData             from '@/data/listingsData';   // adjust path to where your data lives
import ListingCardComponent     from '@/components/ListingCardComponent/ListingCardComponent';

const SimilarListings = ({ category }) => {
  // Filter listings that share the same category
  const similar = listingsData.filter(item => item.category === category);

  if (!similar.length) {
    return <p className="text-gray-500">No similar listings found.</p>;
  }

  // If only one result, render a single card (no slider)
  if (similar.length === 1) {
    return (
      <div className="flex justify-center">
        <ListingCardComponent listing={similar[0]} />
      </div>
    );
  }

  // Otherwise show swiper slider
  return (
    <div className="w-full mt-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
      >
        {similar.map(listing => (
          <SwiperSlide key={listing.id}>
            <ListingCardComponent listing={listing} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarListings;
