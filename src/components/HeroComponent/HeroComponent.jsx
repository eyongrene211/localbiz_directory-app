import * as React   from "react";
import { Button }   from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import QuickViewCat from "../QuickViewCat/QuickViewCat";

const HeroComponent = () => {
    return (
        <div className="w-full h-[600px] bg-gray-200 flex flex-col justify-center items-start">
            <div className="w-full flex flex-col justify-center mt-12 md:mt-25 items-center">

            <h1 className="text-3xl font-bold text-gray-700 text-center md:text-7xl">Explore Your Perfect Places</h1>
            <p className="text-gray-700 text-center font-light md:text-xl">Browse high rated hotels, restaurant, attraction, activities and more!</p>
                {/* searchbar-field */}
                <form action="">
                <div className=" min-w-[750px] max-w-[1200px] h-max flex flex-col lg:flex-row justify-center items-center mt-8 gap-4 text-black  border-gray-400 p-4 bg-white rounded-md">
                    <input type="text"  className="w-[300px] md:w-full border py-5 px-2" placeholder="What are you looking for?"/>
                    <input type="text"  className="w-[300px] md:w-full border py-5 px-2" placeholder="Location"/>
                    <Select>
      <SelectTrigger className=" w-[300px] md:w-full py-7 px-2 lg:w-auto border">
        <SelectValue placeholder="Eat & Drinking" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="eat&drinking">Eat & Drinking</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
          <SelectItem value="electronic">Electronics</SelectItem>
          <SelectItem value="fitness&gym">Fitness & Gym</SelectItem>
          <SelectItem value="otherservices">Other Services</SelectItem>
        </SelectGroup>
      </SelectContent>
                        </Select>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-[300px] md:w-full py-6 lg:w-auto">Search</Button>
                    
            </div>
                </form>
            </div>
            <div className="w-full flex-wrap collaps h-20 flex justify-center items-center mt-8 gap-8 md:gap-8 lg:gap-12">
                
                <QuickViewCat />
                <QuickViewCat />
                <QuickViewCat />
                <QuickViewCat />
                <QuickViewCat />

                </div>

            </div>
            
        
    );
} 
export default HeroComponent;