'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${headerOpacity})`,
        backdropFilter: `blur(${headerBlur}px)`,
        WebkitBackdropFilter: `blur(${headerBlur}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl font-bold text-white tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                AION AI
              </span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation with Single Border */}
          <motion.nav 
            className="hidden lg:flex items-center border border-white/20 rounded-lg backdrop-blur-sm px-2 py-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}
          >
            {[
              { name: 'Home', href: '#hero' },
              { name: 'Features', href: '#features' },
              { name: 'Tokenomics', href: '#tokenomics' },
              { name: 'Roadmap', href: '#roadmap' },
              { name: 'About Us', href: '#about' }
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group rounded-md hover:bg-white/5"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-1 left-1 right-1 h-0.5 bg-gradient-to-r from-white/0 via-white to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                />
              </motion.a>
            ))}
          </motion.nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.button 
              className="relative px-6 py-2.5 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg overflow-hidden group transition-all duration-300 hover:border-white/40"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="relative z-10">Open Dapp</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button 
              className="relative px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(255, 255, 255, 0.15)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="relative z-10 font-semibold">WhitePaper</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-gray-300"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0
              }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-gray-300"
              animate={{
                opacity: isMenuOpen ? 0 : 1
              }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-gray-300"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="py-6 space-y-4 border-t border-white/10">
            {/* Mobile Navigation with Single Border */}
            <div className="border border-white/20 rounded-lg p-2 space-y-2">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'Features', href: '#features' },
                { name: 'Tokenomics', href: '#tokenomics' },
                { name: 'Roadmap', href: '#roadmap' },
                { name: 'About Us', href: '#about' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            <div className="flex flex-col space-y-3 pt-4">
              <motion.button 
                className="w-full px-6 py-3 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                whileTap={{ scale: 0.98 }}
              >
                Open Dapp
              </motion.button>
              <motion.button 
                className="w-full px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                whileTap={{ scale: 0.98 }}
              >
                WhitePaper
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}