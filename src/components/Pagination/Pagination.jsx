'use client'
import React from 'react'

const range = (start, end) => {
  const out = []
  for (let i = start; i <= end; i++) out.push(i)
  return out
}

const getPaginationRange = ({ currentPage, totalPages, siblingCount = 1 }) => {
  const totalPageNumbers = siblingCount * 2 + 5
  if (totalPageNumbers >= totalPages) return range(1, totalPages)

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const showLeftEllipsis = leftSiblingIndex > 2
  const showRightEllipsis = rightSiblingIndex < totalPages - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = range(1, 3 + 2 * siblingCount)
    return [...leftRange, '...', totalPages]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = range(totalPages - (2 * siblingCount + 2), totalPages)
    return [1, '...', ...rightRange]
  }

  if (showLeftEllipsis && showRightEllipsis) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [1, '...', ...middleRange, '...', totalPages]
  }

  return range(1, totalPages)
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  if (totalPages <= 1) return null
  const pages = getPaginationRange({ currentPage, totalPages, siblingCount })

  const gotoPage = (p) => {
    if (typeof p === 'number' && p >= 1 && p <= totalPages && p !== currentPage) {
      onPageChange(p)
    }
  }

  const prev = () => gotoPage(currentPage - 1)
  const next = () => gotoPage(currentPage + 1)

  return (
    <nav className="w-full flex items-center justify-center mt-8" aria-label="Pagination Navigation">
      <ul className="flex items-center gap-2">
        <li>
          <button
            onClick={prev}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
            aria-label="Previous Page"
          >
            Prev
          </button>
        </li>
        {pages.map((p, idx) => (
          <li key={`${p}-${idx}`}>
            {p === '...' ? (
              <span className="px-3 py-2 text-gray-500 dark:text-gray-400 select-none">...</span>
            ) : (
              <button
                onClick={() => gotoPage(p)}
                aria-current={p === currentPage ? 'page' : undefined}
                className={`px-3 py-2 rounded-md border transition
                 ${p === currentPage
                    ? 'border-blue-600 bg-blue-600 text-white dark:border-blue-500'
                    : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
              >
                {p}
              </button>
            )}
          </li>
        ))}
        <li>
          <button
            onClick={next}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
            aria-label="Next Page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
