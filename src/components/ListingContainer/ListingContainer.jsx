'use client'
import { X, SlidersHorizontal }                             from 'lucide-react'
import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { motion }                                           from 'framer-motion'
import FilterDropdown                                       from '../FilterDropDown/FilterDropdown'
import ListingCardGrid                                      from '../ListingCardGrid'
import ListFilteredSidebar                                  from '../ListFilteredSidebar/ListFilteredSidebar'
import Pagination                                           from '../Pagination/Pagination'
import { listingsData }                                     from '../../data/listingsData'
import MobileFilterDrawer                                   from './MobileFilterDrawser'

// Sort helpers
const compareStrings = (a = '', b = '') => a.localeCompare(b, undefined, { sensitivity: 'base' })

const sortData = (rows, option) => {
  const copy = [...rows]
  switch (option) {
    case 'Highest Rated':
      return copy.sort((a, b) => {
        const r = (b.rating || 0) - (a.rating || 0)
        if (r !== 0) return r
        return (b.reviewCount || 0) - (a.reviewCount || 0)
      })
    case 'Most Reviewed':
      return copy.sort((a, b) => {
        const c = (b.reviewCount || 0) - (a.reviewCount || 0)
        if (c !== 0) return c
        return (b.rating || 0) - (a.rating || 0)
      })
    case 'Most Viewed':
      return copy.sort((a, b) => (b.views || 0) - (a.views || 0))
    case 'Featured Listings':
      return copy.sort((a, b) => {
        if (a.isFeatured === b.isFeatured) {
          return (b.rating || 0) - (a.rating || 0)
        }
        return a.isFeatured ? -1 : 1
      })
    case 'New Listings':
      return copy.sort((a, b) => (b.id || 0) - (a.id || 0))
    case 'Old Listings':
      return copy.sort((a, b) => (a.id || 0) - (b.id || 0))
    case 'Sort by A-Z':
      return copy.sort((a, b) => compareStrings(a.name, b.name))
    case 'Default Order':
    default:
      return rows
  }
}

const ListingContainer = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8

  const [activeFilters, setActiveFilters] = useState({
    searchTerm: '',
    category: '',
    minRating: 0,
    priceMin: 0,
    priceMax: 600000,
  })

  const [sortOption, setSortOption] = useState('Default Order')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleApplyFilters = useCallback((payload) => {
    setActiveFilters(payload)
    setCurrentPage(1)
  }, [])

  const clearAll = () => {
    setActiveFilters({
      searchTerm: '',
      category: '',
      minRating: 0,
      priceMin: 0,
      priceMax: 600000,
    })
    setCurrentPage(1)
  }

  const filteredData = useMemo(() => {
    const term = activeFilters.searchTerm?.toLowerCase() || ''
    return listingsData.filter((item) => {
      const matchesSearch =
        term.length === 0 ||
        item.name.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)

      const matchesCategory = !activeFilters.category || item.category === activeFilters.category
      const matchesRating = (item.rating || 0) >= (activeFilters.minRating || 0)

      const price = item.price ?? 0
      const inPriceRange =
        price >= (activeFilters.priceMin ?? 0) &&
        price <= (activeFilters.priceMax ?? Number.MAX_SAFE_INTEGER)

      return matchesSearch && matchesCategory && matchesRating && inPriceRange
    })
  }, [activeFilters])

  const sortedData = useMemo(() => sortData(filteredData, sortOption), [filteredData, sortOption])

  const totalItems = sortedData.length
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages)
  }, [totalPages, currentPage])

  const pageData = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return sortedData.slice(start, start + pageSize)
  }, [sortedData, currentPage])

  const chips = useMemo(() => {
    const out = []
    if (activeFilters.searchTerm) out.push({ label: `Search: ${activeFilters.searchTerm}`, key: 'searchTerm' })
    if (activeFilters.category) out.push({ label: activeFilters.category, key: 'category' })
    if (activeFilters.minRating && activeFilters.minRating > 0) out.push({ label: `Rating ≥ ${activeFilters.minRating}`, key: 'minRating' })
    if (activeFilters.priceMin || activeFilters.priceMax !== 600000)
      out.push({ label: `FCFA ${activeFilters.priceMin.toLocaleString()} - ${activeFilters.priceMax.toLocaleString()}`, key: 'price' })
    if (sortOption && sortOption !== 'Default Order')
      out.push({ label: `Sort: ${sortOption}`, key: 'sort' })
    return out
  }, [activeFilters, sortOption])

  const removeChip = (key) => {
    if (key === 'price') {
      setActiveFilters((prev) => ({ ...prev, priceMin: 0, priceMax: 600000 }))
    } else if (key === 'sort') {
      setSortOption('Default Order')
    } else {
      setActiveFilters((prev) => ({ ...prev, [key]: key === 'minRating' ? 0 : '' }))
    }
    setCurrentPage(1)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Mobile/Tablet top bar with Filters button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-4 lg:hidden flex items-center justify-between"
      >
        <button
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-slate-800 text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
        <FilterDropdown value={sortOption} onChange={setSortOption} />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Desktop Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block h-max rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 p-6 shadow-sm"
        >
          <ListFilteredSidebar onApply={(p) => { handleApplyFilters(p) }} />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2 flex flex-col gap-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm"
        >
          {/* Active Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-between flex-wrap gap-3"
          >
            <div className="flex items-center gap-2 flex-wrap">
              {chips.length > 0 ? (
                chips.map((c, idx) => (
                  <motion.span
                    key={c.key + c.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    className="text-xs sm:text-sm flex items-center px-3 py-1 gap-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200"
                  >
                    <span>{c.label}</span>
                    <button className="hover:text-red-500 transition" onClick={() => removeChip(c.key)} aria-label={`Remove ${c.label}`}>
                      <X size={14} />
                    </button>
                  </motion.span>
                ))
              ) : (
                <span className="text-sm text-gray-500 dark:text-gray-400">No filters applied</span>
              )}
            </div>
            <button
              onClick={clearAll}
              className="text-xs sm:text-sm flex items-center bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
            >
              Clear All
            </button>
          </motion.div>

          {/* Results Count & Sort (desktop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden lg:flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4"
          >
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {totalItems} Listings Found
            </span>
            <FilterDropdown value={sortOption} onChange={setSortOption} />
          </motion.div>

          {/* Results Count (mobile/tablet, separate line for tighter layout) */}
          <div className="lg:hidden -mt-2 text-sm text-gray-700 dark:text-gray-200">
            {totalItems} Listings Found
          </div>

          {/* Listings Grid */}
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ListingCardGrid data={pageData} />
          </motion.div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              siblingCount={1}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile/Tablet Drawer */}
      <MobileFilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <ListFilteredSidebar
          onApply={(payload) => {
            handleApplyFilters(payload)
            setDrawerOpen(false)
          }}
        />
      </MobileFilterDrawer>
    </motion.div>
  )
}

export default ListingContainer
