'use client'
import { useEffect } from 'react'
import { useClerk }  from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Loader2 }   from 'lucide-react'

export default function SSOCallback() {
  const { handleRedirectCallback } = useClerk()
  const router = useRouter()

  useEffect(() => {
    async function handleCallback() {
      try {
        await handleRedirectCallback()

        const params = new URLSearchParams(window.location.search)
        const redirectUrl = params.get('redirect_url') || '/'
        
        console.log('✅ OAuth complete, redirecting to:', redirectUrl)
        router.push(redirectUrl)
      } catch (error) {
        console.error('OAuth callback error:', error)
        router.push('/login?error=oauth_failed')
      }
    }

    handleCallback()
  }, [handleRedirectCallback, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center">
      <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
      <p className="text-slate-700 dark:text-slate-300 text-lg">
        Completing sign in...
      </p>
    </div>
  )
}
