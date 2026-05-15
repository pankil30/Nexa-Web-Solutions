'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹49,999',
      description: 'Perfect for small projects',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form',
        '30 days support',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '₹99,999',
      description: 'For growing businesses',
      features: [
        'Up to 15 pages',
        'Advanced features',
        'Complete SEO optimization',
        'Blog integration',
        'Payment gateway',
        '90 days support',
        'Monthly analytics',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Full-stack development',
        'E-commerce platform',
        'Advanced integrations',
        '1 year support',
        'Dedicated account manager',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Scale up anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: plan.highlighted ? 0 : -8 }}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${plan.highlighted
                ? 'bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 text-white shadow-2xl sm:scale-105'
                : 'bg-white border-2 border-gray-200 hover:border-purple-500 text-gray-900 shadow-md hover:shadow-xl'
                }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  🏆 Most Popular
                </motion.div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <span className={`text-5xl font-black ${plan.highlighted ? 'text-white' : 'text-purple-700'}`}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className={`text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                    {' '}one-time
                  </span>
                )}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-4 rounded-xl font-bold text-lg transition-all mb-8 ${plan.highlighted
                  ? 'bg-white text-purple-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-purple-700 to-pink-600 text-white hover:shadow-lg'
                  }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </motion.button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-yellow-300' : 'text-purple-700'}`} />
                    <span className={`text-sm font-medium ${plan.highlighted ? 'text-purple-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
