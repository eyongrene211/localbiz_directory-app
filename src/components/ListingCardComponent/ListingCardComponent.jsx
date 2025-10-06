import React                               from 'react'
import Link                                from 'next/link'
import PhoneIcon                           from '../icons/PhoneIcon'
import { Heart, MapPin, Star as StarIcon } from 'lucide-react'
import Image                               from 'next/image'

/**
 * StarRating renders 0-5 stars with half-star support.
 * rating: number (e.g., 4.5)
 * size: number (icon size)
 */
const StarRating = ({ rating = 0, size = 14, className = '' }) => {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75
  const adjustedFull = hasHalf ? fullStars : Math.round(rating)
  const stars = []

  for (let i = 0; i < 5; i++) {
    if (i < adjustedFull) {
      stars.push(
        <StarIcon key={`full-${i}`} size={size} className="text-yellow-500" fill="currentColor" />
      )
    } else if (i === adjustedFull && hasHalf) {
      stars.push(
        <span key={`half-${i}`} className="relative inline-block" style={{ width: size, height: size }}>
          <StarIcon size={size} className="text-gray-300 dark:text-gray-600" />
          <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <StarIcon size={size} className="text-yellow-500" fill="currentColor" />
          </span>
        </span>
      )
    } else {
      stars.push(
        <StarIcon key={`empty-${i}`} size={size} className="text-gray-300 dark:text-gray-600" />
      )
    }
  }

  return <div className={`flex items-center ${className}`}>{stars}</div>
}

const ListingCardComponent = ({ listing }) => {
  const {
    slug = 'business-name',
    name = 'Business Name',
    description = 'Business description',
    phone = '+237 000 000 000',
    location = 'Location',
    image = '/assets/images/coffee.jpg',
    profileImage = '/assets/images/closeup_pic1.jpg',
    status = 'OPEN',
    priceRange = '$$$',
    isFeatured = false,
    isVerified = false,
    category = 'Business',
    categoryIcon: CategoryIcon,
    categoryColor = 'blue',
    additionalCategories = 0,
    views = 0,
    likes = 0,
    shares = 0,
    rating = 0,
    reviewCount = 0,
  } = listing || {}

  const getStatusColor = (status) => (status === 'OPEN' ? 'bg-green-600' : 'bg-red-600')
    console.log('output like' +likes);
  const getCategoryColor = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
      purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
      red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
      yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
      indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      teal: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      pink: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
      brown: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    }
    return colorMap[color] || 'bg-blue-100 text-blue-600'
  }

  const truncate = (text, n = 20) => (text && text.length > n ? text.slice(0, n) + '...' : text)

  return (
    <Link href={`/listings/${slug}`} className="block w-full max-w-[480px] mx-auto">
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden flex flex-col transition hover:shadow-xl">
        {/* Image Section */}
        <div className="relative h-64 sm:h-72">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Badges top-left */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
            <span className={`px-2 py-1 text-xs font-bold rounded ${getStatusColor(status)} text-white shadow`}>
              {status}
            </span>
            <span className="px-2 py-1 text-xs font-semibold rounded bg-black/55 text-white shadow">
              {priceRange}
            </span>
            {isFeatured && (
              <span className="px-2 py-1 flex items-center gap-1 text-xs font-semibold rounded bg-yellow-500/90 text-yellow-100 shadow">
                <StarIcon size={14} fill="currentColor" /> Featured
              </span>
            )}
          </div>

          {/* Favorite top-right */}
          <button
            onClick={(e) => {
              e.preventDefault()
              // Handle favorite logic here
            }}
            className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-800/80 rounded-full shadow hover:bg-pink-100 dark:hover:bg-pink-900/30 transition z-10"
          >
            <Heart color="#e11d48" size={18} />
          </button>

          {/* Profile + contact row */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-full border-4 border-white dark:border-slate-900 shadow-lg overflow-hidden flex-shrink-0">
                <Image
                  src={profileImage}
                  alt={`${name} profile`}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-white font-bold text-base sm:text-lg truncate drop-shadow">
                    {name}
                  </h2>
                  {isVerified && (
                    <span className="w-5 h-5 flex-shrink-0" title="Verified">
                      <img
                        src="data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20561%20560'%3e%3cstyle%3e.a{fill:%232ca862}.b{fill:%23fff}%3c/style%3e%3cpath%20class='a'%20d='m561%20293.1c0%2019.6-4.7%2037.8-14.1%2054.4-9.4%2016.6-22%2029.6-37.9%2038.7q0.7%204.4%200.7%2013.8c0%2029.6-10%2054.8-29.7%2075.6-19.8%2020.9-43.6%2031.2-71.5%2031.2-12.5%200-24.4-2.3-35.6-6.8-8.8%2017.9-21.4%2032.3-37.9%2043.4-16.4%2011.1-34.4%2016.6-54%2016.6-20%200-38.2-5.4-54.4-16.3-16.3-10.8-28.7-25.4-37.5-43.7-11.3%204.5-23.1%206.8-35.7%206.8-27.8%200-51.8-10.3-71.8-31.2-20-20.8-30-46.1-30-75.6%200-3.3%200.5-7.9%201.2-13.8-15.8-9.2-28.4-22.1-37.8-38.7-9.3-16.6-14-34.8-14-54.4%200-20.8%205.2-39.9%2015.6-57.2%2010.4-17.3%2024.4-30.1%2041.9-38.4-4.6-12.4-6.9-25-6.9-37.5%200-29.5%2010-54.8%2030-75.6%2020-20.7%2044-31.2%2071.8-31.2%2012.5%200%2024.4%202.3%2035.7%206.8%208.8-17.9%2021.3-32.3%2037.8-43.4%2016.5-11%2034.5-16.6%2054.1-16.6%2019.6%200%2037.6%205.6%2054%2016.5%2016.4%2011.1%2029.1%2025.5%2037.9%2043.4%2011.2-4.6%2023-6.9%2035.6-6.9%2027.9%200%2051.7%2010.4%2071.5%2031.3%2019.8%2020.9%2029.7%2046.1%2029.7%2075.6%200%2013.8-2.1%2026.3-6.3%2037.5%2017.5%208.3%2031.5%2021.1%2041.9%2038.4%2010.4%2017.4%2015.7%2036.5%2015.7%2057.3z'/%3e%3cpath%20class='b'%20d='m137.7%20310l30.9-38.9%2077.9%2061.7%20138.8-175.4%2038.9%2030.9-169.6%20214.3z'/%3e%3c/svg%3e"
                        alt="Verified"
                        className="w-full h-full"
                      />
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-white text-xs sm:text-sm drop-shadow">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span className="truncate max-w-[140px]">{truncate(location, 18)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PhoneIcon />
                    <span>{phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className={`rounded-lg px-2 py-1 ${getCategoryColor(categoryColor)}`}>
              {CategoryIcon && <CategoryIcon size={16} />}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">
              {category}
            </span>
            {additionalCategories > 0 && (
              <span className="w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-slate-700 rounded-full text-xs font-semibold">
                +{additionalCategories}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <StarRating rating={rating} />
            <span className="text-xs text-gray-600 dark:text-gray-400">({reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ListingCardComponent
