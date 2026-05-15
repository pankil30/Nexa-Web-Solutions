'use client'

import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919213462165'
    const message = 'Hi! I&apos;m interested in getting a custom website built.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.35 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-xl shadow-black/10 transition-transform"
      aria-label="Chat with Nexa Web Solutions on WhatsApp"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      <img src="/n.png" alt="Nexa Web Solutions logo" className="h-10 w-10 rounded-full object-contain" />
      <div className="hidden sm:block text-left leading-tight">
        <span className="block text-sm font-bold text-gray-900">Nexa Web Solutions</span>
        <span className="block text-xs font-medium text-green-600">Chat on WhatsApp</span>
      </div>
    </motion.button>
  )
}
