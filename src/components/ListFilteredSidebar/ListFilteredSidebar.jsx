'use client'
import { Star }     from 'lucide-react'
import { useState } from 'react'
import RangeSlider  from '../RangeSlider/RangeSlider'

const categories = [
  'Eat & Drink',
  'Apartment',
  'Classified',
  'Services',
  'Gym & Fitness',
  'Night Life',
  'Coaching',
  'Shopping',
  'Coffee Shop',
  'Restaurant',
  'Business',
  'Health & Fitness',
  'Healthcare',
  'Finance',
  'Real Estate',
  'Travel & Tourism',
  'Events & Weddings',
]

const ratingOptions = ['ALL', '3.0', '4.0', '5.0']

const ListFilteredSidebar = ({ onApply }) => {
  const [priceRange, setPriceRange] = useState([20000, 150000])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRating, setSelectedRating] = useState('ALL') // min rating
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleApply = () => {
    const minRating = selectedRating === 'ALL' ? 0 : parseFloat(selectedRating)
    onApply?.({
      searchTerm: searchTerm.trim(),
      category: selectedCategory,
      minRating,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
    })
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Search Field */}
      <input
        type="text"
        placeholder="Search listing..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Star Ratings */}
      <div>
        <ul className="grid grid-cols-4 gap-2">
          {ratingOptions.map((rating) => (
            <li
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`h-10 flex items-center justify-center gap-1 border rounded-lg cursor-pointer transition text-sm font-medium
                ${
                  selectedRating === rating
                    ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-400'
                    : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
            >
              <Star size={14} className="text-yellow-500" />
              {rating}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold uppercase text-gray-700 dark:text-gray-200">Categories</span>
        <ul className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
          {categories.map((cat) => {
            const active = selectedCategory === cat
            return (
              <li
                key={cat}
                onClick={() => setSelectedCategory(active ? '' : cat)}
                className={`flex items-center justify-center p-2 rounded-lg font-semibold border transition cursor-pointer ${
                  active
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                {cat}
              </li>
            )
          })}
        </ul>
      </div>

      {/* Price Range Slider */}
      <div className="mt-2">
        <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
          Price Range (FCFA)
        </div>
        <RangeSlider
          min={0}
          max={600000}
          initialMin={priceRange[0]}
          initialMax={priceRange[1]}
          onChange={setPriceRange}
          currency="FCFA "
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleApply}
        className="mt-1 w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow"
      >
        Save & Update
      </button>
    </div>
  )
}

export default ListFilteredSidebar
