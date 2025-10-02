'use client';
import React from 'react';

const CounterRow = ({ label, value, onIncrement, onDecrement }) => (
  <div className="flex items-center justify-center gap-4 px-2 py-1">
    {/* <div>
      <div className="text-sm font-medium">{label}</div>
      <div className="text-xs text-gray-500">Tap +/- to change</div>
    </div> */}

    <div className="flex items-center gap-3">
      <button
        aria-label={`decrease ${label}`}
        onClick={onDecrement}
        className="h-[15px] w-[25px] p-2 rounded-[4px] bg-gray-300 flex items-center justify-center text-lg select-none"
      >
        –
      </button>

      <div className="min-w-[36px] text-center font-semibold">{value}</div>

      <button
        aria-label={`increase ${label}`}
        onClick={onIncrement}
        className="h-[15px] w-[25px] p-2 rounded-[4px] bg-gray-300 flex items-center justify-center text-lg select-none"
      >
        +
      </button>
    </div>
  </div>
);

const CounterComponent = ({ guestNo, setGuestNo, childrenNo, setChildrenNo }) => {
  return (
    <div className="flex flex-col gap-3">
      <CounterRow
        label="Guests"
        value={guestNo}
        onIncrement={() => setGuestNo(prev => prev + 1)}
        onDecrement={() => setGuestNo(prev => Math.max(prev - 1, 0))}
      />
      <hr />
      <CounterRow
        label="Children"
        value={childrenNo}
        onIncrement={() => setChildrenNo(prev => prev + 1)}
        onDecrement={() => setChildrenNo(prev => Math.max(prev - 1, 0))}
      />
    </div>
  );
};

export default CounterComponent;
