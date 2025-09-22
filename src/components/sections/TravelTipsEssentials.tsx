'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Backpack, 
  Camera, 
  Sun, 
  Shield, 
  Shirt, 
  Zap,
  CheckCircle,
  AlertTriangle,
  Thermometer,
  Droplets
} from 'lucide-react'

const packingCategories = [
  {
    icon: Shirt,
    title: 'Clothing Essentials',
    color: 'from-blue-500 to-blue-600',
    items: [
      {
        item: 'Lightweight, breathable shirts',
        reason: 'Kenya can be hot and humid, especially in coastal areas',
        essential: true
      },
      {
        item: 'Long-sleeved shirts and pants',
        reason: 'Protection from sun, insects, and thorny vegetation',
        essential: true
      },
      {
        item: 'Warm jacket or fleece',
        reason: 'Early morning game drives and highland areas can be cold',
        essential: true
      },
      {
        item: 'Comfortable walking shoes',
        reason: 'For nature walks and exploring local communities',
        essential: true
      },
      {
        item: 'Sandals or flip-flops',
        reason: 'For relaxing at camp and beach areas',
        essential: false
      },
      {
        item: 'Wide-brimmed hat',
        reason: 'Essential sun protection during game drives',
        essential: true
      }
    ]
  },
  {
    icon: Camera,
    title: 'Photography & Electronics',
    color: 'from-purple-500 to-purple-600',
    items: [
      {
        item: 'Camera with extra batteries',
        reason: 'Limited charging opportunities in remote areas',
        essential: true
      },
      {
        item: 'Binoculars (8x32 or 10x42)',
        reason: 'Essential for wildlife viewing and bird watching',
        essential: true
      },
      {
        item: 'Power bank/portable charger',
        reason: 'Keep devices charged during long safari days',
        essential: true
      },
      {
        item: 'Universal power adapter',
        reason: 'Kenya uses Type G plugs (British standard)',
        essential: true
      },
      {
        item: 'Headlamp or flashlight',
        reason: 'For navigating camps at night and early morning',
        essential: true
      },
      {
        item: 'Extra memory cards',
        reason: 'You\'ll take more photos than you expect!',
        essential: false
      }
    ]
  },
  {
    icon: Shield,
    title: 'Health & Safety',
    color: 'from-green-500 to-green-600',
    items: [
      {
        item: 'Insect repellent (DEET-based)',
        reason: 'Protection against mosquitoes and other insects',
        essential: true
      },
      {
        item: 'Sunscreen (SPF 30+)',
        reason: 'Strong equatorial sun requires high protection',
        essential: true
      },
      {
        item: 'First aid kit',
        reason: 'Basic medical supplies for minor injuries',
        essential: true
      },
      {
        item: 'Prescription medications',
        reason: 'Bring extra supply in original containers',
        essential: true
      },
      {
        item: 'Hand sanitizer',
        reason: 'Important for hygiene, especially before meals',
        essential: true
      },
      {
        item: 'Water purification tablets',
        reason: 'Backup for safe drinking water in remote areas',
        essential: false
      }
    ]
  },
  {
    icon: Backpack,
    title: 'Safari Accessories',
    color: 'from-orange-500 to-orange-600',
    items: [
      {
        item: 'Daypack or small backpack',
        reason: 'For carrying essentials during game drives',
        essential: true
      },
      {
        item: 'Reusable water bottle',
        reason: 'Stay hydrated and reduce plastic waste',
        essential: true
      },
      {
        item: 'Dust mask or bandana',
        reason: 'Protection from dust on rough roads',
        essential: false
      },
      {
        item: 'Wet wipes',
        reason: 'Quick cleaning when water isn\'t available',
        essential: true
      },
      {
        item: 'Ziplock bags',
        reason: 'Protect electronics and documents from dust',
        essential: true
      },
      {
        item: 'Duct tape',
        reason: 'Universal fix for equipment and gear',
        essential: false
      }
    ]
  }
]

const weatherTips = [
  {
    icon: Sun,
    title: 'Dry Season (June - October)',
    description: 'Best time for wildlife viewing with clear skies and minimal rain',
    tips: [
      'Pack lightweight, breathable clothing',
      'Bring extra sunscreen and lip balm',
      'Expect dusty conditions on game drives',
      'Perfect for photography with excellent visibility'
    ],
    temperature: '20-28°C (68-82°F)',
    rainfall: 'Minimal'
  },
  {
    icon: Droplets,
    title: 'Wet Season (November - May)',
    description: 'Lush landscapes, fewer crowds, and great for bird watching',
    tips: [
      'Pack waterproof jacket and rain gear',
      'Bring quick-dry clothing',
      'Expect muddy roads and possible delays',
      'Great for photography with dramatic skies'
    ],
    temperature: '22-30°C (72-86°F)',
    rainfall: 'Moderate to Heavy'
  }
]

const essentialTips = [
  {
    icon: Thermometer,
    title: 'Temperature Variations',
    tip: 'Kenya has significant temperature variations. Early morning game drives can be 10-15°C (50-59°F), while midday can reach 30°C (86°F). Layer your clothing!'
  },
  {
    icon: Zap,
    title: 'Power & Charging',
    tip: 'Many safari camps have limited electricity hours (usually 6-10 PM). Charge all devices during these times and bring power banks for backup.'
  },
  {
    icon: AlertTriangle,
    title: 'Luggage Restrictions',
    tip: 'If flying between parks, soft-sided luggage is required with weight limits of 15kg (33lbs). Pack light and leave room for souvenirs!'
  }
]

export default function TravelTipsEssentials() {
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
            Essential <span className="text-primary-600">Packing Guide</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Pack smart for your Kenya adventure with our comprehensive guide based on 15+ years of safari experience.
          </p>
        </motion.div>

        {/* Packing Categories */}
        <div className="space-y-12 mb-16">
          {packingCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">{category.title}</h3>
                  <p className="text-neutral-600">Essential items for your Kenya adventure</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((packingItem, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-xl p-4 ${packingItem.essential ? 'ring-2 ring-primary-200' : ''}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {packingItem.essential ? (
                          <CheckCircle className="w-5 h-5 text-primary-600" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-neutral-300 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-neutral-900">{packingItem.item}</h4>
                          {packingItem.essential && (
                            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                              Essential
                            </span>
                          )}
                        </div>
                        <p className="text-neutral-600 text-sm">{packingItem.reason}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Weather Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Weather-Based <span className="text-primary-600">Packing Tips</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {weatherTips.map((weather, index) => (
              <motion.div
                key={weather.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <weather.icon className="w-12 h-12 text-primary-600" />
                  <div>
                    <h4 className="text-xl font-bold text-neutral-900">{weather.title}</h4>
                    <p className="text-neutral-600 text-sm">{weather.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <div className="text-sm text-neutral-500 mb-1">Temperature</div>
                    <div className="font-semibold text-neutral-900">{weather.temperature}</div>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <div className="text-sm text-neutral-500 mb-1">Rainfall</div>
                    <div className="font-semibold text-neutral-900">{weather.rainfall}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {weather.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Essential Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Pro <span className="text-primary-600">Packing Tips</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {essentialTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <tip.icon className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">{tip.title}</h4>
                    <p className="text-neutral-600 text-sm">{tip.tip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
