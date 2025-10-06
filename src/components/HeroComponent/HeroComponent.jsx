'use client'

import React, { useState, useEffect } from "react";
import { Button }                     from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuickViewCat                   from "../QuickViewCat/QuickViewCat";

const bgImages = [
  "/assets/banner-2-.jpg",
  "/assets/contact_bgpic.png",
  "/assets/images/Healthpic.jpg"
];

const categories = [
  {
    label: "Eat & Drinking",
    href: "/categories/eat-drinking",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path d="M4 3v2a2 2 0 002 2h2v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 3v2a2 2 0 01-2 2h-2v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="3" width="8" height="4" rx="2" fill="currentColor" className="text-blue-500"/>
      </svg>
    )
  },
  {
    label: "Shopping",
    href: "/categories/shopping",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path d="M6 2l1.5 4.5h9L18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="9" cy="17" r="1" fill="currentColor" className="text-blue-500"/>
        <circle cx="15" cy="17" r="1" fill="currentColor" className="text-blue-500"/>
      </svg>
    )
  },
  {
    label: "Electronics",
    href: "/categories/electronics",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    label: "Fitness & Gym",
    href: "/categories/fitness-gym",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="9" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 9V7a2 2 0 012-2h8a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    label: "Other Services",
    href: "/categories/other-services",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
];

const HeroComponent = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % bgImages.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-fit py-4 md:py-6 flex flex-col justify-center items-center transition-colors duration-300 overflow-hidden">
      {/* Background image with smooth fade */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url(${bgImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
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
                    <SelectItem key={cat.label} value={cat.label.toLowerCase().replace(/ /g, "-")}>
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
              icon={cat.icon}
              href={cat.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
