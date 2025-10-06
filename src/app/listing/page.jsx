import FooterComponent  from '@/components/Footer/FooterComponent'
import NavBarComponent  from '@/components/NavBarComponent/NavBarComponent'
import React            from 'react'
import Link             from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import ListingContainer from '@/components/ListingContainer/ListingContainer'

const Page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden transition-colors duration-300">
      <NavBarComponent />
      <main className="w-full mt-5">
        <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-400 dark:text-gray-500" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-800 dark:text-gray-100 font-semibold">
                    Listings
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ListingContainer />
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  )
}

export default Page
