'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Portfolio() {
  const firstRow = [
    {
      title: 'Neuronix AI',
      category: 'AI Platform',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Lucien Restaurant',
      category: 'Restaurant',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Paytech',
      category: 'Fintech',
      image:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Cyber Security',
      category: 'Security',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  const secondRow = [
    {
      title: 'SaaS Platform',
      category: 'SaaS',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Luxury Brand',
      category: 'Fashion',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Creative Studio',
      category: 'Agency',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Modern Store',
      category: 'Ecommerce',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Websites We Have
            <span className="block bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Premium landing pages, ecommerce stores, and business
            websites designed to convert visitors into customers.
          </p>
        </motion.div>
      </div>

      {/* FIRST ROW */}
      <div className="relative overflow-hidden mb-6">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-6 w-max"
        >
          {[...firstRow, ...firstRow].map((project, index) => (
            <div
              key={index}
              className="relative w-[280px] sm:w-[320px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[280px] rounded-3xl overflow-hidden shrink-0 group"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* CONTENT */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full w-fit">
                  {project.category}
                </span>

                <div className="flex items-end justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SECOND ROW */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-4 w-max"
        >
          {[...secondRow, ...secondRow].map((project, index) => (
            <div
              key={index}
              className="relative w-[240px] md:w-[300px] h-[500px] md:h-[500px] rounded-2xl overflow-hidden shrink-0 group"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* CONTENT */}
              <div className="relative z-10 h-full p-4 flex flex-col justify-between text-white">
                <span className="text-[10px] md:text-xs font-semibold bg-white/20 px-2 py-1 rounded-full w-fit">
                  {project.category}
                </span>

                <div className="flex items-end justify-between">
                  <h3 className="text-lg md:text-xl font-bold leading-tight">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}