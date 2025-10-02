'use client';
import React           from 'react';
import CreatableSelect from 'react-select/creatable';
import '@/styles/react-select.css'; // ensure path is correct relative to your project root

export default function RatingComponent({ value = null, onChange = () => {} }) {
  const ratingOptions = [
    { value: 1, label: '⭐ 1 - Very Poor' },
    { value: 2, label: '⭐⭐ 2 - Poor' },
    { value: 3, label: '⭐⭐⭐ 3 - Medium' },
    { value: 4, label: '⭐⭐⭐⭐ 4 - Very Good' },
    { value: 5, label: '⭐⭐⭐⭐⭐ 5 - Excellent' },
  ];

  // react-select expects the whole option object as value
  const selected = ratingOptions.find((o) => o.value === value) || null;

  return (
    <div className="w-full">
      <CreatableSelect
        className="react-select-container"
        classNamePrefix="react-select"
        isClearable
        options={ratingOptions}
        placeholder="Select Rating..."
        value={selected}
        onChange={(opt) => onChange(opt ? opt.value : null)}
      />
    </div>
  );
}
