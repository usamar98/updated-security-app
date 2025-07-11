'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Tokenomics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const tokenomicsData = [
    {
      type: 'title',
      content: '🪙 TOKENOMICS',
      description: 'The $AION Token Economy'
    },
    {
      type: 'description',
      content: 'The $AION Token is the fuel behind the Aion AI ecosystem.',
      description: 'Powers access, governance, and developer integrations'
    },
    {
      type: 'feature',
      content: 'Decentralized & Secure',
      description: 'Ensuring the system remains user-first and community-driven'
    },
    {
      type: 'metric',
      content: 'Total Supply',
      value: '10,000,000',
      icon: '💰'
    },
    {
      type: 'metric',
      content: 'Tax Structure',
      value: '5/5%',
      description: 'Team & Development',
      icon: '📊'
    },
    {
      type: 'metric',
      content: 'Ticker Symbol',
      value: '$AION',
      icon: '🏷️'
    }
  ]

  // Controlled auto-advance with pause on hover
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % tokenomicsData.length)
    }, 4000) // Slower, less intrusive timing
    
    return () => clearInterval(interval)
  }, [isPaused, tokenomicsData.length])

  const handleCardHover = (isHovering: boolean) => {
    setIsPaused(isHovering)
  }

  const currentItem = tokenomicsData[currentIndex]

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }} ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <span className="text-4xl">🪙</span>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                TOKENOMICS
              </h2>
            </motion.div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the $AION token economy powering our Web3 security ecosystem
            </p>
          </div>

          {/* Main Tokenomics Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-600/50 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden"
            onHoverStart={() => handleCardHover(true)}
            onHoverEnd={() => handleCardHover(false)}
            whileHover={{ 
              y: -8,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)",
              borderColor: "rgba(251, 191, 36, 0.4)"
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Subtle background animation */}
            <div className="absolute inset-0 opacity-5">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-transparent"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Content Display Area */}
            <div className="relative z-10 min-h-[300px] flex flex-col justify-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                {currentItem.type === 'title' && (
                  <div>
                    <motion.h3 
                      className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-6"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity
                      }}
                    >
                      {currentItem.content}
                    </motion.h3>
                    <p className="text-xl text-gray-300 font-medium">
                      {currentItem.description}
                    </p>
                  </div>
                )}

                {currentItem.type === 'description' && (
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
                      {currentItem.content}
                    </h3>
                    <p className="text-xl text-gray-400 leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>
                )}

                {currentItem.type === 'feature' && (
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
                      {currentItem.content}
                    </h3>
                    <p className="text-xl text-gray-400 leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>
                )}

                {currentItem.type === 'metric' && (
                  <div className="max-w-md mx-auto">
                    <motion.div
                      className="bg-gray-800/60 border border-gray-600/40 rounded-2xl p-8 backdrop-blur-sm"
                      whileHover={{
                        borderColor: "rgba(251, 191, 36, 0.6)",
                        backgroundColor: "rgba(251, 191, 36, 0.08)",
                        scale: 1.02
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4">{currentItem.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-3">
                          {currentItem.content}
                        </h3>
                        <motion.div 
                          className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
                          animate={{
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        >
                          {currentItem.value}
                        </motion.div>
                        {currentItem.description && (
                          <p className="text-gray-400 text-sm">
                            {currentItem.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-3">
                {tokenomicsData.map((_, i) => (
                  <motion.button
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex 
                        ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    onClick={() => setCurrentIndex(i)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: i === currentIndex ? [1, 1.2, 1] : 1
                    }}
                    transition={{
                      duration: i === currentIndex ? 2 : 0.2,
                      repeat: i === currentIndex ? Infinity : 0
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50 rounded-b-3xl overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "100%" : "100%" }}
                transition={{
                  duration: isPaused ? 0 : 4,
                  ease: "linear",
                  repeat: isPaused ? 0 : Infinity
                }}
                key={currentIndex}
              />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 right-4">
              <motion.div
                className="w-2 h-2 bg-yellow-400 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
            </div>
            
            <div className="absolute bottom-4 left-4">
              <motion.div
                className="w-2 h-2 bg-yellow-400 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5
                }}
              />
            </div>
          </motion.div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: '🔒', title: 'Secure', desc: 'Built on proven blockchain technology' },
              { icon: '🌐', title: 'Decentralized', desc: 'Community-governed ecosystem' },
              { icon: '⚡', title: 'Efficient', desc: 'Low fees, fast transactions' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/40 border border-gray-700/50 rounded-xl p-6 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(251, 191, 36, 0.3)",
                  backgroundColor: "rgba(251, 191, 36, 0.05)"
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}