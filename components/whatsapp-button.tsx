'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210'
    const message = 'Hi! I&apos;m interested in getting a custom website built.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-full h-full flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </motion.div>
    </motion.button>
  )
}
