'use client'
import React             from 'react';
import ScheduleSelect    from '@/components/Select/ScheduleSelect';
import ScheduleAccordion from '@/components/ScheduleAccordion/ScheduleAccordion';
import ItemSelectOption  from '@/components/ItemSelectOption/ItemSelectOption';
import {
  BriefcaseBusiness, Calendar, Chromium, Facebook, Heart, Instagram,
  Mail, MapPin, Phone, Star, Twitter, YoutubeIcon
} from 'lucide-react';

const BusinessOwnerDetails = () => {
  return (
<div className="w-full lg:max-w-[413px] flex flex-col items-start justify-start mx-auto lg:mx-0 space-y-6 px-4 sm:px-6 lg:px-0">
      {/* Profile Section */}
      <div className="w-full flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-[150px] bg-gradient-to-r from-blue-600 to-cyan-500 relative"></div>
        <div className="flex flex-col items-center -mt-12 mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white z-10">
            <img src="/assets/images/closeup_pic1.jpg" alt="Owner" className="w-full h-full object-cover"/>
          </div>
          <span className="text-gray-400 text-sm mt-2">Added By</span>
          <span className="font-bold text-lg text-gray-800">Shree K. Patel</span>
        </div>

        {/* Contact Info */}
        <div className="w-full px-6 flex flex-col gap-4">
          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100">
              <Mail size={18} className="text-blue-600"/>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600 font-medium">Email</span>
              <span className="text-gray-400 text-sm">shree.patel@gmail.com</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100">
              <Phone size={18} className="text-green-600"/>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600 font-medium">Phone No.</span>
              <span className="text-gray-400 text-sm">+41 256 254 5487</span>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100">
              <Chromium size={18} className="text-purple-600"/>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600 font-medium">Website</span>
              <span className="text-gray-400 text-sm">www.Camfind.co.in</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full flex items-center justify-center gap-3 mt-4 p-6">
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-200 transition-colors duration-300"><Facebook size={18} className="text-blue-600"/></a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 hover:bg-sky-200 transition-colors duration-300"><Twitter size={18} className="text-sky-600"/></a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-200 transition-colors duration-300"><Instagram size={18} className="text-pink-600"/></a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 hover:bg-red-200 transition-colors duration-300"><YoutubeIcon size={18} className="text-red-600"/></a>
        </div>
      </div>

      {/* Booking Section */}
      <div className="w-full flex flex-col justify-center border rounded-lg p-4 space-y-3 bg-white shadow">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Calendar size={18}/> <span>Book Your Table</span>
        </div>

        <input type="text" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Choose A Date"/>

        <ScheduleSelect />
        <ScheduleAccordion />
        <ItemSelectOption />

        <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">Book Request</button>
      </div>

      {/* Bookmark Section */}
      <div className="w-full border rounded-lg p-4 flex flex-col items-center bg-white shadow space-y-3">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Heart size={18} className="text-red-500"/> <span>Bookmark This Listing</span>
        </div>
        <span className="text-gray-400 text-sm">45 People Bookmark This Place</span>

        <div className="w-full flex justify-between gap-2">
          <div className="flex-1 flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"><Heart size={16}/> <span className="text-gray-600 text-sm">Facebook</span></div>
          <div className="flex-1 flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"><Heart size={16} className="text-blue-500"/> <span className="text-blue-500 text-sm">Twitter</span></div>
          <div className="flex-1 flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"><Heart size={16} className="text-pink-500"/> <span className="text-pink-500 text-sm">Instagram</span></div>
        </div>
      </div>
    </div>
  )
}

export default BusinessOwnerDetails;
