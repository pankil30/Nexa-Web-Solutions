'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210'
    const message = 'Hi! I\'m interested in getting a custom website built.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  const menuItems = [{
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Our Work',
    href: '#portfolio',
  }, {
    name: 'Services',
    href: '#services',
  }, {
    name: 'Process',
    href: '#process',
  }, {
    name: 'Contact',
    href: '#contact',
  }]



  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold"
          >
            <img
              src="/n.png"
              alt="Nexa Web Solutions Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 inline-block mr-2"
            />
            <motion.span
              className="hidden sm:inline bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent text-2xl font-extrabold"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Nexa Web Solutions
            </motion.span>
            <motion.span className="sm:hidden text-purple-700 font-extrabold text-lg">Nexa</motion.span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ color: '#7c3aed', y: -2 }}
                className="text-gray-700 transition-all duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(124, 58, 237, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="hidden md:inline-flex px-4 sm:px-6 py-2 text-sm sm:text-base bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-full font-semibold transition-all duration-300"
            >
              Get Your Website
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 ml-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu (absolute overlay for reliable mobile behavior) */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-gradient-to-b from-white to-purple-50 shadow-md z-40">
            <div className="flex flex-col gap-2 pb-4 pt-4 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-purple-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-full w-full font-semibold"
                onClick={handleWhatsAppClick}
                type="button"
              >
                Get Your Website
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}
