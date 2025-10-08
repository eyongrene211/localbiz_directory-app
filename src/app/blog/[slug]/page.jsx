import React             from 'react'
import NavBarComponent   from '@/components/NavBarComponent/NavBarComponent'
import FooterComponent   from '@/components/Footer/FooterComponent'
import { blogPosts }     from '@/data/blogData'
import { notFound }      from 'next/navigation'
import BlogDetailContent from './BlogDetailContent'

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Event Not Found',
    }
  }

  return {
    title: `${post.title} | CamFind Events`,
    description: post.excerpt,
  }
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <NavBarComponent />
      <BlogDetailContent post={post} />
      <FooterComponent />
    </div>
  )
}
