'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Roadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCard, setActiveCard] = useState(0)
  const [scrollPositions, setScrollPositions] = useState([0, 0, 0, 0])
  const [isPaused, setIsPaused] = useState([false, false, false, false])

  const roadmapData = [
    {
      quarter: "Q1 2025",
      title: "Foundation & Launch",
      icon: "🚀",
      color: "from-blue-400 to-blue-600",
      borderColor: "border-blue-400/30",
      glowColor: "shadow-blue-500/10",
      items: [
        "Launch of $AION Token with live in-platform utility",
        "Whitepaper v1",
        "Launch of Aion Bot on Telegram",
        "Release of Aion Shield and Aion Watch for real-time scanning",
        "Whitepaper v2 and official Aion AI website v2",
        "Closed beta of the Aion Lab dApp dashboard",
        "Internal build of AionNet API Suite for developer integration"
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Expansion & Ecosystem Growth",
      icon: "🌱",
      color: "from-green-400 to-green-600",
      borderColor: "border-green-400/30",
      glowColor: "shadow-green-500/10",
      items: [
        "Public beta of Aion Trace for fund tracking and forensics",
        "Rollout of wallet alert system via Telegram + Aion Lab",
        "Full beta release of Aion Lab dashboard with risk history, scans, and reports",
        "Developer onboarding and API access for external projects and bots",
        "Launch of early threat intel submission module"
      ]
    },
    {
      quarter: "Q3 2026",
      title: "Multichain & Automation",
      icon: "🔗",
      color: "from-purple-400 to-purple-600",
      borderColor: "border-purple-400/30",
      glowColor: "shadow-purple-500/10",
      items: [
        "Browser extension for real-time link/contract scanning across Web3",
        "Multichain expansion (ETH, BSC, Arbitrum, Polygon)",
        "Scam intelligence database with verified user-submitted threats",
        "Introduction of DAO voting layer for Aion platform governance",
        "Discord and Twitter integration for bots and security alerts"
      ]
    },
    {
      quarter: "Q4 2026",
      title: "Infrastructure & Network",
      icon: "🏗️",
      color: "from-orange-400 to-orange-600",
      borderColor: "border-orange-400/30",
      glowColor: "shadow-orange-500/10",
      items: [
        "Rollout of project trust scoring and AI-based contract badges",
        "Enhanced tracing & forensic toolkit for public and private investigations",
        "Transparency dashboard with scam index, flag rate, and active threats",
        "Strategic partnerships with Web3 wallets, communities, and DeFi protocols",
        "Continuous R&D updates from Aion Lab's AI engine"
      ]
    }
  ]

  // Auto-scroll for each card
  useEffect(() => {
    const intervals = roadmapData.map((_, index) => {
      if (isPaused[index]) return null
      
      return setInterval(() => {
        setScrollPositions(prev => {
          const newPositions = [...prev]
          newPositions[index] = (newPositions[index] + 1) % (roadmapData[index].items.length * 60)
          return newPositions
        })
      }, 80)
    })

    return () => {
      intervals.forEach(interval => interval && clearInterval(interval))
    }
  }, [isPaused, roadmapData])

  const handleCardHover = (index: number, isHovering: boolean) => {
    setIsPaused(prev => {
      const newPaused = [...prev]
      newPaused[index] = isHovering
      return newPaused
    })
  }

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }} ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-300 mb-4 flex items-center justify-center gap-3"
            animate={{
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 30px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <motion.span
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              🗺️
            </motion.span>
            ROADMAP
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-2">
            Our Journey to Web3 Security Excellence
          </p>
          <p className="text-gray-500">
            Strategic milestones and feature rollouts for the AION AI ecosystem
          </p>
        </motion.div>

        {/* Roadmap Cards Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roadmapData.map((quarter, index) => (
            <motion.div
              key={index}
              className={`bg-transparent border ${quarter.borderColor} rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden h-96 hover:bg-gray-900/10 transition-all duration-300`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => handleCardHover(index, true)}
              onHoverEnd={() => handleCardHover(index, false)}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px ${quarter.glowColor}`,
                borderColor: quarter.borderColor.replace('/30', '/60')
              }}
              onClick={() => setActiveCard(index)}
            >
              {/* Card Header */}
              <div className="relative z-10 mb-4">
                <motion.div
                  className="text-3xl mb-2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {quarter.icon}
                </motion.div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${quarter.color} bg-clip-text text-transparent mb-1`}>
                  {quarter.quarter}
                </h3>
                <p className="text-gray-300 text-sm font-medium">
                  {quarter.title}
                </p>
              </div>

              {/* Scrolling Content */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0 space-y-3"
                  animate={{
                    y: `-${scrollPositions[index]}px`
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "linear"
                  }}
                >
                  {/* Repeat items for seamless loop */}
                  {Array.from({ length: 3 }).map((_, repeatIndex) => (
                    <div key={repeatIndex} className="space-y-3">
                      {quarter.items.map((item, itemIndex) => (
                        <motion.div
                          key={`${repeatIndex}-${itemIndex}`}
                          className="bg-transparent border border-gray-600/20 rounded-lg p-3 backdrop-blur-sm hover:border-gray-500/40 transition-all duration-300"
                          whileInView={{
                            borderColor: quarter.borderColor.replace('/30', '/40'),
                            backgroundColor: "rgba(75, 85, 99, 0.05)"
                          }}
                          viewport={{ once: false, margin: "-20px" }}
                        >
                          <div className="flex items-start gap-2">
                            <motion.div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${quarter.color} mt-2 flex-shrink-0`}
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: itemIndex * 0.2
                              }}
                            />
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {item}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>

                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900/60 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none z-10" />
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{quarter.items.length} milestones</span>
                  <motion.div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${quarter.color}`}
                    animate={{
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity
                    }}
                  />
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-3">
                <motion.div
                  className={`w-full h-full bg-gradient-to-br ${quarter.color}`}
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

              {/* Active Card Indicator */}
              {activeCard === index && (
                <motion.div
                  className={`absolute inset-0 border-2 ${quarter.borderColor.replace('/30', '/60')} rounded-2xl pointer-events-none`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            Roadmap is subject to updates based on community feedback and market conditions
          </p>
        </motion.div>
      </div>
    </section>
  )
}