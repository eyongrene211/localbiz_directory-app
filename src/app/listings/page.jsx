import FooterComponent  from '@/components/Footer/FooterComponent';
import NavBarComponent  from '@/components/NavBarComponent/NavBarComponent';
import React            from 'react';
import Link             from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ListingContainer from '@/components/ListingContainer/ListingContainer';


const page = () => {
  return (
    <>

      <div className='min-h-screen bg-white overflow-x-hidden'>

        <NavBarComponent />
        <main className='w-full lg:flex-grow mt-5'>


          <section className='py-16 bg-gray-50'>
            <div className='max-w-7xl mx-auto  md:px-4 sm:px-6 lg:px-8'>
              {/* breadCrumb */}
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>listings</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <ListingContainer/>
            </div>

          </section>
        </main>
        {/* Footer Section */}
      </div>
        <FooterComponent />
    </>
  )
}

export default page;