'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210'
    const message = 'Hi! I\'m interested in getting a custom website built.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight\">
            Ready to Build Your
            <br />
            Premium Website?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-12 px-2\">
            Join 250+ businesses that have transformed their online presence. Let&apos;s create something extraordinary together.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 25px 50px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              type="button"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-700 rounded-full font-bold text-base sm:text-lg transition-all duration-300"
            >
              Chat on WhatsApp
            </motion.button>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/30 pt-12"
          >
            {[
              { number: '250+', label: 'Happy Clients' },
              { number: '500+', label: 'Projects Done' },
              { number: '5x', label: 'Avg. ROI' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="transition-all duration-300"
              >
                <motion.div
                  className="text-4xl font-black text-white mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-purple-100 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
