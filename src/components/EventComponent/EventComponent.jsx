import { Clock, CoffeeIcon } from 'lucide-react'
import React                 from 'react'

const EventComponent = () => {
    return (
        <div className='flex flex-col items-center rounded-2xl relative border w-full max-w-md mx-auto'>
            {/* blog-image */}
            <div className='w-full h-[289px] relative'>
                    <div className='flex absolute items-center border w-max p-2 bg-green-100  bottom-18 lg:bottom-9 left-2 rounded-[4px] gap-2'> <CoffeeIcon color='green' /><span className='text-green-300 font-bold'>Cooking</span></div>
                    <img src="/assets/images/coffee.jpg" alt="blog-pic" className='w-full rounded-[4px]' />
                    <div className='w-max h-max flex flex-col justify-center items-center p-[10px_25px]  absolute top-2 rounded-[5px] bg-black  text-white right-5'><span className='font-bold '>5</span>
                    <span className='font-bold text-gray-500'>May</span></div>
                </div>
                {/* blog-text */}
                <div className='w-full flex flex-col p-4'>
                    <p className='font-bold text-lg mb-2'>Learn Cooking with Shree Patel</p>
                    <div className='flex items-center gap-2 text-gray-600'>
                        <Clock size={16} />
                        <p className='text-sm'>
                            <span>10:30 AM</span> 
                            <span className='mx-1'>TO</span> 
                            <span>14:40 PM</span>
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default EventComponent