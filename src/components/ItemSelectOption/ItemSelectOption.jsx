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
  multiValue: () =>
    'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded px-2 py-1 m-1',
  multiValueLabel: () => 'text-sm',
  multiValueRemove: () =>
    'hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full ml-1',
  input: () => 'text-slate-700 dark:text-slate-100',
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

const menuOptions = [
  { value: 'coffee', label: 'Coffee' },
  { value: 'espresso', label: 'Espresso' },
  { value: 'cappuccino', label: 'Cappuccino' },
  { value: 'latte', label: 'Latte' },
  { value: 'iced-tea', label: 'Iced Tea' },
  { value: 'fresh-juice', label: 'Fresh Juice' },
  { value: 'burger', label: 'Burger' },
  { value: 'cheese-burger', label: 'Cheese Burger' },
  { value: 'veggie-burger', label: 'Veggie Burger' },
  { value: 'fries', label: 'Fries / Chips' },
  { value: 'sandwich', label: 'Sandwich' },
  { value: 'club-sandwich', label: 'Club Sandwich' },
  { value: 'pizza', label: 'Pizza Slice' },
  { value: 'pasta', label: 'Pasta' },
  { value: 'salad', label: 'Garden Salad' },
  { value: 'chicken-wings', label: 'Chicken Wings' },
  { value: 'grilled-fish', label: 'Grilled Fish' },
  { value: 'dessert', label: 'Dessert Plate' },
  { value: 'ice-cream', label: 'Ice Cream' },
  { value: 'cake', label: 'Cake Slice' },
]

export default function ItemSelectOption() {
  return (
    <CreatableSelect
      isMulti
      unstyled
      classNamePrefix="react-select"
      classNames={selectClassNames}
      options={menuOptions}
      placeholder="Select menu items..."
    />
  )
}
