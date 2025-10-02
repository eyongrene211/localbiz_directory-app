import React                                                        from 'react'
import PhoneIcon                                                    from '../icons/PhoneIcon';
import { Eye, Heart, HeartCrack, LocateIcon, MapPin, Share2, Star } from 'lucide-react';
import Image                                                        from 'next/image';

const TopListingCard = ({ listing }) => {
    // Destructure listing data with defaults
    const {
        id,
        name = "Business Name",
        description = "Business description",
        phone = "+237 000 000 000",
        location = "Location",
        image = "/assets/images/coffee.jpg",
        profileImage = "/assets/images/closeup_pic1.jpg",
        status = "OPEN",
        priceRange = "$$$",
        isFeatured = false,
        isVerified = false,
        category = "Business",
        categoryIcon: CategoryIcon,
        categoryColor = "blue",
        additionalCategories = 0,
        views = 0,
        likes = 0,
        shares = 0
    } = listing || {}

    // Color mapping for different category colors
    const getColorClasses = (color) => {
        const colorMap = {
            blue: 'text-blue-600',
            orange: 'text-orange-600',
            purple: 'text-purple-600',
            green: 'text-green-600',
            red: 'text-red-600',
            yellow: 'text-yellow-600',
            indigo: 'text-indigo-600',
            teal: 'text-teal-600',
            pink: 'text-pink-600',
            brown: 'text-amber-600'
        }
        return colorMap[color] || 'text-blue-600'
    }

    // Status color mapping
    const getStatusColor = (status) => {
        return status === 'OPEN' ? 'bg-[#00b65d]' : 'bg-red-500'
    }
    return (
        <>

            <div className=' flex flex-col container w-[370px] lg:w-[310px] border rounded-2xl gap-6 lg:gap-0 md:gap-4 overflow-x-hidden '>
                {/* image-card-section */}
                <div className='relative '>
                    {/* image-card */}
                    <div className='w-min-[300px] w-max-[370px] md:w-full lg:w-[310px] h-[270px] lg:h-[270px] relative '>
                        <div className='absolute bg-[#0000002c] w-full w-min-[300px] w-max-[370px] lg:w-[300px] lg:h-[208px] h-[228px] md:h-[235px] rounded-t-2xl '></div>
                        <div className='absolute top-4 left-2 flex items-center gap-3'>
                            <span className={`rounded-[4px] text-sm p-2 text-white ${getStatusColor(status)}`}>{status}</span>
                            <span className='rounded-[4px] p-2 text-sm text-white bg-[#a6abaf59]'>{priceRange}</span>
                            {isFeatured && (
                                <div className='rounded-[4px] p-2 text-sm flex items-center gap-[4px] bg-[#a6abaf59]'> 
                                    <Star size={16} color='white'/> 
                                    <span className='text-white'>Featured</span>
                                </div>
                            )}
                        </div>

                        <img className='w-full object-cover rounded-t-2xl' src={image} alt={name} />

                    </div>
                    <span className='absolute bottom-12 md:bottom-10 right-3 lg:bottom-18 bg-[#a6abaf7e] p-2 rounded-4xl'> <Heart color='#D1D1D1FF' /></span>

                    {/* floating-profile-icon */}
                    <div className='absolute bottom-3  lg:bottom-5 left-4 w-[52px] h-[52px] p-1 bg-white rounded-full'>
                        <Image 
                            className='w-full h-full rounded-full object-cover' 
                            src={profileImage} 
                            alt={`${name} profile`}
                            width={50}
                            height={50}
                            quality={100}
                        />
                    </div>

                </div>


                {/* more listing-info */}
                <div className='flex flex-col gap-2 mx-2 text-center '>
                    <div className='flex items-center px-[5px] gap-2'>
                        <h2>{name}</h2>
                        {isVerified && (
                            <span className='w-[22px] h-[22px]'>
                                <img src="data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20561%20560'%20width='561'%20height='560'%3e%3cstyle%3e.a{fill:%232ca862}.b{fill:%23fff}%3c/style%3e%3cpath%20class='a'%20d='m561%20293.1c0%2019.6-4.7%2037.8-14.1%2054.4-9.4%2016.6-22%2029.6-37.9%2038.7q0.7%204.4%200.7%2013.8c0%2029.6-10%2054.8-29.7%2075.6-19.8%2020.9-43.6%2031.2-71.5%2031.2-12.5%200-24.4-2.3-35.6-6.8-8.8%2017.9-21.4%2032.3-37.9%2043.4-16.4%2011.1-34.4%2016.6-54%2016.6-20%200-38.2-5.4-54.4-16.3-16.3-10.8-28.7-25.4-37.5-43.7-11.3%204.5-23.1%206.8-35.7%206.8-27.8%200-51.8-10.3-71.8-31.2-20-20.8-30-46.1-30-75.6%200-3.3%200.5-7.9%201.2-13.8-15.8-9.2-28.4-22.1-37.8-38.7-9.3-16.6-14-34.8-14-54.4%200-20.8%205.2-39.9%2015.6-57.2%2010.4-17.3%2024.4-30.1%2041.9-38.4-4.6-12.4-6.9-25-6.9-37.5%200-29.5%2010-54.8%2030-75.6%2020-20.7%2044-31.2%2071.8-31.2%2012.5%200%2024.4%202.3%2035.7%206.8%208.8-17.9%2021.3-32.3%2037.8-43.4%2016.5-11%2034.5-16.6%2054.1-16.6%2019.6%200%2037.6%205.6%2054%2016.5%2016.4%2011.1%2029.1%2025.5%2037.9%2043.4%2011.2-4.6%2023-6.9%2035.6-6.9%2027.9%200%2051.7%2010.4%2071.5%2031.3%2019.8%2020.9%2029.7%2046.1%2029.7%2075.6%200%2013.8-2.1%2026.3-6.3%2037.5%2017.5%208.3%2031.5%2021.1%2041.9%2038.4%2010.4%2017.4%2015.7%2036.5%2015.7%2057.3z'/%3e%3cpath%20class='b'%20d='m137.7%20310l30.9-38.9%2077.9%2061.7%20138.8-175.4%2038.9%2030.9-169.6%20214.3z'/%3e%3c/svg%3e" alt="verified" />
                            </span>
                        )}
                    </div>
                    <p className='text-sm'>{description}</p>
                    <div className='flex mt-4 items-center'>
                        <PhoneIcon />
                        <span className='text-sm'>{phone}</span>
                        <MapPin color='#a2a4a6' className='mx-[5px]' size={16} />
                        <span className='font-light text-sm'>{location.length > 25 ? location.slice(0, 25) + "..." : location}</span>
                    </div>
                <div className='flex items-center justify-between mt-5 p-[10px]'>
                    <div className='flex items-center gap-2'>
                        <div className='w-max p-2 rounded-2xl bg-gray-300'>
                            {CategoryIcon && <CategoryIcon color={categoryColor} size='16' />}
                        </div>
                        <span className='text-sm font-bold'>{category}</span>
                        {additionalCategories > 0 && (
                            <span className='w-[26px] h-[26px] flex items-center justify-center bg-[#f3f2f2] rounded-[100%] text-sm'>
                                +{additionalCategories}
                            </span>
                        )}
                    </div>

                    <div className='flex items-center gap-2'>
                        <span className='rounded-2xl border w-[28px] h-[28px] text-[10px] flex items-center justify-center' title={`${views} views`}>
                            <Eye size={16} color='#a2a4a6' />
                        </span>
                        <span className='rounded-2xl border w-[28px] h-[28px] text-[10px] flex items-center justify-center' title={`${likes} likes`}>
                            <Heart size={16} color='#a2a4a6' />
                        </span>
                        <span className='rounded-2xl border w-[28px] h-[28px] text-[10px] flex items-center justify-center' title={`${shares} shares`}>
                            <Share2 size={16} color='#a2a4a6' />
                        </span>
                    </div>
                </div>

                </div>
               
            </div>
        </>
    )
}

export default TopListingCard;