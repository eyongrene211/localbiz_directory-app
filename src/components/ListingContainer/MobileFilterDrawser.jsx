'use client'
import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment }                        from 'react'
import { X }                               from 'lucide-react'

const MobileFilterDrawer = ({ open, onClose, children }) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        {/* Panel (slide in from left) */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-200"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-150"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative w-10/12 max-w-sm bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-700 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <Dialog.Title className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    Filters
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800"
                    aria-label="Close filters"
                  >
                    <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* Body (scrollable) */}
                <div className="p-4 overflow-y-auto h-[calc(100vh-60px)]">
                  {children}
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MobileFilterDrawer
