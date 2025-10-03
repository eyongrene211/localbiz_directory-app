'use client'

import {
    CircleUserRound,
    MapPin,
    Menu,
    Search,
    X,
    Home,
    Building2,
    Info,
    Mail,
    Moon,
    Sun,
    Newspaper
} from "lucide-react"
import React, { useState } from "react"
import Image               from 'next/image'
import Link                from "next/link"

const NavBarComponent = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        // TODO: Implement theme change functionality here
        // Example: document.documentElement.classList.toggle('dark')
        // Or use context/redux to manage theme globally
    }

    return (
        <nav className="bg-gray-800 text-white fixed w-full top-0 z-50 shadow-lg">
            {/* Main Navigation Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo Section */}
                    <Link href="/" className="flex-shrink-0 flex items-center group">
                        <Image
                            src="/assets/images/logo2.png"
                            alt="Camfind Logo"
                            width={120}
                            height={45}
                            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-1">
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 hover:shadow-md"
                            >
                                <Home size={18} />
                                <span>Home</span>
                            </Link>
                            <Link
                                href="/listings"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:shadow-md"
                            >
                                <Building2 size={18} />
                                <span>Listings</span>
                            </Link>
                            <Link
                                href="/about"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:shadow-md"
                            >
                                <Info size={18} />
                                <span>About</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:shadow-md"
                            >
                                <Mail size={18} />
                                <span>Contact</span>
                            </Link>
                            <Link
                                href="/blog"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:shadow-md"
                            >
                                <Newspaper size={18} />
                                <span>Blog</span>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Right Section */}
                    <div className="hidden lg:flex items-center space-x-3">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 hover:shadow-md relative group"
                            title="Toggle Theme"
                        >
                            <div className="relative w-5 h-5">
                                {/* Sun Icon - fades in/out */}
                                <Sun 
                                    size={18} 
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 transition-all duration-500 ${
                                        isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
                                    }`}
                                />
                                {/* Moon Icon - fades in/out */}
                                <Moon 
                                    size={18} 
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 transition-all duration-500 ${
                                        !isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                                    }`}
                                />
                            </div>
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </span>
                        </button>

                        {/* Search Button */}
                        <button
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 hover:shadow-md"
                            title="Search"
                        >
                            <Search size={18} />
                        </button>

                        {/* Sign In Button */}
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300">
                            <CircleUserRound size={18} />
                            <span>Sign In</span>
                        </button>

                        {/* Add Listing Button */}
                        <Link
                            href="/add-listing"
                            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <MapPin size={18} />
                            <span>Add Listing</span>
                        </Link>
                    </div>

                    {/* Mobile/Tablet Menu Buttons */}
                    <div className="lg:hidden flex items-center space-x-2">
                        {/* Theme Toggle (Mobile) */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                        >
                            <div className="relative w-5 h-5">
                                <Sun 
                                    size={18} 
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 transition-all duration-500 ${
                                        isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
                                    }`}
                                />
                                <Moon 
                                    size={18} 
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 transition-all duration-500 ${
                                        !isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                                    }`}
                                />
                            </div>
                        </button>

                        {/* Mobile Search Button */}
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300">
                            <Search size={18} />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMobileMenu}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay with Enhanced Smooth Animation */}
            <div
                className={`lg:hidden transition-all duration-500 ease-in-out ${
                    isMobileMenuOpen 
                        ? 'max-h-screen opacity-100 translate-y-0' 
                        : 'max-h-0 opacity-0 -translate-y-4'
                } overflow-hidden`}
            >
                <div className="px-4 pt-4 pb-6 space-y-2 bg-gray-800 border-t border-gray-700 shadow-inner">
                    {/* Mobile Navigation Links with stagger animation */}
                    <Link
                        href="/"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-white bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 transform ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '50ms' }}
                        onClick={closeMobileMenu}
                    >
                        <Home size={20} />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/listings"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 transform ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '100ms' }}
                        onClick={closeMobileMenu}
                    >
                        <Building2 size={20} />
                        <span>Listings</span>
                    </Link>
                    <Link
                        href="/about"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 transform ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '150ms' }}
                        onClick={closeMobileMenu}
                    >
                        <Info size={20} />
                        <span>About</span>
                    </Link>
                    <Link
                        href="/contact"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 transform ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                        onClick={closeMobileMenu}
                    >
                        <Mail size={20} />
                        <span>Contact</span>
                    </Link>
                    <Link
                        href="/blog"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 transform ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '250ms' }}
                        onClick={closeMobileMenu}
                    >
                        <Newspaper size={20} />
                        <span>Blog</span>
                    </Link>

                    {/* Mobile Action Buttons with animation */}
                    <div className={`border-t border-gray-700 pt-4 mt-4 space-y-3 transition-all duration-300 transform ${
                        isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                    >
                        <button
                            className="flex items-center gap-3 w-full px-4 py-3 text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 rounded-lg"
                            onClick={closeMobileMenu}
                        >
                            <CircleUserRound size={20} />
                            <span>Sign In / Sign Up</span>
                        </button>
                        <Link
                            href="/add-listing"
                            className="flex items-center gap-3 w-full px-4 py-3 text-left text-base font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                            onClick={closeMobileMenu}
                        >
                            <MapPin size={20} />
                            <span>Add Listing</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBarComponent
