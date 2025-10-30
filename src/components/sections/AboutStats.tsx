'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  {
    number: 5000,
    suffix: '+',
    label: 'Happy Travelers',
    description: 'Satisfied customers from around the world'
  },
  {
    number: 5,
    suffix: '',
    label: 'Years Experience',
    description: 'Serving adventurers since 2020'
  },
  {
    number: 50,
    suffix: '+',
    label: 'Destinations',
    description: 'Across Kenya and East Africa'
  },
  {
    number: 25,
    suffix: '+',
    label: 'Expert Guides',
    description: 'Professional and experienced team'
  },
  {
    number: 100,
    suffix: '%',
    label: 'Safety Record',
    description: 'Impeccable safety standards'
  },
  {
    number: 95,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Customer satisfaction guarantee'
  }
]

function CountUpNumber({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(target * easeOutQuart))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [target, duration, isVisible])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white mb-2"
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  )
}

export default function AboutStats() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-500">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            These numbers represent more than statistics - they represent lives touched, memories created, and communities supported through our expeditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <CountUpNumber target={stat.number} suffix={stat.suffix} />
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-primary-100 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">Zero</div>
            <div className="text-primary-100 text-sm">Safety Incidents</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-primary-100 text-sm">Customer Support</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">365</div>
            <div className="text-primary-100 text-sm">Days a Year Service</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
