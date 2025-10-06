'use client'
import React                from 'react'
import * as Accordion       from '@radix-ui/react-accordion'
import AccordionItem        from './AccordionItem'
import ResponsiveMap        from '../Map/ResponsiveMap'
import AmenitiesList        from '../Amenities/AmenitiesList'
import SimilarListings      from '../SimilarListings/SimilarListing'
import SingleListingReviews from '../SingleListingsReview/SingleListingsReview'

export default function AccordionDemo({ category, currentSlug, description }) {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8899469693887!2d9.70427831475395!3d4.050700297106854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMDIuNSJOIDnCsDQyJzI3LjQiRQ!5e0!3m2!1sen!2scm!4v1234567890123!5m2!1sen!2scm`

  return (
    <Accordion.Root
      type="multiple"
      defaultValue={['item-1']}
      className="w-full rounded-md divide-y divide-slate-200 dark:divide-slate-700"
    >
      <AccordionItem value="item-1" title="Description">
        <p className="text-slate-700 dark:text-slate-300">
          {description ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem alias vitae molestias sapiente eum vero, natus reprehenderit quasi illum voluptatibus iste eligendi nihil autem dolores ratione eius, placeat dolorem.'}
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
        <SimilarListings category={category} currentSlug={currentSlug} />
      </AccordionItem>
    </Accordion.Root>
  )
}
