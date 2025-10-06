'use client'
import React             from 'react'
import ScheduleSelect    from '@/components/Select/ScheduleSelect'
import ScheduleAccordion from '@/components/ScheduleAccordion/ScheduleAccordion'
import ItemSelectOption  from '@/components/ItemSelectOption/ItemSelectOption'
import {
  Calendar,
  Mail,
  Phone,
  Chromium,
  Facebook,
  Instagram,
  Twitter,
  YoutubeIcon,
  Heart,
} from 'lucide-react'

const BusinessOwnerDetails = ({ owner, phone }) => {
  const ownerData = owner || {
    name: 'Shree K. Patel',
    email: 'shree.patel@gmail.com',
    phone: phone || '+41 256 254 5487',
    website: 'www.Camfind.co.in',
    image: '/assets/images/closeup_pic1.jpg',
  }

  return (
    <div className="w-full lg:max-w-[413px] flex flex-col items-start justify-start mx-auto lg:mx-0 space-y-6 px-4 sm:px-6 lg:px-0">
      {/* Profile Section */}
      <div className="w-full flex flex-col bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="h-[150px] bg-gradient-to-r from-blue-600 to-cyan-500 relative" />
        <div className="flex flex-col items-center -mt-12 mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 z-10">
            <img
              src={ownerData.image}
              alt="Owner"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-slate-400 text-sm mt-2">Added By</span>
          <span className="font-bold text-lg text-slate-800 dark:text-slate-100">
            {ownerData.name}
          </span>
        </div>

        {/* Contact Info */}
        <div className="w-full px-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <Mail size={18} className="text-blue-600 dark:text-blue-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                Email
              </span>
              <span className="text-slate-400 text-sm">{ownerData.email}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30">
              <Phone size={18} className="text-green-600 dark:text-green-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                Phone No.
              </span>
              <span className="text-slate-400 text-sm">{ownerData.phone}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30">
              <Chromium size={18} className="text-purple-600 dark:text-purple-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                Website
              </span>
              <span className="text-slate-400 text-sm">{ownerData.website}</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full flex items-center justify-center gap-3 mt-4 p-6">
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
          >
            <Facebook size={18} className="text-blue-600 dark:text-blue-300" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-900/20 hover:bg-sky-200 dark:hover:bg-sky-900/30 transition-colors"
          >
            <Twitter size={18} className="text-sky-600 dark:text-sky-300" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-200 dark:hover:bg-pink-900/30 transition-colors"
          >
            <Instagram size={18} className="text-pink-600 dark:text-pink-300" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
          >
            <YoutubeIcon size={18} className="text-red-600 dark:text-red-300" />
          </a>
        </div>
      </div>

      {/* Booking Section */}
      <div className="w-full flex flex-col justify-center border border-slate-200 dark:border-slate-700 rounded-lg p-4 space-y-3 bg-white dark:bg-slate-900 shadow-sm">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
          <Calendar size={18} /> <span>Book Your Table</span>
        </div>

        <input
          type="text"
          className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Choose A Date"
        />

        <ScheduleSelect />
        <ScheduleAccordion />
        <ItemSelectOption />

        <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Book Request
        </button>
      </div>

      {/* Bookmark Section */}
      <div className="w-full border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col items-center bg-white dark:bg-slate-900 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
          <Heart size={18} className="text-red-500" />{' '}
          <span>Bookmark This Listing</span>
        </div>
        <span className="text-slate-400 text-sm">45 People Bookmark This Place</span>

        <div className="w-full flex justify-between gap-2">
          <div className="flex-1 flex items-center justify-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition">
            <Heart size={16} />
            <span className="text-slate-600 dark:text-slate-300 text-sm">Facebook</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition">
            <Heart size={16} className="text-blue-500" />
            <span className="text-blue-500 text-sm">Twitter</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition">
            <Heart size={16} className="text-pink-500" />
            <span className="text-pink-500 text-sm">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessOwnerDetails
