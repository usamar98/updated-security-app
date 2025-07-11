'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - Clean and Simple */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        
        {/* Simple overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-2xl"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            🛡️ Real-Time Web3 Security
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            variants={itemVariants}
          >
            <span className="text-gray-400">
              Aion AI
            </span>
            <br />
            <span className="text-white/90">
              The Real-Time Security Layer for Web3
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-3xl text-white/80 mb-6 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Aion AI protects users before they click, connect, or sign.
          </motion.p>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/70 mb-12 max-w-5xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Our Telegram-first, AI-powered bots detect malicious contracts, phishing links, wallet drainers and scam infrastructure before they cause damage.
          </motion.p>
          
          {/* CTA Buttons - Transparent with Grey Text */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.button 
              className="group relative bg-transparent border border-gray-500 text-gray-400 px-10 py-5 rounded-2xl text-lg font-semibold backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(107, 114, 128)",
                color: "rgb(156, 163, 175)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                🚀 Launch Aion Lab
              </span>
            </motion.button>
            
            <motion.button 
              className="group relative bg-transparent border border-gray-500 text-gray-400 px-10 py-5 rounded-2xl text-lg font-semibold backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(107, 114, 128)",
                color: "rgb(156, 163, 175)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                🤖 Try Aion Bot
              </span>
            </motion.button>
            
            <motion.button 
              className="group relative bg-transparent border border-gray-500 text-gray-400 px-10 py-5 rounded-2xl text-lg font-semibold backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(107, 114, 128)",
                color: "rgb(156, 163, 175)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                📘 View Docs
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}