'use client'
import React, { useState } from 'react'
import RatingComponent     from '../Rating/RatingComponent'
import ReviewItem          from '../ReviewItem/ReviewItem'
import {
  listingReviews,
  defaultReviewAvatar,
  reviewFormConfig,
} from '@/data/reviewsData'

export default function SingleListingReviews() {
  const [reviews, setReviews] = useState(listingReviews)
  const [form, setForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
    rating: null,
  })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate required fields
    const missingFields = reviewFormConfig.requiredFields.filter(
      (field) => !form[field]
    )
    if (missingFields.length > 0) {
      alert(
        `Please fill in all required fields: ${missingFields.join(', ').toUpperCase()}`
      )
      return
    }

    // Check message length
    if (form.message.length < reviewFormConfig.minMessageLength) {
      alert(
        `Review message must be at least ${reviewFormConfig.minMessageLength} characters.`
      )
      return
    }

    const newReview = {
      id: Date.now(),
      name: form.name || 'Anonymous',
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      stars: form.rating,
      img: defaultReviewAvatar,
      text: form.message,
    }

    setReviews((prev) => [newReview, ...prev])

    // Reset form
    setForm({
      name: '',
      email: '',
      title: '',
      message: '',
      rating: null,
    })

    alert('✅ Thank you! Your review has been submitted successfully.')
  }

  // Calculate average rating
  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1)
    : 0

  const isFormValid =
    form.email &&
    form.rating &&
    form.message &&
    form.message.length >= reviewFormConfig.minMessageLength

  return (
    <section className="w-full flex flex-col space-y-8">
      {/* Reviews Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-700">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Customer Reviews
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {reviews.length} review{reviews.length !== 1 ? 's' : ''} • Average:{' '}
            {avgRating} ⭐
          </p>
        </div>
        <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
          Most recent first
        </span>
      </div>

      {/* Reviews List */}
      <div className="flex flex-col space-y-4">
        {reviews.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400 py-8">
            No reviews yet. Be the first to leave a review! 🌟
          </p>
        ) : (
          reviews.map((r) => <ReviewItem key={r.id} {...r} />)
        )}
      </div>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm space-y-5 transition-colors"
      >
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Leave a Review
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Share your experience with this listing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Name (optional)
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-md p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="your@example.com"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className="border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-md p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            />
          </div>
        </div>

        <RatingComponent
          value={form.rating}
          onChange={(v) => handleChange('rating', v)}
        />

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Review Title (optional)
          </label>
          <input
            type="text"
            placeholder="Summarize your experience"
            value={form.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-md p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Your Review <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Tell us about your experience..."
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            required
            maxLength={reviewFormConfig.maxMessageLength}
            className="border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-md p-2.5 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          />
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {form.message.length} / {reviewFormConfig.maxMessageLength} characters
            (min {reviewFormConfig.minMessageLength})
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            <span className="text-red-500">*</span> Required fields
          </p>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md px-6 py-2.5 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isFormValid}
          >
            Submit Review
          </button>
        </div>
      </form>
    </section>
  )
}
