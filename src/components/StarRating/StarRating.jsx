import React    from 'react'
import { Star } from 'lucide-react'

/**
 * StarRating - Displays star rating with full, half, and empty stars
 * @param {number} rating - Rating value (0-5, supports decimals)
 * @param {number} size - Icon size in pixels (default: 16)
 * @param {string} className - Additional CSS classes
 */
export default function StarRating({ rating = 0, size = 16, className = '' }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75
  const adjustedFull = hasHalf ? fullStars : Math.round(rating)
  const stars = []

  for (let i = 0; i < 5; i++) {
    if (i < adjustedFull) {
      // Full star
      stars.push(
        <Star
          key={`full-${i}`}
          size={size}
          className="text-yellow-500 fill-yellow-500"
        />
      )
    } else if (i === adjustedFull && hasHalf) {
      // Half star
      stars.push(
        <span
          key={`half-${i}`}
          className="relative inline-block"
          style={{ width: size, height: size }}
        >
          <Star
            size={size}
            className="text-gray-300 dark:text-gray-600 absolute inset-0"
          />
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: '50%' }}
          >
            <Star size={size} className="text-yellow-500 fill-yellow-500" />
          </span>
        </span>
      )
    } else {
      // Empty star
      stars.push(
        <Star
          key={`empty-${i}`}
          size={size}
          className="text-gray-300 dark:text-gray-600"
        />
      )
    }
  }

  return <div className={`flex items-center ${className}`}>{stars}</div>
}
