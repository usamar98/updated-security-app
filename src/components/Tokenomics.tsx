'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const tokenomicsData = [
  {
    type: 'title',
    content: 'AION',
    description: 'Advanced Intelligence Operations Network'
  },
  {
    type: 'description',
    content: 'Token Distribution',
    description: 'Strategic allocation for sustainable growth and community governance'
  },
  {
    type: 'metric',
    icon: '💰',
    content: 'Total Supply',
    value: '1B AION',
    description: 'Fixed supply with deflationary mechanics'
  },
  {
    type: 'metric',
    icon: '🏛️',
    content: 'Public Sale',
    value: '40%',
    description: 'Community distribution and liquidity'
  },
  {
    type: 'metric',
    icon: '👥',
    content: 'Team & Advisors',
    value: '20%',
    description: 'Vested over 4 years with 1-year cliff'
  },
  {
    type: 'metric',
    icon: '🎯',
    content: 'Development',
    value: '25%',
    description: 'Platform development and ecosystem growth'
  },
  {
    type: 'metric',
    icon: '🔄',
    content: 'Liquidity & Staking',
    value: '15%',
    description: 'DEX liquidity and staking rewards'
  },
  {
    type: 'feature',
    content: 'Utility Features',
    description: 'Governance voting, staking rewards, premium features access, and transaction fee discounts'
  }
]

export default function Tokenomics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tokenomicsData.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  const currentItem = tokenomicsData[currentIndex]

  return (
    <section 
      id="tokenomics" 
      className="py-20 relative overflow-hidden min-h-screen" 
      style={{ backgroundColor: '#000000' }} 
      ref={ref}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          // backgroundImage: 'url(/screenshot.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Background Images */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{
          backgroundImage: 'url(/animation-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{
          backgroundImage: 'url(/animation-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6">
              Tokenomics
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Discover the economic model powering the AION ecosystem, designed for sustainable growth and community governance.
            </p>
          </motion.div>

          {/* Main Interactive Display */}
          <motion.div
            className="relative bg-black/20 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 md:p-12 mb-12 min-h-[500px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 rounded-full"
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
                      className="text-5xl md:text-7xl font-bold text-gray-400 mb-6"
                    >
                      {currentItem.content}
                    </motion.h3>
                    <p className="text-xl text-gray-500 font-medium">
                      {currentItem.description}
                    </p>
                  </div>
                )}

                {currentItem.type === 'description' && (
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-400 mb-6">
                      {currentItem.content}
                    </h3>
                    <p className="text-xl text-gray-500 leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>
                )}

                {currentItem.type === 'feature' && (
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-400 mb-6">
                      {currentItem.content}
                    </h3>
                    <p className="text-xl text-gray-500 leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>
                )}

                {currentItem.type === 'metric' && (
                  <div className="max-w-md mx-auto">
                    <motion.div
                      className="bg-black/20 border border-gray-600/30 rounded-2xl p-8 backdrop-blur-sm"
                      whileHover={{
                        borderColor: "rgba(156, 163, 175, 0.6)",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        scale: 1.02
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4">{currentItem.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-400 mb-3">
                          {currentItem.content}
                        </h3>
                        <motion.div 
                          className="text-3xl md:text-4xl font-bold text-gray-300 mb-2"
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
                          <p className="text-gray-500 text-sm">
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
                        ? 'bg-gray-400 shadow-lg shadow-gray-400/50' 
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
                className="h-full bg-gradient-to-r from-gray-400 to-gray-500"
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
                className="w-2 h-2 bg-gray-400 rounded-full"
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
                className="w-2 h-2 bg-gray-400 rounded-full"
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
                className="bg-black/20 border border-gray-700/30 rounded-xl p-6 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(156, 163, 175, 0.5)",
                  backgroundColor: "rgba(0, 0, 0, 0.3)"
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-400 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}