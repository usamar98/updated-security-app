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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative pt-24 pb-16 overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block bg-transparent border border-gray-600 text-gray-400 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgb(75, 85, 99)",
              backgroundColor: "rgba(75, 85, 99, 0.1)"
            }}
          >
            🛡️ Real-Time Web3 Security
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-300 mb-6 leading-tight"
            variants={itemVariants}
          >
            <motion.span 
              className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Aion AI
            </motion.span>
            {' — The Real-Time Security Layer for Web3'}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-4 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Aion AI protects users before they click, connect, or sign.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-500 mb-8 max-w-5xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Our Telegram-first, AI-powered bots detect malicious contracts, phishing links, wallet drainers and scam infrastructure before they cause damage.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-transparent border border-gray-600 text-gray-400 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(75, 85, 99)",
                backgroundColor: "rgba(75, 85, 99, 0.1)",
                color: "rgb(156, 163, 175)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Launch Aion Lab
            </motion.button>
            <motion.button 
              className="bg-transparent border border-gray-600 text-gray-400 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(75, 85, 99)",
                backgroundColor: "rgba(75, 85, 99, 0.1)",
                color: "rgb(156, 163, 175)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              🤖 Try Aion Bot
            </motion.button>
            <motion.button 
              className="bg-transparent border border-gray-600 text-gray-400 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(75, 85, 99)",
                backgroundColor: "rgba(75, 85, 99, 0.1)",
                color: "rgb(156, 163, 175)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              📘 View Docs
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="text-sm text-gray-500 flex items-center justify-center gap-2"
            variants={itemVariants}
          >
            <motion.div 
              className="flex -space-x-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {[1,2,3,4,5].map((i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 bg-transparent border border-gray-600 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                />
              ))}
            </motion.div>
            <span>Trusted by Web3 security professionals</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}