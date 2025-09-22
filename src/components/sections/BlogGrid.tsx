'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight, Eye, Heart } from 'lucide-react'
import Button from '@/components/ui/Button'

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Maasai Mara Safari: Best Times and Hidden Gems',
    excerpt: 'Discover the secrets of Kenya\'s most famous national reserve, from the Great Migration timing to lesser-known wildlife viewing spots that most tourists miss.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'James Mwangi',
    date: 'Dec 20, 2024',
    readTime: '8 min read',
    category: 'Safari Tips',
    views: 1250,
    likes: 89,
    featured: true
  },
  {
    id: 2,
    title: 'Mount Kenya Climbing: A Complete Beginner\'s Guide',
    excerpt: 'Everything you need to know about climbing Africa\'s second-highest peak, including routes, preparation, and what to expect on your journey.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'David Kipchoge',
    date: 'Dec 18, 2024',
    readTime: '12 min read',
    category: 'Adventure Guides',
    views: 892,
    likes: 67
  },
  {
    id: 3,
    title: 'Wildlife Photography in Kenya: Pro Tips from the Field',
    excerpt: 'Learn professional techniques for capturing stunning wildlife photos in Kenya\'s national parks, from camera settings to ethical photography practices.',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Wanjiku',
    date: 'Dec 15, 2024',
    readTime: '10 min read',
    category: 'Wildlife Photography',
    views: 1456,
    likes: 124
  },
  {
    id: 4,
    title: 'Maasai Culture: Understanding Kenya\'s Iconic Warrior Tribe',
    excerpt: 'Dive deep into the rich traditions, customs, and modern life of the Maasai people, one of Kenya\'s most recognizable ethnic groups.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Grace Akinyi',
    date: 'Dec 12, 2024',
    readTime: '7 min read',
    category: 'Cultural Experiences',
    views: 743,
    likes: 56
  },
  {
    id: 5,
    title: 'Conservation Success Stories: Kenya\'s Wildlife Recovery',
    excerpt: 'Explore inspiring conservation efforts across Kenya that are helping endangered species recover and thrive in their natural habitats.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Robert Ukoo Tieno',
    date: 'Dec 10, 2024',
    readTime: '9 min read',
    category: 'Conservation',
    views: 634,
    likes: 78
  },
  {
    id: 6,
    title: 'Bird Watching in Kenya: Top 10 Species to Spot',
    excerpt: 'Kenya is home to over 1,000 bird species. Discover the most spectacular birds you can encounter and the best locations to find them.',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'James Mwangi',
    date: 'Dec 8, 2024',
    readTime: '6 min read',
    category: 'Bird Watching',
    views: 521,
    likes: 43
  }
]

export default function BlogGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Stay updated with our latest insights, tips, and stories from the field. Our expert team shares their knowledge to help you make the most of your Kenyan adventure.
          </p>
        </motion.div>

        {/* Featured Article */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl overflow-hidden shadow-lg mb-12 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
                  <span className="px-3 py-1 bg-white rounded-full text-primary-600 font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">{post.author}</div>
                      <div className="text-sm text-neutral-600">Senior Guide</div>
                    </div>
                  </div>
                  
                  <Button className="group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 text-sm rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm text-neutral-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
