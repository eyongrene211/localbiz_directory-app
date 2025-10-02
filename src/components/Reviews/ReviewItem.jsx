'use client';
import React    from 'react';
import { Star } from 'lucide-react';

export default function ReviewItem({ name, date, text, stars = 0, img = '/assets/images/closeup_pic1.jpg' }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 border-b border-slate-200 pb-6">
      <div className="flex-shrink-0">
        <img src={img} alt={`${name} profile`} className="w-16 h-16 rounded-full object-cover" />
      </div>

      <div className="flex flex-col space-y-2 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-semibold text-slate-800">{name}</h3>
          <p className="text-sm text-slate-500">{date}</p>
        </div>

        {stars > 0 && (
          <ul className="flex space-x-1 text-blue-500">
            {Array.from({ length: stars }).map((_, i) => (
              <li key={i}><Star size={14} /></li>
            ))}
          </ul>
        )}

        <p className="text-slate-700 text-justify">{text}</p>
      </div>
    </div>
  );
}
