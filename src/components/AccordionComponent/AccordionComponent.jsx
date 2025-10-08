'use client'
import React                from 'react'
import * as Accordion       from '@radix-ui/react-accordion'
import AccordionItem        from './AccordionItem'
import ResponsiveMap        from '../Map/ResponsiveMap'
import AmenitiesList        from '../Amenities/AmenitiesList'
import SimilarListings      from '../SimilarListings/SimilarListing'
import SingleListingReviews from '../SingleListingsReview/SingleListingsReview'

export default function AccordionDemo({ category, currentSlug, description, gallery }) {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8899469693887!2d9.70427831475395!3d4.050700297106854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMDIuNSJOIDnCsDQyJzI3LjQiRQ!5e0!3m2!1sen!2scm!4v1234567890123!5m2!1sen!2scm`

  const galleryImages = gallery || [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop',
  ]

  return (
    <Accordion.Root
      type="multiple"
      defaultValue={['item-1']}
      className="w-full rounded-md divide-y divide-slate-200 dark:divide-slate-700"
    >
      <AccordionItem value="item-1" title="Description">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {description ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem alias vitae molestias sapiente eum vero, natus reprehenderit quasi illum voluptatibus iste eligendi nihil autem dolores ratione eius, placeat dolorem.'}
        </p>
      </AccordionItem>

      <AccordionItem value="item-2" title="Features">
        <AmenitiesList />
      </AccordionItem>

      <AccordionItem value="item-3" title="Gallery">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((imageUrl, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              <img
                src={imageUrl}
                alt={`Gallery image ${i + 1}`}
                className="rounded-lg object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
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
