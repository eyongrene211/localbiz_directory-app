'use client';
import { Send } from 'lucide-react';
import React    from 'react';

const SubscribeLetter = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">

        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Subscribe to Our Newsletter!
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            Join our marketing platform for the latest updates, offers, and events.
          </p>
        </div>

        {/* Input + Button */}
        <div className="flex w-full md:w-auto max-w-md relative">
          <input
            type="email"
            placeholder="Your Email Here..."
            className="w-full md:w-[350px] h-14 px-5 rounded-full focus:outline-none border-2 border-white/30 placeholder-white/80 bg-white/10 text-white transition"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-full border border-white transition">
            <Send size={18} />
            <span>Subscribe</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default SubscribeLetter;
