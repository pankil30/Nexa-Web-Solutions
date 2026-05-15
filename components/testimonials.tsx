'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'E-commerce Founder',
      company: 'TrendMart',
      text: 'Nexa Web Solutions transformed our online presence. Sales increased by 300% within 3 months of launching our new website.',
      rating: 5,
      image: '🧑‍💼',
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      company: 'GrowthCo',
      text: 'The team delivered beyond expectations. Our landing page converts at 8.5%, way above industry standards.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Arjun Patel',
      role: 'Business Owner',
      company: 'DigitalFirst',
      text: 'Professional, responsive, and talented. They understood our vision and executed it flawlessly.',
      rating: 5,
      image: '🧑‍💼',
    },
    {
      name: 'Neha Singh',
      role: 'Product Manager',
      company: 'InnovateTech',
      text: 'Best investment we made this year. The ROI speaks for itself. Highly recommended!',
      rating: 5,
      image: '👩‍💼',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses we&apos;ve helped grow
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
            >
              {/* Stars */}
              <motion.div
                className="flex gap-1 mb-4"
                whileHover={{ scale: 1.1 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <motion.div
                  className="text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {testimonial.image}
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at <span className="font-semibold text-purple-700">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
