'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ['Landing Pages', 'Business Websites', 'E-commerce', 'Custom Development', 'Maintenance'],
    Company: [{ name: 'About Us', href: '#process' }, { name: 'Our Work', href: '#portfolio' }, { name: 'Services', href: '#services' }, { name: 'Contact', href: '#contact' }, { name: 'FAQ', href: '#clients' }],
  }

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white scroll-mt-24">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 items-start">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-1 md:max-w-xs"
            >
              <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-4">
                <motion.span
                  className="inline-block whitespace-nowrap bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ color: '#c084fc' }}
                >
                  Nexa Web Solutions
                </motion.span>
              </h1>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building premium websites that drive growth and deliver results.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, y: -4, backgroundColor: '#7c3aed' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links], colIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <h4 className="font-bold text-lg mb-6 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <motion.li
                      key={typeof link === 'string' ? link : link.href}
                      whileHover={{ x: 4 }}
                    >
                      <a
                        href={typeof link === 'string' ? '#' : link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-medium"
                      >
                        {typeof link === 'string' ? link : link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-12 mb-8"
          >
            <h4 className="font-bold text-lg mb-6 text-white">Get in Touch</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6">
              <motion.a
                href="tel:++919213462165"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-gray-800"
                whileHover={{ x: 4 }}
              >
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>+91 921-346-2165</span>
              </motion.a>
              <motion.a
                href="mailto:hello@nexawebsolutions.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-gray-800"
                whileHover={{ x: 4 }}
              >
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>hello@nexawebsolutions.com</span>
              </motion.a>
              <div className="flex items-center gap-3 text-gray-400 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>Gujarat, India</span>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-800" />
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nexa Web Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
