'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Typically, projects take 4-8 weeks depending on complexity and scope. Simpler projects like landing pages can be completed in 2-3 weeks, while full e-commerce sites may take 8-12 weeks.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! All our packages include support. Starter plans include 30 days, Professional includes 90 days, and Enterprise includes a full year of dedicated support with regular updates.',
    },
    {
      question: 'Can you help with domain and hosting?',
      answer: 'Absolutely. We can help you register a domain and set up reliable hosting. We recommend managed hosting solutions that ensure fast performance and security.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Yes, every website we build is fully responsive and optimized for all devices including smartphones, tablets, and desktops. Mobile-first design is our standard.',
    },
    {
      question: 'Do you offer payment gateway integration?',
      answer: 'Yes, we integrate popular payment gateways like Razorpay, PayPal, Stripe, and more depending on your needs. We ensure PCI compliance and secure transactions.',
    },
    {
      question: 'What if I want to make changes after launch?',
      answer: 'We provide post-launch support and can make revisions based on your feedback. Major features and significant changes may have additional costs, but minor tweaks are covered in our support period.',
    },
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919213462165'
    const message = "Hi! I'm interested in getting a custom website built."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Everything you need to know about our services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: '0 10px 30px rgba(124, 58, 237, 0.1)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left px-3 py-3 sm:px-6 sm:py-6 rounded-xl border-2 transition-all duration-300 ${openIndex === index
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-purple-900' : 'text-gray-900'
                    }`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                    className="flex-shrink-0 ml-4"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-purple-700" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </div>

                {/* Answer */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-700 mt-4 leading-relaxed font-medium text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 text-center p-8 bg-gradient-to-br from-purple-100 via-purple-50 to-pink-100 rounded-2xl border border-purple-200 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <motion.h3
            className="text-xl sm:text-2xl font-bold mb-4 text-purple-900"
            whileHover={{ scale: 1.05 }}
          >
            Still have questions?
          </motion.h3>
          <p className="text-gray-700 mb-6 font-medium text-sm sm:text-base">
            Can&apos;t find the answer you&apos;re looking for? Please reach out to us.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="px-8 py-3 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-full font-bold transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
