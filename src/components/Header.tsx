'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-700"
      style={{ backgroundColor: 'rgba(15, 15, 15, 0.8)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="text-2xl font-bold text-gray-300"
            whileHover={{ scale: 1.05 }}
          >
            AION AI
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            <motion.a 
              href="#hero" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
              whileHover={{ y: -2 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#process" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
              whileHover={{ y: -2 }}
            >
              Process
            </motion.a>
          </nav>
          
          <motion.button 
            className="bg-transparent border border-gray-600 text-gray-400 px-6 py-2 rounded-lg font-semibold backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgb(75, 85, 99)",
              backgroundColor: "rgba(75, 85, 99, 0.1)",
              color: "rgb(156, 163, 175)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}