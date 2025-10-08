'use client'
import { useEffect }                  from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUser }                    from '@clerk/nextjs'
import { Loader2 }                    from 'lucide-react'

export default function SSOCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isLoaded, isSignedIn } = useUser()

  useEffect(() => {
    if (!isLoaded) return

    const redirectTo = searchParams.get('redirect_url') || '/'

    console.log('SSO Callback - isSignedIn:', isSignedIn)
    console.log('SSO Callback - redirectTo:', redirectTo)

    if (isSignedIn) {
      console.log('✅ User signed in, redirecting to:', redirectTo)
      setTimeout(() => {
        window.location.href = redirectTo
      }, 500)
    } else {
      const timeout = setTimeout(() => {
        console.log('⚠️ Sign in timeout, redirecting to login')
        router.push('/login?error=sso_timeout')
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [isLoaded, isSignedIn, router, searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center">
      <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
      <p className="text-slate-700 dark:text-slate-300 text-lg font-medium">
        Completing sign in...
      </p>
      <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
        Please wait while we redirect you
      </p>
    </div>
  )
}
