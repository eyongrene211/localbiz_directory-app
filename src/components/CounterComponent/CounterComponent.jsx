'use client'
import React from 'react'

const CounterRow = ({ label, value, onIncrement, onDecrement }) => (
  <div className="flex items-center justify-center gap-4 px-2 py-1">
    <div className="flex items-center gap-3">
      <button
        aria-label={`decrease ${label}`}
        onClick={onDecrement}
        className="h-[15px] w-[25px] p-2 rounded-[4px] bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600 flex items-center justify-center text-lg select-none text-gray-700 dark:text-gray-200 transition-colors"
      >
        –
      </button>

      <div className="min-w-[36px] text-center font-semibold text-gray-900 dark:text-gray-100">
        {value}
      </div>

      <button
        aria-label={`increase ${label}`}
        onClick={onIncrement}
        className="h-[15px] w-[25px] p-2 rounded-[4px] bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600 flex items-center justify-center text-lg select-none text-gray-700 dark:text-gray-200 transition-colors"
      >
        +
      </button>
    </div>
  </div>
)

const CounterComponent = ({ guestNo, setGuestNo, childrenNo, setChildrenNo }) => {
  return (
    <div className="flex flex-col gap-3">
      <CounterRow
        label="Guests"
        value={guestNo}
        onIncrement={() => setGuestNo((prev) => prev + 1)}
        onDecrement={() => setGuestNo((prev) => Math.max(prev - 1, 0))}
      />
      <hr className="border-gray-200 dark:border-gray-700" />
      <CounterRow
        label="Children"
        value={childrenNo}
        onIncrement={() => setChildrenNo((prev) => prev + 1)}
        onDecrement={() => setChildrenNo((prev) => Math.max(prev - 1, 0))}
      />
    </div>
  )
}

export default CounterComponent
