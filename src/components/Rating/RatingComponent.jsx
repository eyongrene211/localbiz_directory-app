'use client'
import React           from 'react'
import CreatableSelect from 'react-select/creatable'
import clsx            from 'clsx'

const selectClassNames = {
  control: ({ isFocused }) =>
    clsx(
      'min-h-10 rounded-md border bg-white dark:bg-slate-800 text-sm transition-colors',
      isFocused
        ? 'border-blue-500 ring-1 ring-blue-500'
        : 'border-slate-300 dark:border-slate-600'
    ),
  valueContainer: () => 'py-2 px-3',
  placeholder: () => 'text-slate-400 dark:text-slate-500',
  input: () => 'text-slate-700 dark:text-slate-100',
  singleValue: () => 'text-slate-700 dark:text-slate-100',
  menu: () =>
    'mt-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg',
  option: ({ isFocused, isSelected }) =>
    clsx(
      'cursor-pointer px-3 py-2 text-sm',
      isSelected
        ? 'bg-blue-600 text-white'
        : isFocused
        ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
        : 'text-slate-700 dark:text-slate-300'
    ),
  clearIndicator: () =>
    'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors',
  dropdownIndicator: () =>
    'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors',
}

export default function RatingComponent({ value = null, onChange = () => {} }) {
  const ratingOptions = [
    { value: 1, label: '⭐ 1 - Very Poor' },
    { value: 2, label: '⭐⭐ 2 - Poor' },
    { value: 3, label: '⭐⭐⭐ 3 - Medium' },
    { value: 4, label: '⭐⭐⭐⭐ 4 - Very Good' },
    { value: 5, label: '⭐⭐⭐⭐⭐ 5 - Excellent' },
  ]

  const selected = ratingOptions.find((o) => o.value === value) || null

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        Rating <span className="text-red-500">*</span>
      </label>
      <CreatableSelect
        unstyled
        classNamePrefix="react-select"
        classNames={selectClassNames}
        isClearable
        options={ratingOptions}
        placeholder="Select Rating..."
        value={selected}
        onChange={(opt) => onChange(opt ? opt.value : null)}
      />
    </div>
  )
}
