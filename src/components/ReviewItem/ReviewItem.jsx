import React      from 'react'
import StarRating from '@/components/StarRating/StarRating'

export default function ReviewItem({ name, date, stars, img, text }) {
  return (
    <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors hover:shadow-sm">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        {/* Header: Name, Date, Stars */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-100">
              {name}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{date}</p>
          </div>
          
          {/* Star Rating with Number */}
          <div className="flex items-center gap-1.5">
            <StarRating rating={stars} size={14} />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {stars}.0
            </span>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {text}
        </p>

        {/* Optional: Helpful/Report Actions */}
        <div className="flex items-center gap-4 pt-2 text-xs">
          <button className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            👍 Helpful
          </button>
          <button className="text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
            🚩 Report
          </button>
        </div>
      </div>
    </div>
  )
}
