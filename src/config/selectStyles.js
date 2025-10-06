/**
 * Tailwind CSS classes for react-select components
 * Used with the `unstyled` prop and `classNames` prop
 */
export const selectClassNames = {
  control: ({ isFocused }) =>
    `px-4 py-2.5 border rounded-lg transition-colors ${
      isFocused
        ? 'border-blue-500 ring-2 ring-blue-500 dark:border-blue-400'
        : 'border-slate-300 dark:border-slate-600'
    } bg-white dark:bg-slate-900`,
  
  placeholder: () => 'text-slate-400 dark:text-slate-500',
  
  input: () => 'text-slate-900 dark:text-white',
  
  valueContainer: () => 'gap-1',
  
  singleValue: () => 'text-slate-900 dark:text-white',
  
  multiValue: () =>
    'bg-slate-100 dark:bg-slate-800 rounded px-2 py-1 flex items-center gap-1',
  
  multiValueLabel: () => 'text-slate-700 dark:text-slate-300 text-sm',
  
  multiValueRemove: () =>
    'text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 cursor-pointer',
  
  indicatorsContainer: () => 'gap-1',
  
  clearIndicator: () =>
    'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 cursor-pointer p-1',
  
  indicatorSeparator: () => 'bg-slate-300 dark:bg-slate-600',
  
  dropdownIndicator: () =>
    'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 cursor-pointer p-1',
  
  menu: () =>
    'mt-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden',
  
  menuList: () => 'py-1',
  
  option: ({ isFocused, isSelected }) =>
    `px-4 py-2 cursor-pointer transition-colors ${
      isSelected
        ? 'bg-blue-600 text-white'
        : isFocused
        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
        : 'text-slate-700 dark:text-slate-300'
    }`,
  
  noOptionsMessage: () =>
    'text-slate-500 dark:text-slate-400 py-4 text-center',
}
