'use client'
import {
    ChevronDown,
    CircleUserRound,
    MapPin,
    Menu,
    Search,
    X,
    Home,
    Building2,
    Info,
    Mail
} from "lucide-react";
import React, { useState } from "react";
import Image               from 'next/image';
import page                from '../../app/listings/page';
import Link                from "next/link";

const NavBarComponent = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-gray-800 text-white fixed w-full top-0 x z-50 shadow-lg">
            {/* Main Navigation Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Image
                            src="/assets/images/logo2.png"
                            alt="Camfind Logo"
                            width={110}
                            height={40}
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block x">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a
                                href="#"
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 transition-colors duration-300"
                            >
                                <Home size={18} />
                                Home
                            </a>
                            <Link
                                href="/listings"
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                            >
                                <Building2 size={18} />
                                Listings
                            </Link>
                            <a
                                // href={`/listings/${slug}`}
                                href="/about"
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                            >
                                <Info size={18} />
                                About
                            </a>
                            <a
                                href="/contact"
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                            >
                                <Mail size={18} />
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Desktop Right Section */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            {/* Search Button */}
                            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                                <Search size={18} />
                            </button>

                            {/* Sign In Button */}
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                                <CircleUserRound size={18} />
                                Sign In
                            </button>

                            {/* Add Listing Button */}
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                                <MapPin size={18} />
                                Add Listing
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2 ">
                        {/* Mobile Search Button */}
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                            <Search size={18} />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMobileMenu}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-700">
                        {/* Mobile Navigation Links */}
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors duration-300"
                            onClick={closeMobileMenu}
                        >
                            <Home size={20} />
                            Home
                        </a>
                        <Link
                            href="/listings"
                            className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                            onClick={closeMobileMenu}
                        >
                            <Building2 size={20} />
                            Listings
                        </Link>
                        <a
                            href="/about"
                            className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                            onClick={closeMobileMenu}
                        >
                            <Info size={20} />
                            About
                        </a>
                        <a
                            href="/contact"
                            className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                            onClick={closeMobileMenu}
                        >
                            <Mail size={20} />
                            Contact
                        </a>

                        {/* Mobile Action Buttons */}
                        <div className="border-t border-gray-700 pt-4 mt-4 space-y-2">
                            <button
                                className="flex items-center gap-3 w-full px-3 py-3 text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 rounded-md"
                                onClick={closeMobileMenu}
                            >
                                <CircleUserRound size={20} />
                                Sign In / Sign Up
                            </button>
                            <button
                                className="flex items-center gap-3 w-full px-3 py-3 text-left text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                                onClick={closeMobileMenu}
                            >
                                <MapPin size={20} />
                                Add Listing
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
export default NavBarComponent;