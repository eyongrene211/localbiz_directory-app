import { Suspense }       from 'react'
import SSOCallbackContent from './SSOCallbackContent'
import { Loader2 }        from 'lucide-react'

export default function SSOCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
          <Loader2 className="animate-spin text-blue-600" size={48} />
        </div>
      }
    >
      <SSOCallbackContent />
    </Suspense>
  )
}
