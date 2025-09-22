'use client'

import { motion } from 'framer-motion'
import { Download, Image, FileText, Video, Users, Award } from 'lucide-react'
import Button from '@/components/ui/Button'

const pressKitItems = [
  {
    icon: FileText,
    title: 'Company Fact Sheet',
    description: 'Key information, statistics, and company overview',
    fileSize: '2.3 MB',
    format: 'PDF',
    downloadUrl: '#'
  },
  {
    icon: Image,
    title: 'High-Resolution Photos',
    description: 'Professional photos of wildlife, landscapes, and team',
    fileSize: '45.7 MB',
    format: 'ZIP',
    downloadUrl: '#'
  },
  {
    icon: Users,
    title: 'Executive Bios',
    description: 'Detailed biographies of key leadership team members',
    fileSize: '1.8 MB',
    format: 'PDF',
    downloadUrl: '#'
  },
  {
    icon: Award,
    title: 'Awards & Recognition',
    description: 'List of industry awards and certifications',
    fileSize: '3.2 MB',
    format: 'PDF',
    downloadUrl: '#'
  },
  {
    icon: Video,
    title: 'Brand Video Assets',
    description: 'Promotional videos and documentary footage',
    fileSize: '156 MB',
    format: 'ZIP',
    downloadUrl: '#'
  },
  {
    icon: Image,
    title: 'Logo & Brand Assets',
    description: 'Company logos in various formats and brand guidelines',
    fileSize: '8.4 MB',
    format: 'ZIP',
    downloadUrl: '#'
  }
]

export default function PressKit() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Press Kit & Media Resources
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Download our comprehensive press kit containing high-quality images, company information, executive bios, and brand assets for your media coverage.
          </p>
        </motion.div>

        {/* Quick Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-12 text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Complete Press Kit
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Download our complete press kit containing all media resources, company information, and high-resolution assets in one convenient package.
          </p>
          <Button size="lg" className="group">
            <Download className="w-5 h-5 mr-2" />
            Download Complete Kit (215 MB)
          </Button>
        </motion.div>

        {/* Individual Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressKitItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right text-sm text-neutral-500">
                  <div>{item.format}</div>
                  <div>{item.fileSize}</div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {item.title}
              </h3>
              
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:bg-primary-50 group-hover:border-primary-200 group-hover:text-primary-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-neutral-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-neutral-900 mb-6">
            Media Usage Guidelines
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Permitted Use</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Editorial and news coverage</li>
                <li>• Travel and tourism articles</li>
                <li>• Educational and documentary purposes</li>
                <li>• Social media posts with proper attribution</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Attribution Required</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Credit: "Bodon Expedition Kenya"</li>
                <li>• Include website: bodonexpedition.com</li>
                <li>• For photos: "Photo courtesy of Bodon Expedition"</li>
                <li>• Contact us for commercial use permissions</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-primary-800">
              <strong>Note:</strong> All media assets are provided for editorial use only. Commercial use requires prior written permission. For questions about usage rights or to request additional assets, please contact our media team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
