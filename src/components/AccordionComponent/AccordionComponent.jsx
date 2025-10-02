'use client';
import React                from 'react';
import * as Accordion       from '@radix-ui/react-accordion';
import AccordionItem        from './AccordionItem';
import ResponsiveMap        from '../Map/ResponsiveMap';
import SingleListingReviews from '../Reviews/SingleListingReviews';
import AmenitiesList        from '../Amenities/AmenitiesList';
import SimilarListings      from '../SimilarListings/SimilarListing';

export default function AccordionDemo({ category }) {
  const mapSrc = `https://www.google.com/maps/embed?...`;

  return (
    <Accordion.Root
      type="multiple"
      defaultValue={['item-1']}
      className="w-full rounded-md divide-y divide-slate-200"
    >
      <AccordionItem value="item-1" title="Description">
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem alias vitae...
        </p>
      </AccordionItem>

      <AccordionItem value="item-2" title="Features">
        <AmenitiesList />
      </AccordionItem>

      <AccordionItem value="item-3" title="Gallery">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src="/assets/images/coffee.jpg"
              alt="gallery"
              className="rounded-lg object-cover w-full h-28"
            />
          ))}
        </div>
      </AccordionItem>

      <AccordionItem value="item-4" title="Map">
        <ResponsiveMap src={mapSrc} />
      </AccordionItem>

      <AccordionItem value="item-5" title="Reviews">
        <SingleListingReviews />
      </AccordionItem>

      <AccordionItem value="item-6" title="Similar Lists">
        <SimilarListings category={category} />
      </AccordionItem>
    </Accordion.Root>
  );
}
