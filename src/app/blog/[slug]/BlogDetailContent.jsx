'use client'
import React                                                      from 'react'
import Link                                                       from 'next/link'
import { Calendar, Clock, MapPin, Users, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { blogPosts }                                              from '@/data/blogData'
import EventComponent                                             from '@/components/EventComponent/EventComponent'

const BlogDetailContent = ({ post }) => {
  const date = new Date(post.date)
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <>
      {/* Back Button */}
      <div className="bg-gray-50 dark:bg-slate-800 py-4 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Events
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Event Meta Info */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8 mb-8 border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Calendar className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Date</p>
                  <p className="font-semibold text-slate-900 dark:text-white">{formattedDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Time</p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {post.time.start} - {post.time.end}
                  </p>
                </div>
              </div>

              {post.location && (
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Location</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{post.location}</p>
                  </div>
                </div>
              )}

              {post.capacity && (
                <div className="flex items-start gap-3">
                  <Users className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Capacity</p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {post.enrolled}/{post.capacity} enrolled
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Price and CTA */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Registration Fee</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{post.price}</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={handleShare}
                  className="flex-1 sm:flex-none px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Share2 size={18} />
                  Share
                </button>
                <button className="flex-1 sm:flex-none px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white text-lg">{post.author.name}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{post.author.bio}</p>
            </div>
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-slate-900 dark:prose-headings:text-white
              prose-p:text-slate-700 dark:prose-p:text-slate-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-slate-900 dark:prose-strong:text-white
              prose-ul:text-slate-700 dark:prose-ul:text-slate-300
              prose-li:text-slate-700 dark:prose-li:text-slate-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="text-slate-600 dark:text-slate-400" size={20} />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Events */}
      {relatedPosts.length > 0 && (
        <div className="py-16 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Related Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <EventComponent key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BlogDetailContent
