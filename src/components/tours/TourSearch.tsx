'use client'

import React, { useState } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function TourSearch() {
  const [searchData, setSearchData] = useState({
    destination: '',
    startDate: '',
    duration: '',
    travelers: '2',
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search data:', searchData)
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
      <CardContent className="p-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Destination */}
            <div>
              <Input
                placeholder="Where to?"
                leftIcon={<MapPin className="w-4 h-4" />}
                value={searchData.destination}
                onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
              />
            </div>

            {/* Start Date */}
            <div>
              <Input
                type="date"
                leftIcon={<Calendar className="w-4 h-4" />}
                value={searchData.startDate}
                onChange={(e) => setSearchData({ ...searchData, startDate: e.target.value })}
              />
            </div>

            {/* Duration */}
            <div>
              <select
                className="input-field"
                value={searchData.duration}
                onChange={(e) => setSearchData({ ...searchData, duration: e.target.value })}
              >
                <option value="">Any duration</option>
                <option value="1-3">1-3 days</option>
                <option value="4-7">4-7 days</option>
                <option value="8-14">8-14 days</option>
                <option value="15+">15+ days</option>
              </select>
            </div>

            {/* Travelers */}
            <div>
              <Input
                type="number"
                min="1"
                max="20"
                placeholder="Travelers"
                leftIcon={<Users className="w-4 h-4" />}
                value={searchData.travelers}
                onChange={(e) => setSearchData({ ...searchData, travelers: e.target.value })}
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            fullWidth
            leftIcon={<Search className="w-5 h-5" />}
          >
            Search Tours
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
