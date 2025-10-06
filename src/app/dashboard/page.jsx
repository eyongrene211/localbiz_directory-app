import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect }          from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()

  // If not logged in, redirect to login
  if (!userId) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Welcome, {user?.firstName || 'User'}! 👋
        </h1>
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
            Your Account Info
          </h2>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p>
              <strong>Name:</strong> {user?.firstName} {user?.lastName}
            </p>
            <p>
              <strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}
            </p>
            <p>
              <strong>User ID:</strong> {userId}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
