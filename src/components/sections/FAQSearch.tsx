'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react'

const popularSearches = [
  'visa requirements',
  'best time to visit',
  'safari cost',
  'what to pack',
  'car rental insurance',
  'payment methods',
  'group discounts',
  'cancellation policy'
]

export default function FAQSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
  }

  const handlePopularSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Search Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Search for <span className="text-primary-600">Answers</span>
            </h2>
            <p className="text-neutral-600">
              Type your question below or browse our popular topics to find the information you need.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="relative mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Ask a question... (e.g., 'What documents do I need for Kenya?')"
                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-neutral-200 rounded-2xl focus:border-primary-500 focus:ring-0 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>
            
            {/* Search Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded-xl hover:bg-primary-700 transition-colors font-medium"
            >
              Search
            </motion.button>
          </form>

          {/* Popular Searches */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Popular Searches</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((search, index) => (
                <motion.button
                  key={search}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePopularSearch(search)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-primary-50 text-neutral-700 hover:text-primary-700 rounded-full text-sm font-medium transition-all duration-200 border border-transparent hover:border-primary-200"
                >
                  {search}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Search Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
          >
            <h4 className="font-semibold text-neutral-900 mb-3">Search Tips</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600">
              <div>
                <strong>Be specific:</strong> "Kenya visa requirements for US citizens" works better than just "visa"
              </div>
              <div>
                <strong>Use keywords:</strong> Try terms like "safari", "car rental", "booking", "payment"
              </div>
              <div>
                <strong>Ask naturally:</strong> Type your question as you would ask a person
              </div>
              <div>
                <strong>Check spelling:</strong> Make sure your search terms are spelled correctly
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
