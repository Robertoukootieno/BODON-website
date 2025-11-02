'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  ChevronUp, 
  Camera, 
  Car, 
  CreditCard, 
  FileText, 
  MapPin, 
  Shield,
  Plus,
  Minus
} from 'lucide-react'

const faqCategories = [
  {
    id: 'safari-tours',
    title: 'Safari & Tours',
    icon: Camera,
    color: 'from-green-500 to-green-600',
    questions: [
      {
        question: 'What is the best time to visit Kenya for safari?',
        answer: 'The best time for safari in Kenya is during the dry seasons: January-March and July-October. The Great Migration in Maasai Mara occurs from July-October. However, Kenya offers excellent wildlife viewing year-round, with each season having its unique advantages.'
      },
      {
        question: 'What should I pack for a Kenya safari?',
        answer: 'Essential items include: neutral-colored clothing (khaki, olive, brown), wide-brimmed hat, sunglasses, sunscreen (SPF 30+), insect repellent, comfortable walking shoes, binoculars, camera with extra batteries, and a light jacket for early morning/evening game drives.'
      },
      {
        question: 'How much does a Kenya safari cost?',
        answer: 'Safari costs vary widely based on accommodation level, duration, and group size. Budget safaris start from $150-250 per person per day, mid-range from $300-500, and luxury safaris from $800-2000+ per day. Our team can customize packages to fit your budget.'
      },
      {
        question: 'Is it safe to go on safari in Kenya?',
        answer: 'Yes, Kenya safaris are very safe when booked with licensed operators like Bodon Expedition. We follow strict safety protocols, use experienced guides, maintain our vehicles regularly, and have 24/7 emergency support. Kenya Wildlife Service also ensures park security.'
      },
      {
        question: 'What wildlife can I expect to see?',
        answer: 'Kenya is home to the Big Five (lion, leopard, elephant, buffalo, rhino), plus cheetahs, giraffes, zebras, wildebeest, hippos, crocodiles, and over 1,000 bird species. The Great Migration features millions of wildebeest and zebras crossing the Mara River.'
      }
    ]
  },
  {
    id: 'car-rental',
    title: 'Car Rental',
    icon: Car,
    color: 'from-blue-500 to-blue-600',
    questions: [
      {
        question: 'What documents do I need to rent a car in Kenya?',
        answer: 'You need a valid international driving permit (IDP) or a valid driving license from your home country, passport, and a credit card for the security deposit. The minimum age is 23 years, and you must have held a license for at least 2 years.'
      },
      {
        question: 'Is insurance included in car rental prices?',
        answer: 'Basic third-party insurance is included in all our rental prices. We also offer comprehensive insurance (CDW) and super cover options for additional protection. We recommend comprehensive coverage for peace of mind, especially for self-drive safaris.'
      },
      {
        question: 'Can I drive to national parks with a rental car?',
        answer: 'Yes, but we recommend 4WD vehicles for most national parks and reserves. Some parks like Maasai Mara require 4WD during rainy seasons. Our team will recommend the appropriate vehicle based on your planned destinations and travel dates.'
      },
      {
        question: 'What happens if the car breaks down?',
        answer: 'All our vehicles come with 24/7 roadside assistance. In case of breakdown, call our emergency hotline (+254-758270982) and we\'ll arrange immediate assistance or vehicle replacement. We have partnerships with service providers across Kenya.'
      },
      {
        question: 'Are there mileage restrictions?',
        answer: 'Most of our rentals include unlimited mileage within Kenya. For cross-border travel to Tanzania or Uganda, special arrangements and additional fees apply. Please inform us of your travel plans when booking.'
      }
    ]
  },
  {
    id: 'booking-payment',
    title: 'Booking & Payment',
    icon: CreditCard,
    color: 'from-purple-500 to-purple-600',
    questions: [
      {
        question: 'How do I make a booking?',
        answer: 'You can book through our website, call us at +254-758270982, email info@bodonexpedition.com, or visit our Nairobi office. We\'ll send you a detailed itinerary and booking confirmation once your deposit is received.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept M-Pesa, PayPal, Visa, Mastercard, American Express, bank transfers, and cash payments. For international clients, we recommend PayPal or credit cards. M-Pesa is convenient for local and East African clients.'
      },
      {
        question: 'How much deposit is required?',
        answer: 'We require a 30% deposit to confirm your booking, with the balance due 30 days before travel. For bookings made within 30 days of travel, full payment is required. Group bookings may have different payment terms.'
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'Cancellations 60+ days before travel: 10% fee. 30-59 days: 25% fee. 15-29 days: 50% fee. Less than 15 days: 75% fee. No-shows: 100% fee. We recommend travel insurance to protect against unforeseen circumstances.'
      },
      {
        question: 'Can I modify my booking after confirmation?',
        answer: 'Yes, modifications are possible subject to availability and may incur additional costs. Changes made 30+ days before travel are usually free. Changes within 30 days may incur fees depending on the nature of the modification.'
      }
    ]
  },
  {
    id: 'travel-requirements',
    title: 'Travel Requirements',
    icon: FileText,
    color: 'from-orange-500 to-orange-600',
    questions: [
      {
        question: 'Do I need a visa to visit Kenya?',
        answer: 'Most visitors need a visa to enter Kenya. You can apply for an eVisa online at evisa.go.ke before travel, or get a visa on arrival at the airport. US, UK, EU, and most Commonwealth citizens can get tourist visas. Check with the Kenyan embassy for your specific country requirements.'
      },
      {
        question: 'What vaccinations are required for Kenya?',
        answer: 'Yellow fever vaccination is required if coming from a yellow fever endemic area. Recommended vaccinations include hepatitis A & B, typhoid, meningitis, and routine vaccines (MMR, DPT, flu). Malaria prophylaxis is recommended for most areas. Consult your doctor 4-6 weeks before travel.'
      },
      {
        question: 'Is travel insurance necessary?',
        answer: 'While not mandatory, we strongly recommend comprehensive travel insurance covering medical expenses, evacuation, trip cancellation, and personal belongings. Kenya has good private healthcare, but costs can be high for visitors without insurance.'
      },
      {
        question: 'What currency is used in Kenya?',
        answer: 'The Kenyan Shilling (KES) is the official currency. All our prices are quoted in US Dollars (USD). US Dollars are widely accepted in tourist areas. Credit cards are accepted in major hotels and restaurants. ATMs are available in cities and towns. We recommend carrying some cash in KES for small purchases and tips.'
      },
      {
        question: 'What is the time zone in Kenya?',
        answer: 'Kenya is in East Africa Time (EAT), which is UTC+3. Kenya does not observe daylight saving time, so the time difference with other countries may vary seasonally.'
      }
    ]
  },
  {
    id: 'destinations',
    title: 'Destinations & Parks',
    icon: MapPin,
    color: 'from-red-500 to-red-600',
    questions: [
      {
        question: 'Which parks should I visit for the Big Five?',
        answer: 'Maasai Mara is excellent for all Big Five, especially during migration season. Amboseli offers great elephant viewing with Kilimanjaro backdrop. Tsavo East & West have large elephant herds and diverse wildlife. Lake Nakuru is famous for rhinos and flamingos.'
      },
      {
        question: 'How many days should I spend on safari?',
        answer: 'We recommend minimum 3-4 days for a meaningful safari experience. 5-7 days allows you to visit multiple parks and see diverse ecosystems. 10+ days enables you to experience the full range of Kenya\'s wildlife and landscapes at a relaxed pace.'
      },
      {
        question: 'Can I combine safari with beach holidays?',
        answer: 'Absolutely! Kenya\'s coast offers beautiful beaches in Mombasa, Malindi, Watamu, and Diani. Many clients combine 5-7 days safari with 3-4 days beach relaxation. We can arrange seamless transfers between safari destinations and coastal resorts.'
      },
      {
        question: 'What is the Great Migration and when does it happen?',
        answer: 'The Great Migration involves over 2 million wildebeest, zebras, and gazelles moving between Tanzania\'s Serengeti and Kenya\'s Maasai Mara. In Kenya, the best viewing is July-October, with dramatic river crossings at Mara River typically in August-September.'
      },
      {
        question: 'Are there cultural experiences available?',
        answer: 'Yes! We offer visits to Maasai villages, Samburu communities, and local markets. You can experience traditional dances, learn about local customs, visit schools and community projects, and purchase authentic handicrafts directly from artisans.'
      }
    ]
  },
  {
    id: 'safety-health',
    title: 'Safety & Health',
    icon: Shield,
    color: 'from-teal-500 to-teal-600',
    questions: [
      {
        question: 'Is Kenya safe for tourists?',
        answer: 'Kenya is generally safe for tourists, especially in established safari areas and beach destinations. We follow strict safety protocols, use experienced guides, and maintain constant communication. Avoid isolated areas, don\'t display valuables, and follow your guide\'s instructions.'
      },
      {
        question: 'What should I do about malaria prevention?',
        answer: 'Most of Kenya is in a malaria zone. Take prophylaxis as prescribed by your doctor, use insect repellent (DEET-based), wear long sleeves/pants in the evening, and sleep under mosquito nets. Coastal and highland areas above 2000m have lower risk.'
      },
      {
        question: 'What happens in case of medical emergency?',
        answer: 'We have 24/7 emergency support and partnerships with medical facilities. Nairobi has excellent private hospitals. Remote areas have flying doctor services. This is why we strongly recommend comprehensive travel insurance with medical evacuation coverage.'
      },
      {
        question: 'Are there any dangerous animals I should worry about?',
        answer: 'All wildlife should be respected and observed from a safe distance. Our experienced guides know animal behavior and maintain safe distances. Never leave your vehicle during game drives unless at designated areas. Follow all park rules and guide instructions.'
      },
      {
        question: 'What safety measures do you have for COVID-19?',
        answer: 'We follow all government health protocols including sanitization of vehicles, temperature checks, and social distancing where possible. Masks may be required in certain situations. We monitor health guidelines and adjust our procedures accordingly.'
      }
    ]
  }
]

export default function FAQCategories() {
  const [activeCategory, setActiveCategory] = useState('safari-tours')
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const toggleQuestion = (questionIndex: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionIndex) 
        ? prev.filter(q => q !== questionIndex)
        : [...prev, questionIndex]
    )
  }

  const activeData = faqCategories.find(cat => cat.id === activeCategory)

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Browse by <span className="text-primary-600">Category</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Find answers organized by topic. Click on any category to explore detailed questions and expert answers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-6">Categories</h3>
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-xl text-left transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200 text-primary-700'
                        : 'hover:bg-neutral-50 text-neutral-700 border-2 border-transparent'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{category.title}</div>
                      <div className="text-sm text-neutral-500">
                        {category.questions.length} questions
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Questions Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activeData?.color} flex items-center justify-center`}>
                  {activeData?.icon && <activeData.icon className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">{activeData?.title}</h3>
                  <p className="text-neutral-600">{activeData?.questions.length} frequently asked questions</p>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {activeData?.questions.map((faq, index) => {
                  const questionId = `${activeCategory}-${index}`
                  const isOpen = openQuestions.includes(questionId)

                  return (
                    <motion.div
                      key={questionId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border border-neutral-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                      >
                        <h4 className="text-lg font-semibold text-neutral-900 pr-4">
                          {faq.question}
                        </h4>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-primary-600" />
                          ) : (
                            <Plus className="w-5 h-5 text-neutral-400" />
                          )}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-0">
                              <div className="border-t border-neutral-100 pt-4">
                                <p className="text-neutral-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
