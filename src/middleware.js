import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse }                        from 'next/server'

// Public routes - anyone can access
const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/contact',
  '/blog',
  '/blog/(.*)',
  '/listing',
  '/listings',
  '/listings/(.*)',
  '/search',
  '/category/(.*)',
  '/login(.*)',
  '/signup(.*)',
  '/sso-callback(.*)',
])

// Protected routes - require login
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/add-listing(.*)',
  '/edit-listing/(.*)',
  '/my-listings(.*)',
  '/favorites(.*)',
  '/settings(.*)',
  '/profile(.*)',
])

export default clerkMiddleware((auth, req) => {
  const { userId } = auth()
  const currentUrl = new URL(req.url)

  // If route is protected and user is not logged in
  if (isProtectedRoute(req) && !userId) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('redirect', currentUrl.pathname)
    console.log('🔒 Protected route, redirecting to login with redirect:', currentUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Let everything else through
  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
