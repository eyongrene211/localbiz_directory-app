'use client'

import React, { useState, useEffect } from 'react'
import { Button }                     from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import QuickViewCat                   from '../QuickViewCat/QuickViewCat'

// Import icon components
import RestaurantIcon                 from '@/components/icons/RestaurantIcon'
import BusinessShopsIcons             from '@/components/icons/BusinessShopsIcons'
import ElectronicsIcon                from '@/components/icons/ElectronicsIcon'
import HealthFitnessIcon              from '@/components/icons/HealthFitnessIcon'
import OtherServicesIcon              from '@/components/icons/OtherServicesIcon'

const bgImages = [
  '/assets/banner-2-.jpg',
  '/assets/contact_bgpic.png',
  '/assets/images/Healthpic.jpg'
]

const categories = [
  {
    label: 'Eat & Drinking',
    href: '/categories/eat-drinking',
    icon: RestaurantIcon
  },
  {
    label: 'Shopping',
    href: '/categories/shopping',
    icon: BusinessShopsIcons
  },
  {
    label: 'Electronics',
    href: '/categories/electronics',
    icon: ElectronicsIcon
  },
  {
    label: 'Fitness & Gym',
    href: '/categories/fitness-gym',
    icon: HealthFitnessIcon
  },
  {
    label: 'Other Services',
    href: '/categories/other-services',
    icon: OtherServicesIcon
  }
]

const HeroComponent = () => {
  const [bgIndex, setBgIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % bgImages.length)
        setFade(true)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-fit py-4 md:py-6 flex flex-col justify-center items-center transition-colors duration-300 overflow-hidden">
      {/* Background image with smooth fade */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${bgImages[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Consistent dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 dark:bg-black/70 transition-colors duration-300" />
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col justify-center items-center px-4 md:px-0 mt-16 md:mt-24">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-gray-200 dark:text-white text-center drop-shadow-lg">
          Explore Your Perfect Places
        </h1>
        <p className="text-gray-300 dark:text-gray-200 text-center font-light md:text-xl mt-4 max-w-2xl">
          Browse high rated hotels, restaurants, attractions, activities and more!
        </p>
        {/* Searchbar */}
        <form className="w-full flex justify-center mt-8">
          <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4 items-center bg-white/90 dark:bg-slate-800/90 border border-gray-300 dark:border-slate-700 p-4 rounded-xl shadow-lg">
            <input
              type="text"
              className="w-full md:w-1/3 border border-gray-300 dark:border-slate-700 py-3 px-4 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What are you looking for?"
            />
            <input
              type="text"
              className="w-full md:w-1/3 border border-gray-300 dark:border-slate-700 py-3 px-4 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Location"
            />
            <Select>
              <SelectTrigger className="w-full md:w-1/3 py-3 px-4 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {categories.map((cat) => (
                    <SelectItem key={cat.label} value={cat.label.toLowerCase().replace(/ /g, '-')}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto py-3 rounded-lg">
              Search
            </Button>
          </div>
        </form>
        {/* Category Quick View */}
        <div className="w-full max-w-3xl flex flex-wrap justify-center items-center mt-10 gap-4 md:gap-6">
          {categories.map((cat) => (
            <QuickViewCat
              key={cat.label}
              label={cat.label}
              IconComponent={cat.icon}
              href={cat.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
