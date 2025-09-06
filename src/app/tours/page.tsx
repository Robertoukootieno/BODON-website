import React from 'react'
import Layout from '@/components/layout/Layout'
import TourFilters from '@/components/tours/TourFilters'
import TourGrid from '@/components/tours/TourGrid'
import TourSearch from '@/components/tours/TourSearch'

export const metadata = {
  title: 'Tours - Discover Kenya\'s Best Adventures',
  description: 'Browse our collection of carefully curated tours across Kenya. From safari adventures to cultural experiences, find your perfect Kenyan journey with Bodnon Expedition.',
}

export default function ToursPage() {
  return (
    <Layout>
      <div className="bg-neutral-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-16">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Kenya's Adventures
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                From thrilling safaris to cultural immersions, explore our handpicked collection of authentic Kenyan experiences.
              </p>
              <TourSearch />
            </div>
          </div>
        </section>

        {/* Tours Content */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <TourFilters />
              </div>

              {/* Tours Grid */}
              <div className="lg:col-span-3">
                <TourGrid />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
