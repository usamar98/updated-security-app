'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function ProblemSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [problemScrollIndex, setProblemScrollIndex] = useState(0)
  const [solutionScrollIndex, setSolutionScrollIndex] = useState(0)

  const problemPoints = [
    "Web3 moves fast — but so do the threats.",
    "Every day, thousands of wallets are drained because users unknowingly approve malicious contracts, click fake dApp links or interact with sniper bots and cloned tokens.",
    "It takes one click. One blind signature. One overlooked risk.",
    "Most security tools react after the hack happens or require you to install browser extensions or connect wallets.",
    "That's too late. That's not enough."
  ]

  const solutionPoints = [
    "Aion AI stops threats before they start.",
    "We've built an AI-powered Web3 security platform that works where users live: Telegram, wallets, and dApps.",
    "Aion AI provides instant detection of malicious contracts, phishing links and compromised wallets before you engage.",
    "You get actionable intel in real-time, right inside Telegram chats or on your security dashboard.",
    "It's Web3 protection that works at the speed of Web3."
  ]

  // Auto-scroll animation for problem points
  useEffect(() => {
    const interval = setInterval(() => {
      setProblemScrollIndex(prev => (prev + 1) % problemPoints.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll animation for solution points
  useEffect(() => {
    const interval = setInterval(() => {
      setSolutionScrollIndex(prev => (prev + 1) % solutionPoints.length)
    }, 3500) // Slightly different timing to avoid sync
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#000000' }} ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Container Card */}
        <motion.div 
          className="bg-transparent border border-gray-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            borderColor: "rgb(75, 85, 99)",
            backgroundColor: "rgba(75, 85, 99, 0.02)"
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Problem Card */}
            <motion.div 
              className="bg-transparent border border-gray-700 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-96 overflow-hidden relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                borderColor: "rgb(239, 68, 68)",
                backgroundColor: "rgba(239, 68, 68, 0.02)"
              }}
            >
              {/* Problem Header */}
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.span 
                  className="text-2xl"
                  animate={{ 
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  ❌
                </motion.span>
                <h3 className="text-xl md:text-2xl font-bold text-red-400">
                  PROBLEM
                </h3>
              </motion.div>

              {/* Scrolling Content */}
              <div className="relative h-64 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 space-y-4"
                  animate={{ 
                    y: `-${problemScrollIndex * 80}px`
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeInOut"
                  }}
                >
                  {problemPoints.map((point, index) => (
                    <motion.p 
                      key={index}
                      className={`text-gray-400 leading-relaxed transition-opacity duration-500 ${
                        index === problemScrollIndex ? 'opacity-100' : 'opacity-40'
                      }`}
                      style={{ minHeight: '60px' }}
                    >
                      {point}
                    </motion.p>
                  ))}
                </motion.div>
                
                {/* Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex space-x-1">
                  {problemPoints.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === problemScrollIndex ? 'bg-red-400 flex-1' : 'bg-gray-700 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Solution Card */}
            <motion.div 
              className="bg-transparent border border-gray-700 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-96 overflow-hidden relative"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                borderColor: "rgb(34, 197, 94)",
                backgroundColor: "rgba(34, 197, 94, 0.02)"
              }}
            >
              {/* Solution Header */}
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.span 
                  className="text-2xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: 1
                  }}
                >
                  ✅
                </motion.span>
                <h3 className="text-xl md:text-2xl font-bold text-green-400">
                  SOLUTION
                </h3>
              </motion.div>

              {/* Scrolling Content */}
              <div className="relative h-64 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 space-y-4"
                  animate={{ 
                    y: `-${solutionScrollIndex * 80}px`
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeInOut"
                  }}
                >
                  {solutionPoints.map((point, index) => (
                    <motion.p 
                      key={index}
                      className={`text-gray-400 leading-relaxed transition-opacity duration-500 ${
                        index === solutionScrollIndex ? 'opacity-100' : 'opacity-40'
                      }`}
                      style={{ minHeight: '60px' }}
                    >
                      {point}
                    </motion.p>
                  ))}
                </motion.div>
                
                {/* Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex space-x-1">
                  {solutionPoints.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === solutionScrollIndex ? 'bg-green-400 flex-1' : 'bg-gray-700 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}