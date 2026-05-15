'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We understand your business goals, target audience, and competition to create a strategic foundation.',
      features: ['Market Research', 'Competitor Analysis', 'User Insights', 'Strategic Planning'],
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our designers create stunning mockups and wireframes tailored to your brand and user experience.',
      features: ['Wireframing', 'Visual Design', 'Prototyping', 'User Testing'],
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build your website with cutting-edge technology, ensuring speed, security, and scalability.',
      features: ['Frontend Development', 'Backend Setup', 'Database Design', 'API Integration'],
    },
    {
      number: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing ensures your site works flawlessly across all devices before going live.',
      features: ['Quality Assurance', 'Performance Testing', 'Security Audit', 'Launch Support'],
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-4">
            Our Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to building websites that deliver results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex gap-4 sm:gap-8 md:gap-12">
                {/* Step Number */}
                <motion.div
                  className="flex-shrink-0 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-purple-700 to-pink-600 flex items-center justify-center text-white text-xl sm:text-2xl font-black sticky top-20"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <div className="flex-grow pt-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {step.features.map((feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-purple-700 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-24 w-0.5 h-20 bg-gradient-to-b from-purple-700 to-transparent ml-5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
