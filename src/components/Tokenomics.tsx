'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Tokenomics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [scrollPosition, setScrollPosition] = useState(0)
  
  const tokenomicsData = [
    "🪙 TOKENOMICS",
    "The $AION Token is the fuel behind the Aion AI ecosystem.",
    "It powers access, governance, and developer integrations ensuring the system remains decentralized, secure and user-first.",
    "Total Supply: 10,000,000",
    "Tax: 5/5% (Team & Development)",
    "Ticker: $AION"
  ]

  // Auto-scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % (tokenomicsData.length * 100))
    }, 100) // Adjust speed here
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }} ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Tokenomics Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-600/50 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden"
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
              borderColor: "rgba(156, 163, 175, 0.7)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-yellow-400/20"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      borderColor: ["rgba(251, 191, 36, 0.1)", "rgba(251, 191, 36, 0.3)", "rgba(251, 191, 36, 0.1)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.05
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating coin animation */}
            <div className="absolute top-4 right-4">
              <motion.div
                className="text-4xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🪙
              </motion.div>
            </div>

            {/* Scrolling text container */}
            <div className="relative h-96 overflow-hidden">
              <motion.div
                className="absolute inset-0 flex flex-col justify-start space-y-6"
                animate={{
                  y: `-${scrollPosition}px`
                }}
                transition={{
                  duration: 0.1,
                  ease: "linear"
                }}
              >
                {/* Repeat content multiple times for seamless loop */}
                {Array.from({ length: 10 }).map((_, repeatIndex) => (
                  <div key={repeatIndex} className="space-y-6">
                    {tokenomicsData.map((item, index) => {
                      const isTitle = index === 0
                      const isMainDescription = index === 1 || index === 2
                      const isMetric = index > 2
                      
                      return (
                        <motion.div
                          key={`${repeatIndex}-${index}`}
                          className={`transition-all duration-500 ${
                            isTitle 
                              ? 'text-center'
                              : isMainDescription 
                              ? 'text-left'
                              : 'text-left pl-4'
                          }`}
                          whileInView={{
                            opacity: [0.5, 1, 0.5],
                            scale: [0.98, 1.02, 0.98]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                          viewport={{ once: false, margin: "-50px" }}
                        >
                          {isTitle && (
                            <motion.h2 
                              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-8"
                              animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity
                              }}
                            >
                              {item}
                            </motion.h2>
                          )}
                          
                          {isMainDescription && (
                            <p className={`text-lg md:text-xl leading-relaxed ${
                              index === 1 
                                ? 'text-gray-300 font-medium' 
                                : 'text-gray-400'
                            }`}>
                              {item}
                            </p>
                          )}
                          
                          {isMetric && (
                            <motion.div 
                              className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-4 backdrop-blur-sm"
                              whileHover={{
                                borderColor: "rgba(251, 191, 36, 0.5)",
                                backgroundColor: "rgba(251, 191, 36, 0.05)"
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <motion.div
                                  className="w-2 h-2 bg-yellow-400 rounded-full"
                                  animate={{
                                    opacity: [1, 0.3, 1],
                                    scale: [1, 1.2, 1]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.3
                                  }}
                                />
                                <span className="text-gray-300 font-mono text-lg">
                                  {item}
                                </span>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                ))}
              </motion.div>
              
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900/80 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none z-10" />
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gray-600"
                    animate={{
                      backgroundColor: Math.floor(scrollPosition / 100) % 6 === i 
                        ? "rgb(251, 191, 36)" 
                        : "rgb(75, 85, 99)",
                      scale: Math.floor(scrollPosition / 100) % 6 === i ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <motion.div
                className="w-1 h-32 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleY: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <motion.div
                className="w-1 h-32 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleY: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}