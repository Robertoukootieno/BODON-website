'use client'

import React, { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const categories = [
  { id: 'safari', name: 'Safari', count: 24 },
  { id: 'cultural', name: 'Cultural', count: 18 },
  { id: 'adventure', name: 'Adventure', count: 15 },
  { id: 'beach', name: 'Beach', count: 12 },
  { id: 'mountain', name: 'Mountain', count: 8 },
  { id: 'wildlife', name: 'Wildlife', count: 32 },
]

const difficulties = [
  { id: 'easy', name: 'Easy', count: 28 },
  { id: 'moderate', name: 'Moderate', count: 35 },
  { id: 'challenging', name: 'Challenging', count: 12 },
]

const durations = [
  { id: '1-3', name: '1-3 days', count: 22 },
  { id: '4-7', name: '4-7 days', count: 31 },
  { id: '8-14', name: '8-14 days', count: 18 },
  { id: '15+', name: '15+ days', count: 4 },
]

export default function TourFilters() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    difficulties: [] as string[],
    durations: [] as string[],
    priceRange: [0, 5000],
  })

  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const handleCategoryChange = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }))
  }

  const handleDifficultyChange = (difficultyId: string) => {
    setFilters(prev => ({
      ...prev,
      difficulties: prev.difficulties.includes(difficultyId)
        ? prev.difficulties.filter(id => id !== difficultyId)
        : [...prev.difficulties, difficultyId]
    }))
  }

  const handleDurationChange = (durationId: string) => {
    setFilters(prev => ({
      ...prev,
      durations: prev.durations.includes(durationId)
        ? prev.durations.filter(id => id !== durationId)
        : [...prev.durations, durationId]
    }))
  }

  const clearFilters = () => {
    setFilters({
      categories: [],
      difficulties: [],
      durations: [],
      priceRange: [0, 5000],
    })
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="flex-1 text-sm text-neutral-700">{category.name}</span>
              <span className="text-xs text-neutral-500">({category.count})</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Min"
                className="input-field text-sm"
                value={filters.priceRange[0]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  priceRange: [parseInt(e.target.value) || 0, prev.priceRange[1]]
                }))}
              />
              <span className="text-neutral-500">-</span>
              <input
                type="number"
                placeholder="Max"
                className="input-field text-sm"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  priceRange: [prev.priceRange[0], parseInt(e.target.value) || 5000]
                }))}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Difficulty */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Difficulty</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {difficulties.map((difficulty) => (
            <label key={difficulty.id} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.difficulties.includes(difficulty.id)}
                onChange={() => handleDifficultyChange(difficulty.id)}
                className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="flex-1 text-sm text-neutral-700">{difficulty.name}</span>
              <span className="text-xs text-neutral-500">({difficulty.count})</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Duration */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Duration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {durations.map((duration) => (
            <label key={duration.id} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.durations.includes(duration.id)}
                onChange={() => handleDurationChange(duration.id)}
                className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="flex-1 text-sm text-neutral-700">{duration.name}</span>
              <span className="text-xs text-neutral-500">({duration.count})</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" fullWidth onClick={clearFilters}>
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          fullWidth
          leftIcon={<Filter className="w-4 h-4" />}
          onClick={() => setShowMobileFilters(true)}
        >
          Filters
        </Button>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <FilterContent />
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-neutral-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
