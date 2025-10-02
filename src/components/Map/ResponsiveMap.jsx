'use client';
import React from 'react';

export default function ResponsiveMap({ src }) {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
      <iframe
        className="w-full h-full border-0"
        src={src}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Listing location map"
      />
    </div>
  );
}
