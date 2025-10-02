'use client'
import React                from 'react'
import NavBarComponent      from '@/components/NavBarComponent/NavBarComponent';
import FooterComponent      from '@/components/Footer/FooterComponent';
import Link                 from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import StatisticItem        from '../../components/StatisticItemComponent/StatisticItem'; // Ensure this path is correct

const Page = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <NavBarComponent />

            {/* Main Content */}
            <main className="w-full pb-20">
                
                {/* Hero Section Container (Background Color) */}
                <div className='w-full bg-blue-300'>
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
                        <div className="w-full flex flex-col gap-4 items-center justify-center text-center">
                            
                            {/* hero-section */}
                            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>
                                About Page
                            </h1>
                            
                            {/* breadCrumb */}
                            <div className='font-semibold lg:text-lg mt-2'>
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink asChild>
                                                <Link href="/">Home</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>About</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                        </div>
                    </section>
                </div>
                
                {/* Main Content Sections */}
                <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 ">

                    {/* How We Start Work Section */}
                    <div className='mt-20 flex-col flex justify-center items-center text-center'>
                        <div className='mb-12'>
                            <h1 className='text-3xl font-bold mb-2'>How We Start Work</h1>
                            <p className='text-gray-600'>Explore our work step by step and our mission</p>
                        </div>
                        
                        {/* Image and Description Block: REVISED FOR RESPONSIVENESS */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center'>
                            
                            {/* Image-Card (Responsive Sizing) */}
                            <div className='relative h-[400px] w-full max-w-sm mx-auto flex justify-center items-center'> 
                                {/* Image 1 (Adjusted size and position for responsiveness) */}
                                <div className='w-1/2 h-2/3 absolute top-0 left-0 md:h-3/4 md:w-3/5 md:-translate-y-10'>
                                    <img 
                                        src="/assets/images/Healthpic.jpg" 
                                        alt="pic1" 
                                        className='w-full h-full object-cover rounded-[4px] shadow-lg'
                                    />
                                </div>
                                {/* Image 2 (Adjusted size and position for responsiveness) */}
                                <div className='w-1/2 h-2/3 absolute bottom-0 right-0 md:h-3/4 md:w-3/5 md:translate-y-10'>
                                    <img 
                                        src="/assets/images/Healthpic.jpg" 
                                        alt="pic2" 
                                        className='w-full h-full object-cover rounded-[4px] shadow-lg' 
                                    />
                                </div>
                            </div>

                            {/* Image Description */}
                            <div className='flex flex-col justify-center space-y-4 text-center md:text-left'>
                                <span className='flex justify-center md:justify-start items-center p-2 rounded-[25px] w-max bg-blue-200 text-xs mx-auto md:mx-0'>
                                    <h2 className='text-blue-400 font-bold '>About Mission</h2>
                                </span>
                                <h1 className='font-bold text-2xl md:text-3xl'>Explore Our Aim & Mission</h1>
                                <p className='text-gray-700'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eveniet adipisci ullam dolore voluptatum ipsum repellat impedit repellendus corporis illum fugiat quos fugit, blanditiis molestiae quod nesciunt! Laboriosam debitis ullam reprehenderit magnam doloribus modi veritatis eos est assumenda aut quis ducimus nulla maiores, aliquam facere aliquid ipsum neque aspernatur id? Cupiditate perferendis qui iste animi reiciendis provident inventore reprehenderit sequi quisquam amet, deserunt fuga? Dignissimos, similique illo! Expedita aliquid facilis deserunt quae cumque eaque corrupti, harum eius unde laboriosam totam alias voluptas ratione aperiam? Animi perferendis ipsa ex rem unde?
                                </p>

                                <span className='flex justify-center md:justify-start items-center p-3 rounded-3xl w-fit text-blue-400 font-bold bg-blue-200 cursor-pointer transition duration-300 hover:bg-blue-300 mx-auto md:mx-0'> 
                                    Meet Our Team
                                </span>
                            </div>
                        </div>
                    </div>

                    <h2 className='text-3xl font-bold text-center mt-20 mb-10'>Our Impact in Numbers</h2>

                    {/* Count-Up Statistics: REVISED FOR RESPONSIVENESS (from previous response) */}
                    <div className='
                        w-full 
                        mx-auto 
                        py-8 
                        md:py-12
                        border-y border-gray-200 
                        grid 
                        grid-cols-2 
                        lg:grid-cols-4 
                        gap-y-10 
                        gap-x-4
                        place-items-center
                    '>
                        
                        <StatisticItem 
                            end={145} 
                            unit=" K" 
                            label="Daily Visitors" 
                        />
                        
                        <StatisticItem 
                            end={670} 
                            label="Active Listings" 
                        />
                        
                        <StatisticItem 
                            end={22} 
                            label="Won Awards" 
                        />
                        
                        <StatisticItem 
                            end={642} 
                            unit=" K"
                            label="Happy Customers" 
                        />
                        
                    </div>
                </div>
            </main>
            <FooterComponent />
        </div>
    );
};

export default Page;