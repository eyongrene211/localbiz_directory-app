import { Geist, Geist_Mono } from 'next/font/google'
import { Inter }             from 'next/font/google'
import { ClerkProvider }     from '@clerk/nextjs'
import { Theme }             from '@radix-ui/themes'
import { ThemeProvider }     from 'next-themes'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'CamFind - Find Services in Cameroon',
  description: 'Discover and review local businesses and services across Cameroon',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistMono.variable} ${geistSans.variable} antialiased min-h-screen`}
        >
          {/* ThemeProvider from next-themes controls dark mode */}
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="camfind-theme"
          >
            {/* Radix Theme for UI consistency */}
            <Theme>{children}</Theme>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
