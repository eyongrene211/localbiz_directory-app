import React from 'react'
import Image from 'next/image'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react'

const FooterComponent = () => {
  return (
    <footer className='bg-gray-800  text-white'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          
          {/* Company Info - Takes 2 columns on large screens */}
          <div className='lg:col-span-2 space-y-6'>
            <div>
              <Image
                src='/assets/images/logo2.png'
                alt='Camfind Logo'
                width={120}
                height={50}
                className='mb-4'
              />
              <p className='text-gray-300 text-sm max-w-md leading-relaxed'>
                Discover amazing local businesses in your area. From restaurants and cafes to services and entertainment, find everything you need with Camfind.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className='font-semibold text-lg mb-4'>Follow Us</h3>
              <div className='flex items-center gap-3'>
                <a 
                  href='#' 
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors duration-300'
                  aria-label='Facebook'
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href='#' 
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-sky-500 transition-colors duration-300'
                  aria-label='Twitter'
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href='#' 
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-pink-600 transition-colors duration-300'
                  aria-label='Instagram'
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href='#' 
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-700 transition-colors duration-300'
                  aria-label='LinkedIn'
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Community Links */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-lg'>Community</h3>
            <ul className='space-y-2 text-gray-300'>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>About Camfind</a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Submit Listing</a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Camfind Report</a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Careers</a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Press</a>
              </li>
            </ul>
          </div>

          {/* Getting Started Links */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-lg'>Getting Started</h3>
            <ul className='space-y-2 text-gray-300'>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Trust & Safety</a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Investor Relations</a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Terms of Service</a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Privacy Policy</a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-300'>Camfind Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-lg'>Get in Touch</h3>
            <div className='space-y-4 text-gray-300'>
              
              {/* Address */}
              <div className='flex items-start gap-3'>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 mt-1 flex-shrink-0'>
                  <MapPin size={16} />
                </div>
                <div>
                  <p className='text-sm leading-relaxed'>
                    1234 Business Avenue<br />
                    Douala, Cameroon<br />
                    BP 5678
                  </p>
                  <span className='text-xs text-gray-400 mt-1 block'>Visit Us</span>
                </div>
              </div>
              
              {/* Phone */}
              <div className='flex items-start gap-3'>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 mt-1 flex-shrink-0'>
                  <Phone size={16} />
                </div>
                <div>
                  <p className='text-sm'>
                    +237 671 234 567<br />
                    +237 680 123 456
                  </p>
                  <span className='text-xs text-gray-400 mt-1 block'>Call Us</span>
                </div>
              </div>
              
              {/* Email */}
              <div className='flex items-start gap-3'>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 mt-1 flex-shrink-0'>
                  <Mail size={16} />
                </div>
                <div>
                  <p className='text-sm'>
                    hello@camfind.cm<br />
                    support@camfind.cm
                  </p>
                  <span className='text-xs text-gray-400 mt-1 block'>Email Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-sm text-gray-400'>
              &copy; 2025 Camfind. All Rights Reserved.
            </div>
            <div className='flex items-center gap-6 text-sm text-gray-400'>
              <a href='#' className='hover:text-white transition-colors duration-300'>Privacy Policy</a>
              <a href='#' className='hover:text-white transition-colors duration-300'>Terms of Use</a>
              <a href='#' className='hover:text-white transition-colors duration-300'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent