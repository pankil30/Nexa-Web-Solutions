'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [{
    name: 'Home',
    href: '#home',
  }, {
    name: 'Services',
    href: '#services',
  }, {
    name: 'Our Work',
    href: '#portfolio',
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
        <div className="flex justify-between items-center h-16">
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
              className="w-15 h-15 inline-block mr-2"
            />
            <motion.span
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent text-2xl font-extrabold"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Nexa Web Solutions
            </motion.span>
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
              className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-full font-semibold transition-all duration-300"
            >
              Get Your Website
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gradient-to-b from-white to-purple-50"
        >
          <div className="flex flex-col gap-4 pb-4 pt-4">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-purple-100"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="px-4 py-2 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-full w-full font-semibold mx-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Your Website
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
