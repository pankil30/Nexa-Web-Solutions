'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  ShoppingCart,
  Briefcase,
  Palette,
  Code2,
  Globe,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Payment Pages',
      description: 'High converting premium payment pages.',
      gradient: 'from-violet-500 to-fuchsia-500',
    },
    {
      icon: Palette,
      title: 'Landing Pages',
      description: 'Modern landing pages built for growth.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Briefcase,
      title: 'Business Websites',
      description: 'Professional websites for businesses.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingCart,
      title: 'Online Stores',
      description: 'Premium ecommerce shopping experiences.',
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      icon: Globe,
      title: 'Portfolio Sites',
      description: 'Creative portfolio websites for brands.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Tailored custom website solutions.',
      gradient: 'from-indigo-500 to-violet-500',
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#f7f7f7] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Premium websites designed to grow your business online.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 hover:border-purple-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-black leading-tight mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    className="mt-4 flex items-center text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn more →
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}