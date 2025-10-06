'use client'
import CreatableSelect from 'react-select/creatable'
import clsx            from 'clsx'

const selectClassNames = {
  control: ({ isFocused }) =>
    clsx(
      'min-h-10 rounded-md border bg-white dark:bg-slate-800 text-sm',
      isFocused
        ? 'border-blue-500 ring-1 ring-blue-500'
        : 'border-slate-300 dark:border-slate-600'
    ),
  valueContainer: () => 'py-2 px-3',
  placeholder: () => 'text-slate-400',
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
}

export default function ScheduleSelect() {
  const timeOptions = [
    { value: '7:00AM', label: '7:00 AM' },
    { value: '7:30AM', label: '7:30 AM' },
    { value: '8:00AM', label: '8:00 AM' },
    { value: '8:30AM', label: '8:30 AM' },
    { value: '9:00AM', label: '9:00 AM' },
    { value: '9:30AM', label: '9:30 AM' },
    { value: '10:00AM', label: '10:00 AM' },
    { value: '10:30AM', label: '10:30 AM' },
    { value: '11:00AM', label: '11:00 AM' },
    { value: '11:30AM', label: '11:30 AM' },
    { value: '12:00PM', label: '12:00 PM' },
  ]

  return (
    <CreatableSelect
      unstyled
      classNamePrefix="react-select"
      classNames={selectClassNames}
      isClearable
      options={timeOptions}
      placeholder="Select time..."
    />
  )
}
