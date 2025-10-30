'use client'

import { motion } from 'framer-motion'
import { MapPin, Award, Users, Star } from 'lucide-react'

const teamMembers = [
  {
    name: 'Bob Awuonda',
    position: 'Founder & CEO',
    image: '/images/Bob.png',
    bio: 'With a passion for Kenya\'s natural beauty and tourism, Bob founded Bodon Expedition in 2020 with a vision to provide exceptional safari and adventure experiences to travelers worldwide.',
    specialties: ['Safari Planning', 'Cultural Tours', 'Business Development'],
    experience: '5 years'
  },
  {
    name: 'Sarah Wanjiku',
    position: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Sarah ensures smooth operations across all our expeditions, bringing exceptional organizational skills and attention to detail.',
    specialties: ['Operations Management', 'Quality Control', 'Team Coordination'],
    experience: '8+ years'
  },
  {
    name: 'James Mwangi',
    position: 'Senior Safari Guide',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'A passionate wildlife expert and storyteller, James has guided thousands of visitors through Kenya\'s most spectacular national parks.',
    specialties: ['Wildlife Photography', 'Maasai Mara', 'Bird Watching'],
    experience: '12+ years'
  },
  {
    name: 'Grace Akinyi',
    position: 'Cultural Experience Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Grace specializes in creating authentic cultural experiences that connect visitors with local communities across Kenya.',
    specialties: ['Cultural Tours', 'Community Relations', 'Traditional Crafts'],
    experience: '6+ years'
  },
  {
    name: 'David Kipchoge',
    position: 'Mountain Guide & Safety Expert',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'An experienced mountaineer and safety expert, David leads our Mount Kenya expeditions and ensures the highest safety standards.',
    specialties: ['Mountain Climbing', 'Safety Training', 'Equipment Management'],
    experience: '10+ years'
  },
  {
    name: 'Mary Njeri',
    position: 'Customer Experience Manager',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Mary is dedicated to ensuring every customer has an exceptional experience from booking to the end of their expedition.',
    specialties: ['Customer Service', 'Booking Management', 'Travel Planning'],
    experience: '7+ years'
  }
]

export default function AboutTeam() {
  return (
    <section id="team" className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our passionate team of local experts, experienced guides, and dedicated professionals are the heart of Bodon Expedition. Each member brings unique skills and deep knowledge of Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="w-4 h-4" />
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Our Team by the Numbers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">25+</div>
              <div className="text-neutral-600">Team Members</div>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-secondary-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">15+</div>
              <div className="text-neutral-600">Certified Guides</div>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">10+</div>
              <div className="text-neutral-600">Languages Spoken</div>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">100+</div>
              <div className="text-neutral-600">Years Combined Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Are you passionate about adventure, wildlife, and sharing Kenya's beauty with the world? We're always looking for talented individuals to join our growing team.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-neutral-100 transition-colors duration-200"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
