'use client'
import React                                 from 'react'
import Link                                  from 'next/link'
import { listingsData }                      from '@/data/listingsData'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import StarRating                            from '@/components/StarRating/StarRating'

export default function SimilarListings({ category, currentSlug }) {
  const scrollContainerRef = React.useRef(null)

  const similar = listingsData
    .filter((item) => item.category === category && item.slug !== currentSlug)
    .slice(0, 8)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount)

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    }
  }

  if (similar.length === 0) {
    return (
      <p className="text-slate-600 dark:text-slate-300 text-sm">
        No similar listings found in this category.
      </p>
    )
  }

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      {similar.length > 2 && (
        <>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} className="text-slate-700 dark:text-slate-300" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} className="text-slate-700 dark:text-slate-300" />
          </button>
        </>
      )}

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent"
        style={{
          scrollbarWidth: 'thin',
          scrollSnapType: 'x mandatory',
        }}
      >
        {similar.map((item) => (
          <Link
            key={item.id}
            href={`/listings/${item.slug}`}
            className="flex-shrink-0 w-[280px] border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900 scroll-snap-align-start"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative w-full h-40 overflow-hidden">
              <img
                src={item.image || '/assets/images/coffee.jpg'}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {item.isFeatured && (
                <span className="absolute top-2 right-2 bg-yellow-500/90 text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                  <StarRating rating={5} size={12} />
                  Featured
                </span>
              )}
            </div>

            <div className="p-3 space-y-2">
              <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-100 line-clamp-1">
                {item.name}
              </h4>

              <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                <MapPin size={12} className="flex-shrink-0" />
                <span className="line-clamp-1">{item.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <StarRating rating={item.rating || 0} size={12} />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {(item.rating || 0).toFixed(1)}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    ({item.reviewCount || 0})
                  </span>
                </div>

                {item.priceRange && (
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {item.priceRange}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll indicator */}
      {similar.length > 2 && (
        <div className="flex justify-center gap-1 mt-2">
          {Array.from({ length: Math.ceil(similar.length / 2) }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"
            />
          ))}
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgb(203 213 225);
          border-radius: 3px;
        }
        .dark .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgb(71 85 105);
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgb(148 163 184);
        }
        .dark .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgb(100 116 139);
        }
      `}</style>
    </div>
  )
}
