'use client'
import { Star }                 from 'lucide-react'
import  { useState }            from 'react'
import "@radix-ui/themes/styles.css";
import { Slider }               from '@radix-ui/themes';
import RangeSlider              from '../RangeSlider/RangeSlider';



const ListFilteredSidebar = () => {
   const [priceRange, setPriceRange] = useState([200, 1200]);
    return (
      
        <>
        
            <div className='flex flex-col gap-5 '>
                {/* search field  */}
                <div>
                    <input type="text" placeholder='Search listing..' className='w-full border p-3'/>
                </div>
                <div>
                    <ul className='flex items-center'>
                        <li className='w-[200px] h-[40px] flex items-center gap-2 justify-center border'><Star/> ALL</li>
                        <li className='w-[200px] h-[40px] flex items-center gap-2  justify-center border' ><Star/> 3.0</li>
                        <li className='w-[200px] h-[40px] flex items-center gap-2 justify-center border' ><Star/> 4.0</li>
                        <li className='w-[200px] h-[40px] flex items-center gap-2 justify-center border' ><Star/> 5.0</li>
                       
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-sm font-semibold'>CATEGORIES</span>
                    <ul className='grid grid-cols-3 gap-2 text-sm'>
                        <li className='flex items-center justify-center p-2 border bg-[#f7f7f7] rounded-[5px] font-semibold'> <button>Eat & Drink</button></li>
                        <li className='flex items-center justify-center p-2 bg-[#f7f7f7] rounded-[5px] font-semibold border'><button>Appartment</button></li>
                        <li className='bg-blue-600 flex items-center justify-center p-2  rounded-[5px] font-semibold '><button className=''>Classified</button></li>
                        <li className='flex items-center justify-center p-2 bg-[#f7f7f7] rounded-[5px] font-semibold border'>Services</li>
                        <li className='flex items-center justify-center p-2  bg-[#f7f7f7] rounded-[5px] font-semibold border'><button>Gym & Fitness</button></li>
                        <li className='flex items-center justify-center p-2 bg-[#f7f7f7] rounded-[5px] font-semibold border'><button>Night Life</button></li>
                        <li className='flex items-center justify-center p-2 bg-[#f7f7f7] rounded-[5px] font-semibold col-span-1  border'><button>Coaching</button></li>
                        <li className='flex items-center justify-center p-2 bg-[#f7f7f7] rounded-[5px] font-semibold  col-span-2 border'><button>Shopping</button></li>
                    </ul>
                    
            <div className='mt-10'>
                   <RangeSlider
          min={0}
          max={2000}
          initialMin={priceRange[0]}
          initialMax={priceRange[1]}
          onChange={setPriceRange}
        />

            </div>
            <div className=' mt-8 flex items-center justify-center p-[12px_8px] text-lg text-white bg font-semibold bg-blue-500 rounded-[5px]'>
              <span> Save & Update</span>
            </div>
                    
                </div>
               

        </div>
        </>
  )
}

export default ListFilteredSidebar