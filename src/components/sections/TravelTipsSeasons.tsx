'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sun, 
  Cloud, 
  Droplets, 
  Wind, 
  Thermometer, 
  Camera,
  Users,
  DollarSign,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'

const seasons = [
  {
    id: 'dry-season',
    title: 'Dry Season',
    period: 'June - October',
    icon: Sun,
    color: 'from-orange-500 to-yellow-500',
    temperature: '20-28°C (68-82°F)',
    rainfall: 'Minimal (0-50mm)',
    description: 'Peak safari season with excellent wildlife viewing and clear skies',
    pros: [
      'Best wildlife viewing as animals gather around water sources',
      'Clear skies perfect for photography',
      'Minimal rainfall means better road conditions',
      'Great Migration in Maasai Mara (July-October)',
      'Comfortable temperatures for game drives'
    ],
    cons: [
      'Higher prices due to peak season demand',
      'More crowded parks and accommodations',
      'Dusty conditions on game drives',
      'Limited green scenery for photography'
    ],
    bestFor: [
      'First-time safari visitors',
      'Wildlife photography enthusiasts',
      'Families with children',
      'Witnessing the Great Migration'
    ],
    packingTips: [
      'Light, breathable clothing for daytime',
      'Warm layers for early morning drives',
      'Dust masks or bandanas',
      'Extra sunscreen and lip balm'
    ]
  },
  {
    id: 'wet-season',
    title: 'Wet Season',
    period: 'November - May',
    icon: Cloud,
    color: 'from-blue-500 to-green-500',
    temperature: '22-30°C (72-86°F)',
    rainfall: 'Moderate to Heavy (100-200mm)',
    description: 'Lush landscapes, fewer crowds, and excellent bird watching opportunities',
    pros: [
      'Lower accommodation and tour prices',
      'Fewer tourists, more intimate wildlife experiences',
      'Lush, green landscapes perfect for photography',
      'Excellent bird watching with migratory species',
      'Baby animals born during this period'
    ],
    cons: [
      'Some roads may be impassable due to rain',
      'Wildlife more dispersed due to abundant water',
      'Possible flight delays due to weather',
      'Higher humidity levels'
    ],
    bestFor: [
      'Budget-conscious travelers',
      'Bird watching enthusiasts',
      'Landscape photographers',
      'Travelers seeking fewer crowds'
    ],
    packingTips: [
      'Waterproof jacket and rain gear',
      'Quick-dry clothing',
      'Waterproof bags for electronics',
      'Insect repellent for increased mosquito activity'
    ]
  }
]

const monthlyGuide = [
  {
    month: 'January',
    season: 'Short Dry Season',
    highlights: 'Calving season in southern Serengeti, clear skies',
    weather: 'Warm and dry',
    wildlife: 'Excellent',
    crowds: 'High',
    prices: 'Peak'
  },
  {
    month: 'February',
    season: 'Short Dry Season',
    highlights: 'Calving continues, great for predator action',
    weather: 'Hot and dry',
    wildlife: 'Excellent',
    crowds: 'High',
    prices: 'Peak'
  },
  {
    month: 'March',
    season: 'Long Rains Begin',
    highlights: 'Green landscapes emerge, fewer tourists',
    weather: 'Warm with afternoon showers',
    wildlife: 'Good',
    crowds: 'Medium',
    prices: 'Shoulder'
  },
  {
    month: 'April',
    season: 'Long Rains',
    highlights: 'Lush scenery, bird migration peak',
    weather: 'Wet and humid',
    wildlife: 'Fair',
    crowds: 'Low',
    prices: 'Low'
  },
  {
    month: 'May',
    season: 'Long Rains End',
    highlights: 'Beautiful landscapes, good value',
    weather: 'Decreasing rainfall',
    wildlife: 'Good',
    crowds: 'Low',
    prices: 'Low'
  },
  {
    month: 'June',
    season: 'Dry Season Begins',
    highlights: 'Great weather returns, migration starts',
    weather: 'Cool and dry',
    wildlife: 'Very Good',
    crowds: 'Medium',
    prices: 'Shoulder'
  },
  {
    month: 'July',
    season: 'Peak Dry Season',
    highlights: 'Great Migration in Maasai Mara',
    weather: 'Cool and dry',
    wildlife: 'Excellent',
    crowds: 'Very High',
    prices: 'Peak'
  },
  {
    month: 'August',
    season: 'Peak Dry Season',
    highlights: 'River crossings, best wildlife viewing',
    weather: 'Cool and dry',
    wildlife: 'Excellent',
    crowds: 'Very High',
    prices: 'Peak'
  },
  {
    month: 'September',
    season: 'Peak Dry Season',
    highlights: 'Continued migration, perfect weather',
    weather: 'Warm and dry',
    wildlife: 'Excellent',
    crowds: 'High',
    prices: 'Peak'
  },
  {
    month: 'October',
    season: 'Peak Dry Season',
    highlights: 'Migration returns south, great photography',
    weather: 'Warm and dry',
    wildlife: 'Excellent',
    crowds: 'High',
    prices: 'Peak'
  },
  {
    month: 'November',
    season: 'Short Rains',
    highlights: 'Green season begins, lower prices',
    weather: 'Warm with short showers',
    wildlife: 'Good',
    crowds: 'Medium',
    prices: 'Shoulder'
  },
  {
    month: 'December',
    season: 'Short Rains End',
    highlights: 'Holiday season, good weather returns',
    weather: 'Warm and mostly dry',
    wildlife: 'Very Good',
    crowds: 'High',
    prices: 'Peak'
  }
]

export default function TravelTipsSeasons() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Best Time to <span className="text-primary-600">Visit Kenya</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Plan your perfect Kenya adventure with our detailed seasonal guide based on weather patterns, wildlife movements, and local insights.
          </p>
        </motion.div>

        {/* Season Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {seasons.map((season, index) => (
            <motion.div
              key={season.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${season.color} rounded-2xl flex items-center justify-center`}>
                  <season.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">{season.title}</h3>
                  <p className="text-primary-600 font-semibold">{season.period}</p>
                  <p className="text-neutral-600 text-sm mt-1">{season.description}</p>
                </div>
              </div>

              {/* Weather Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Thermometer className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-medium text-neutral-700">Temperature</span>
                  </div>
                  <p className="font-semibold text-neutral-900">{season.temperature}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Droplets className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-medium text-neutral-700">Rainfall</span>
                  </div>
                  <p className="font-semibold text-neutral-900">{season.rainfall}</p>
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Advantages
                  </h4>
                  <ul className="space-y-2">
                    {season.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="text-sm text-neutral-700 flex items-start">
                        <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-3 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Considerations
                  </h4>
                  <ul className="space-y-2">
                    {season.cons.map((con, conIndex) => (
                      <li key={conIndex} className="text-sm text-neutral-700 flex items-start">
                        <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best For */}
              <div className="mb-6">
                <h4 className="font-bold text-neutral-900 mb-3">Best For:</h4>
                <div className="flex flex-wrap gap-2">
                  {season.bestFor.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Packing Tips */}
              <div>
                <h4 className="font-bold text-neutral-900 mb-3">Packing Essentials:</h4>
                <ul className="space-y-1">
                  {season.packingTips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-sm text-neutral-700 flex items-center">
                      <CheckCircle className="w-3 h-3 text-primary-600 mr-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Month-by-Month <span className="text-primary-600">Travel Guide</span>
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="text-left p-4 font-semibold text-neutral-900">Month</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Season</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Highlights</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Weather</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Wildlife</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Crowds</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Prices</th>
                </tr>
              </thead>
              <tbody>
                {monthlyGuide.map((month, index) => (
                  <motion.tr
                    key={month.month}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-neutral-100 hover:bg-neutral-50"
                  >
                    <td className="p-4 font-semibold text-neutral-900">{month.month}</td>
                    <td className="p-4 text-neutral-700 text-sm">{month.season}</td>
                    <td className="p-4 text-neutral-700 text-sm">{month.highlights}</td>
                    <td className="p-4 text-neutral-700 text-sm">{month.weather}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        month.wildlife === 'Excellent' ? 'bg-green-100 text-green-700' :
                        month.wildlife === 'Very Good' ? 'bg-blue-100 text-blue-700' :
                        month.wildlife === 'Good' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {month.wildlife}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        month.crowds === 'Very High' || month.crowds === 'High' ? 'bg-red-100 text-red-700' :
                        month.crowds === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {month.crowds}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        month.prices === 'Peak' ? 'bg-red-100 text-red-700' :
                        month.prices === 'Shoulder' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {month.prices}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
