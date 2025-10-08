'use client'
import { Clock, Calendar, MapPin, Users, CoffeeIcon } from 'lucide-react'
import Link                                           from 'next/link'
import React                                          from 'react'
import { motion }                                     from 'framer-motion'

const EventComponent = ({ post }) => {
  // Fallback for when no post is provided (backward compatibility)
  if (!post) {
    return (
      <motion.div 
        className='flex flex-col items-center rounded-2xl relative border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-full max-w-md mx-auto overflow-hidden cursor-pointer'
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Fallback image */}
        <div className='w-full h-[289px] relative'>
          <div className='flex absolute items-center border w-max p-2 bg-green-100 bottom-18 lg:bottom-9 left-2 rounded-[4px] gap-2 z-10'>
            <CoffeeIcon color='green' />
            <span className='text-green-700 font-bold'>Cooking</span>
          </div>
          <img src="/assets/images/coffee.jpg" alt="blog-pic" className='w-full h-full object-cover' />
          <div className='w-max h-max flex flex-col justify-center items-center p-[10px_25px] absolute top-2 rounded-[5px] bg-black text-white right-5'>
            <span className='font-bold '>5</span>
            <span className='font-bold text-gray-500'>May</span>
          </div>
        </div>
        {/* Fallback text */}
        <div className='w-full flex flex-col p-4'>
          <p className='font-bold text-lg mb-2 text-slate-900 dark:text-white'>Learn Cooking with Shree Patel</p>
          <div className='flex items-center gap-2 text-slate-600 dark:text-slate-400'>
            <Clock size={16} />
            <p className='text-sm'>
              <span>10:30 AM</span>
              <span className='mx-1'>TO</span>
              <span>14:40 PM</span>
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  // Normal flow with post data
  const date = new Date(post.date)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'short' })

  const getCategoryColor = (color) => {
    const colors = {
      green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    }
    return colors[color] || colors.blue
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div 
        className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden cursor-pointer group h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image Container */}
        <div className="w-full h-[240px] relative overflow-hidden">
          <motion.img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Category Badge */}
          <motion.div 
            className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg border ${getCategoryColor(post.categoryColor)} backdrop-blur-sm font-semibold text-sm z-10`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {post.category}
          </motion.div>

          {/* Date Badge */}
          <motion.div 
            className="absolute top-3 right-3 bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur-sm text-white rounded-lg px-4 py-2 flex flex-col items-center z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="text-2xl font-bold leading-none">{day}</span>
            <span className="text-xs font-medium text-slate-300">{month}</span>
          </motion.div>

          {/* Overlay Gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-5">
          <motion.h3 
            className="font-bold text-lg mb-3 text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {post.title}
          </motion.h3>

          <motion.p 
            className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {post.excerpt}
          </motion.p>

          {/* Meta Info */}
          <motion.div 
            className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
              <Clock size={16} className="flex-shrink-0" />
              <span>
                {post.time.start} - {post.time.end}
              </span>
            </div>

            {post.location && (
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <MapPin size={16} className="flex-shrink-0" />
                <span className="line-clamp-1">{post.location}</span>
              </div>
            )}

            {post.capacity && (
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <Users size={16} className="flex-shrink-0" />
                <span>{post.enrolled}/{post.capacity} enrolled</span>
              </div>
            )}
          </motion.div>

          {/* Price Tag */}
          {post.price && (
            <motion.div 
              className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                {post.price}
              </span>
            </motion.div>
          )}
        </div>

        {/* Hover effect - subtle border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            boxShadow: "inset 0 0 0 2px rgba(59, 130, 246, 0.5)"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  )
}

export default EventComponent
