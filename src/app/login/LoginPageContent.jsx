'use client'
import React, { useState, useEffect }                    from 'react'
import { useSignIn, useUser }                            from '@clerk/nextjs'
import { useRouter, useSearchParams }                    from 'next/navigation'
import Link                                              from 'next/link'
import Image                                             from 'next/image'
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react'

export default function LoginPageContent() {
  const { isLoaded: signInLoaded, signIn, setActive } = useSignIn()
  const { isLoaded: userLoaded, isSignedIn } = useUser()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const redirectUrl = searchParams.get('redirect') || '/'
  const action = searchParams.get('action')

  // Redirect if already signed in
  useEffect(() => {
    if (userLoaded && isSignedIn) {
      console.log('✅ User already signed in, redirecting to:', redirectUrl)
      router.push(redirectUrl)
    }
  }, [userLoaded, isSignedIn, redirectUrl, router])

  const getLoginMessage = () => {
    if (action === 'contact') {
      return {
        title: 'Sign in to Contact Business',
        subtitle: 'Create an account or sign in to send a message',
      }
    }
    if (action === 'add-listing') {
      return {
        title: 'Sign in to Add Your Listing',
        subtitle: 'Join CamFind to showcase your business',
      }
    }
    if (action === 'review') {
      return {
        title: 'Sign in to Leave a Review',
        subtitle: 'Share your experience with others',
      }
    }
    if (action === 'favorite') {
      return {
        title: 'Sign in to Save Favorites',
        subtitle: 'Keep track of businesses you love',
      }
    }
    return {
      title: 'Welcome Back',
      subtitle: 'Sign in to your CamFind account',
    }
  }

  const { title, subtitle } = getLoginMessage()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!signInLoaded) return

    setLoading(true)
    setError('')

    try {
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        console.log('✅ Email sign in complete, redirecting to:', redirectUrl)
        router.push(redirectUrl)
      } else {
        setError('Login incomplete. Please try again.')
      }
    } catch (err) {
      console.error('❌ Login error:', err)
      setError(err.errors?.[0]?.message || 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    if (!signInLoaded) return

    try {
      // Store redirect info in sessionStorage (persists during OAuth)
      sessionStorage.setItem('auth_redirect', redirectUrl)
      if (action) {
        sessionStorage.setItem('auth_action', action)
      }

      console.log('🔵 Starting Google OAuth...')
      console.log('📍 Redirect after auth:', redirectUrl)

      // Use Clerk's OAuth with callback to sso-callback
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: `${window.location.origin}/sso-callback`,
        redirectUrlComplete: `${window.location.origin}/sso-callback`,
      })
    } catch (err) {
      console.error('❌ Google signin error:', err)
      setError('Failed to sign in with Google. Please try again.')
    }
  }

  if (!signInLoaded || !userLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    )
  }

  if (isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={48} />
        <p className="ml-4 text-slate-700 dark:text-slate-300">Redirecting...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <Link href="/" className="flex justify-center mb-6 group">
            <Image
              src="/assets/images/logo2.png"
              alt="Camfind Logo"
              width={140}
              height={52}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
          </div>

          {action && (
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-start gap-3">
              <AlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={20} />
              <div className="text-sm">
                <p className="text-blue-700 dark:text-blue-300 font-medium">
                  You'll be redirected after signing in
                </p>
                <p className="text-blue-600 dark:text-blue-400 mt-1">
                  {action === 'contact' && 'Continue to contact form'}
                  {action === 'add-listing' && 'Continue to add your listing'}
                  {action === 'review' && 'Continue to leave your review'}
                  {action === 'favorite' && 'Continue to save favorites'}
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-lg transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400">
                Or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-12 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500"
                />
                <span>Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
              <Link
                href={`/signup${action ? `?action=${action}&redirect=${encodeURIComponent(redirectUrl)}` : ''}`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div id="clerk-captcha" className="mt-4" />

        <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Protected by reCAPTCHA and subject to the{' '}
          <Link href="/privacy" className="underline hover:text-slate-700 dark:hover:text-slate-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
