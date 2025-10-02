'use client';
import React, { useState } from 'react';
import ReviewItem          from './ReviewItem';
import RatingComponent     from '../Rating/RatingComponent';

export default function SingleListingReviews() {
  // initial sample reviews
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Claire H. Jeter',
      date: '02 Sept 2025',
      stars: 5,
      img: '/assets/images/closeup_pic1.jpg',
      text: 'Great place — cozy and the coffee was excellent.',
    },
    {
      id: 2,
      name: 'Jack M. Kerry',
      date: '04 Sept 2025',
      stars: 4,
      img: '/assets/images/closeup_pic1.jpg',
      text: 'Good experience overall, some items were slow to arrive.',
    },
  ]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
    rating: null,
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.email || !form.rating || !form.message) {
      alert('Please enter email, rating, and message.');
      return;
    }

    const newReview = {
      id: Date.now(),
      name: form.name || 'Anonymous',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      stars: form.rating,
      img: '/assets/images/closeup_pic1.jpg',
      text: form.message,
    };

    setReviews(prev => [newReview, ...prev]);

    // reset form
    setForm({
      name: '',
      email: '',
      title: '',
      message: '',
      rating: null,
    });
  };

  return (
    <section className="w-full flex flex-col space-y-8">
      <h2 className="text-xl font-bold text-slate-800">{reviews.length} Reviews</h2>

      <div className="flex flex-col space-y-6">
        {reviews.map(r => <ReviewItem key={r.id} {...r} />)}
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-50 rounded-lg p-6 shadow-sm space-y-5">
        <h3 className="text-lg font-semibold text-slate-700">Leave a Review</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="border border-slate-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="your@example.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="border border-slate-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <RatingComponent value={form.rating} onChange={(v) => handleChange('rating', v)} />
        </div>

        <input
          type="text"
          placeholder="Review title (optional)"
          value={form.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="border border-slate-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Leave your review message..."
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="border border-slate-300 rounded p-2 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </div>
      </form>
    </section>
  );
}
