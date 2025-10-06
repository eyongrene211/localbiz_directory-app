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
    Newspaper,
    LogOut,
    User,
    Settings,
    ChevronDown,
} from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import Image                                  from 'next/image'
import Link                                   from 'next/link'
import { usePathname }                        from 'next/navigation'
import { useTheme }                           from 'next-themes'
import { useUser, useClerk }                  from '@clerk/nextjs'
import { useRouter }                          from 'next/navigation'

const NavBarComponent = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
    const { theme, setTheme } = useTheme()
    const { isSignedIn, user, isLoaded } = useUser()
    const { signOut } = useClerk()
    const router = useRouter()
    const pathname = usePathname()
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsUserDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const handleSignOut = async () => {
        await signOut()
        router.push('/')
        setIsUserDropdownOpen(false)
        closeMobileMenu()
    }

    const handleAddListing = () => {
        if (isSignedIn) {
            router.push('/add-listing')
        } else {
            router.push('/login?redirect=/add-listing&action=add-listing')
        }
    }

    // Get user initials for avatar fallback
    const getUserInitials = () => {
        if (!user) return 'U'
        const firstName = user.firstName || ''
        const lastName = user.lastName || ''
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || 'U'
    }

    // Check if route is active
    const isActive = (path) => {
        if (path === '/') {
            return pathname === '/'
        }
        return pathname.startsWith(path)
    }

    // Get dynamic classes for nav links
    const getNavLinkClasses = (path) => {
        const baseClasses =
            'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md'
        const activeClasses = 'text-white bg-gray-700 dark:bg-slate-800'
        const inactiveClasses =
            'text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-slate-800'

        return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
    }

    // Get dynamic classes for mobile nav links
    const getMobileNavLinkClasses = (path) => {
        const baseClasses =
            'flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform'
        const activeClasses = 'text-white bg-gray-700/50 dark:bg-slate-800/50'
        const inactiveClasses =
            'text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-slate-800'

        return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
    }

    return (
        <nav className="bg-gray-800 dark:bg-slate-950 text-white fixed w-full top-0 z-50 shadow-lg transition-colors duration-300">
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
                            <Link href="/" className={getNavLinkClasses('/')}>
                                <Home size={18} />
                                <span>Home</span>
                            </Link>
                            <Link href="/listing" className={getNavLinkClasses('/listing')}>
                                <Building2 size={18} />
                                <span>Listings</span>
                            </Link>
                            <Link href="/about" className={getNavLinkClasses('/about')}>
                                <Info size={18} />
                                <span>About</span>
                            </Link>
                            <Link href="/contact" className={getNavLinkClasses('/contact')}>
                                <Mail size={18} />
                                <span>Contact</span>
                            </Link>
                            <Link href="/blog" className={getNavLinkClasses('/blog')}>
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
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 dark:bg-slate-800 hover:bg-gray-600 dark:hover:bg-slate-700 transition-all duration-300 hover:shadow-md relative group"
                            title="Toggle Theme"
                        >
                            <div className="relative w-5 h-5">
                                <Sun
                                    size={18}
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 transition-all duration-500 ${
                                        theme === 'dark'
                                            ? 'opacity-100 rotate-0 scale-100'
                                            : 'opacity-0 rotate-180 scale-0'
                                    }`}
                                />
                                <Moon
                                    size={18}
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 transition-all duration-500 ${
                                        theme === 'light'
                                            ? 'opacity-100 rotate-0 scale-100'
                                            : 'opacity-0 -rotate-180 scale-0'
                                    }`}
                                />
                            </div>
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 dark:bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                            </span>
                        </button>

                        {/* Search Button */}
                        <button
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 dark:bg-slate-800 hover:bg-gray-600 dark:hover:bg-slate-700 transition-all duration-300 hover:shadow-md"
                            title="Search"
                        >
                            <Search size={18} />
                        </button>

                        {/* Authentication Section */}
                        {isLoaded ? (
                            isSignedIn ? (
                                // User Dropdown (When Signed In)
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700 dark:bg-slate-800 hover:bg-gray-600 dark:hover:bg-slate-700 transition-all duration-300"
                                    >
                                        {user.imageUrl ? (
                                            <img
                                                src={user.imageUrl}
                                                alt={user.firstName || 'User'}
                                                className="w-8 h-8 rounded-full object-cover border-2 border-gray-600"
                                            />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-semibold">
                                                {getUserInitials()}
                                            </div>
                                        )}
                                        <span className="text-sm font-medium hidden xl:block">
                                            {user.firstName || 'User'}
                                        </span>
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${
                                                isUserDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isUserDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-64 bg-gray-700 dark:bg-slate-800 rounded-lg shadow-xl border border-gray-600 dark:border-slate-700 overflow-hidden animate-fadeIn">
                                            {/* User Info */}
                                            <div className="px-4 py-3 border-b border-gray-600 dark:border-slate-700">
                                                <p className="text-sm font-semibold text-white">
                                                    {user.firstName} {user.lastName}
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">
                                                    {user.primaryEmailAddress?.emailAddress}
                                                </p>
                                            </div>

                                            {/* Menu Items */}
                                            <div className="py-2">
                                                <Link
                                                    href="/dashboard"
                                                    onClick={() => setIsUserDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white transition-colors"
                                                >
                                                    <User size={16} />
                                                    <span>Dashboard</span>
                                                </Link>
                                                <Link
                                                    href="/settings"
                                                    onClick={() => setIsUserDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-white transition-colors"
                                                >
                                                    <Settings size={16} />
                                                    <span>Settings</span>
                                                </Link>
                                            </div>

                                            {/* Sign Out */}
                                            <div className="border-t border-gray-600 dark:border-slate-700">
                                                <button
                                                    onClick={handleSignOut}
                                                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-600 dark:hover:bg-slate-700 hover:text-red-300 transition-colors"
                                                >
                                                    <LogOut size={16} />
                                                    <span>Sign Out</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Sign In Button (When Not Signed In)
                                <Link
                                    href="/login"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
                                >
                                    <CircleUserRound size={18} />
                                    <span>Sign In</span>
                                </Link>
                            )
                        ) : (
                            // Loading State
                            <div className="w-10 h-10 rounded-full bg-gray-700 dark:bg-slate-800 animate-pulse" />
                        )}

                        {/* Add Listing Button */}
                        <button
                            onClick={handleAddListing}
                            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <MapPin size={18} />
                            <span>Add Listing</span>
                        </button>
                    </div>

                    {/* Mobile/Tablet Menu Buttons */}
                    <div className="lg:hidden flex items-center space-x-2">
                        {/* Theme Toggle (Mobile) */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 dark:bg-slate-800 hover:bg-gray-600 dark:hover:bg-slate-700 transition-all duration-300"
                        >
                            <div className="relative w-5 h-5">
                                <Sun
                                    size={18}
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 transition-all duration-500 ${
                                        theme === 'dark'
                                            ? 'opacity-100 rotate-0 scale-100'
                                            : 'opacity-0 rotate-180 scale-0'
                                    }`}
                                />
                                <Moon
                                    size={18}
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 transition-all duration-500 ${
                                        theme === 'light'
                                            ? 'opacity-100 rotate-0 scale-100'
                                            : 'opacity-0 -rotate-180 scale-0'
                                    }`}
                                />
                            </div>
                        </button>

                        {/* Mobile Search Button */}
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 dark:bg-slate-800 hover:bg-gray-600 dark:hover:bg-slate-700 transition-all duration-300">
                            <Search size={18} />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMobileMenu}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 dark:bg-slate-800 hover:bg-gray-600 dark:hover:bg-slate-700 transition-all duration-300"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-500 ease-in-out ${
                    isMobileMenuOpen
                        ? 'max-h-screen opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-4'
                } overflow-hidden`}
            >
                <div className="px-4 pt-4 pb-6 space-y-2 bg-gray-800 dark:bg-slate-950 border-t border-gray-700 dark:border-slate-800 shadow-inner">
                    {/* Mobile Navigation Links */}
                    <Link
                        href="/"
                        className={`${getMobileNavLinkClasses('/')} ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '50ms' }}
                        onClick={closeMobileMenu}
                    >
                        <Home size={20} />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/listing"
                        className={`${getMobileNavLinkClasses('/listing')} ${
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
                        className={`${getMobileNavLinkClasses('/about')} ${
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
                        className={`${getMobileNavLinkClasses('/contact')} ${
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
                        className={`${getMobileNavLinkClasses('/blog')} ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '250ms' }}
                        onClick={closeMobileMenu}
                    >
                        <Newspaper size={20} />
                        <span>Blog</span>
                    </Link>

                    {/* Mobile Action Buttons */}
                    <div
                        className={`border-t border-gray-700 dark:border-slate-800 pt-4 mt-4 space-y-3 transition-all duration-300 transform ${
                            isMobileMenuOpen
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        {isLoaded && (
                            <>
                                {isSignedIn ? (
                                    // Signed In Mobile Menu
                                    <>
                                        <div className="flex items-center gap-3 px-4 py-3 bg-gray-700/50 dark:bg-slate-800/50 rounded-lg">
                                            {user.imageUrl ? (
                                                <img
                                                    src={user.imageUrl}
                                                    alt={user.firstName || 'User'}
                                                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-600"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-sm font-semibold">
                                                    {getUserInitials()}
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-white">
                                                    {user.firstName} {user.lastName}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    {user.primaryEmailAddress?.emailAddress}
                                                </p>
                                            </div>
                                        </div>
                                        <Link
                                            href="/dashboard"
                                            className="flex items-center gap-3 w-full px-4 py-3 text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg"
                                            onClick={closeMobileMenu}
                                        >
                                            <User size={20} />
                                            <span>Dashboard</span>
                                        </Link>
                                        <button
                                            onClick={handleSignOut}
                                            className="flex items-center gap-3 w-full px-4 py-3 text-left text-base font-medium text-red-400 hover:text-red-300 hover:bg-gray-700 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg"
                                        >
                                            <LogOut size={20} />
                                            <span>Sign Out</span>
                                        </button>
                                    </>
                                ) : (
                                    // Not Signed In Mobile Menu
                                    <Link
                                        href="/login"
                                        className="flex items-center gap-3 w-full px-4 py-3 text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg"
                                        onClick={closeMobileMenu}
                                    >
                                        <CircleUserRound size={20} />
                                        <span>Sign In / Sign Up</span>
                                    </Link>
                                )}
                            </>
                        )}
                        <button
                            onClick={() => {
                                handleAddListing()
                                closeMobileMenu()
                            }}
                            className="flex items-center gap-3 w-full px-4 py-3 text-left text-base font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                        >
                            <MapPin size={20} />
                            <span>Add Listing</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Add fadeIn animation for dropdown */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
            `}</style>
        </nav>
    )
}

export default NavBarComponent
