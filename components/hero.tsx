'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {


  const words = [
    'Landing Pages',
    'Business Websites',
    'Online Stores',
    'Portfolio Sites',
    'Premium Websites',
  ]

  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1))

          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1200)
          }
        } else {
          setText(currentWord.substring(0, text.length - 1))

          if (text === '') {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 60 : 120
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, text.length, wordIndex, words])

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center bg-gradient-to-br from-white via-purple-50 to-pink-50 scroll-mt-24">
      <div className="max-w-5xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
            <span className="text-sm font-semibold text-purple-700">
              Trusted by 250+ businesses across India
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <div className="mb-4">
              <span className="text-black">We </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block bg-gradient-to-r from-purple-400 via-purple-600 to-pink-500 bg-clip-text text-transparent"
              >
                Build
              </motion.span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r from-purple-200 to-pink-100 px-4 py-2 rounded-lg inline-block min-h-[70px] sm:min-h-[90px]"
            >
              <span className="text-black">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>
            <div className="mt-4">
              <span className="text-black">That Bring </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="inline-block bg-gradient-to-r from-purple-400 via-purple-600 to-pink-500 bg-clip-text text-transparent"
              >
                Customers
              </motion.span>
            </div>
          </h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 px-2"
        >
          From payment pages and launch campaigns to full business websites and online stores, every page is built to look premium, load fast, and turn traffic into WhatsApp inquiries.
        </motion.p>

        {/* Service Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['Payment Pages', 'Landing Pages', 'Business Websites', 'Online Stores', 'Portfolio Sites'].map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05, borderColor: '#7c3aed' }}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:text-purple-700 transition-all duration-300 cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
          >
            Chat on WhatsApp →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a', color: '#ffffff' }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
          >
            See Our Work ↓
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown size={32} className="text-purple-700" />
        </motion.div>
      </div>
    </section>
  )
}
