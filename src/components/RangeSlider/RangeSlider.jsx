'use client'
import { useState, useEffect, useCallback } from 'react'

export default function RangeSlider({
  min = 0,
  max = 600000,
  step = 1000,
  initialMin = 20000,
  initialMax = 150000,
  currency = 'FCFA ',
  onChange,
}) {
  const [values, setValues] = useState([initialMin, initialMax])

  const handleChange = useCallback((index, newVal) => {
    setValues((prev) => {
      const updated = [...prev]
      updated[index] = newVal
      if (updated[0] > updated[1]) {
        index === 0 ? (updated[1] = newVal) : (updated[0] = newVal)
      }
      return updated
    })
  }, [])

  useEffect(() => {
    onChange?.(values)
  }, [values, onChange])

  const percentMin = ((values[0] - min) / (max - min)) * 100
  const percentMax = ((values[1] - min) / (max - min)) * 100

  return (
    <div className="relative w-full max-w-md p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700">
      {/* Track */}
      <div className="relative h-2 bg-gray-300 dark:bg-slate-700 rounded">
        <div
          className="absolute h-2 bg-blue-500 rounded"
          style={{ left: `${percentMin}%`, right: `${100 - percentMax}%` }}
        />
        {/* Min input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[0]}
          onChange={(e) => handleChange(0, Number(e.target.value))}
          className="absolute w-full top-1/2 -translate-y-1/2 appearance-none pointer-events-auto bg-transparent"
        />
        {/* Max input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[1]}
          onChange={(e) => handleChange(1, Number(e.target.value))}
          className="absolute w-full top-1/2 -translate-y-1/2 appearance-none pointer-events-auto bg-transparent"
        />

        {/* Floating tooltips */}
        <span
          className="absolute -top-8 text-xs font-semibold px-2 py-1 rounded bg-gray-800 text-white whitespace-nowrap transform -translate-x-1/2"
          style={{ left: `${percentMin}%` }}
        >
          {currency}{values[0].toLocaleString()}
        </span>
        <span
          className="absolute -top-8 text-xs font-semibold px-2 py-1 rounded bg-gray-800 text-white whitespace-nowrap transform -translate-x-1/2"
          style={{ left: `${percentMax}%` }}
        >
          {currency}{values[1].toLocaleString()}
        </span>
      </div>

      <style jsx>{`
        input[type='range'] {
          pointer-events: none; /* thumbs only */
        }
        input[type='range']::-webkit-slider-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid #fff;
          box-shadow: 0 0 4px rgba(0,0,0,0.25);
          cursor: pointer;
          pointer-events: auto;
          appearance: none;
        }
        input[type='range']::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid #fff;
          box-shadow: 0 0 4px rgba(0,0,0,0.25);
          cursor: pointer;
          pointer-events: auto;
        }
      `}</style>
    </div>
  )
}
