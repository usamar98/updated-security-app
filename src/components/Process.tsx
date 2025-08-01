'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number | undefined>(undefined)
  const [scanningIndex, setScanningIndex] = useState(0)
  const [shieldPulse, setShieldPulse] = useState(0)
  const [watchRotation, setWatchRotation] = useState(0)
  const [traceProgress, setTraceProgress] = useState(0)
  const [botTyping, setBotTyping] = useState(false)
  const [watchScanProgress, setWatchScanProgress] = useState(0)
  const [traceNodes, setTraceNodes] = useState(0)

  // Enhanced Aion Bot scanning animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBotTyping(true)
      setTimeout(() => {
        setScanningIndex(prev => (prev + 1) % 4)
        setBotTyping(false)
      }, 800)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Aion Shield pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShieldPulse(prev => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Enhanced Aion Watch animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWatchRotation(prev => prev + 90)
      setWatchScanProgress(prev => (prev + 25) % 100)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Enhanced Aion Trace animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTraceProgress(prev => (prev + 25) % 125)
      setTraceNodes(prev => (prev + 1) % 8)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: "🧠",
      title: "Aion Bot",
      description: "Your Telegram-native assistant for scanning links, contracts, and wallets in real time.",
      details: "Run /scan, /wallet, or /contract from any chat. Lightweight, fast, and always watching.",
      animationType: "scanning"
    },
    {
      icon: "🛡️",
      title: "Phishing Link Scanner",
      description: "Scans URLs in real-time using CharBERT model, A character-level AI model trained to catch phishing, drainer sites and impersonations even when obfuscated by typos or Unicode tricks.",
      details: "Whether it's a sniper bot, presale, or dApp URL — Shield has your back.",
      animationType: "shield"
    },
    {
      icon: "👁️",
      title: "Phishing wallets detection",
      description: "Know your wallet's risk in seconds with no connection needed. Aion AI reveals scam token exposure, risky approvals, and past interactions with malicious contracts to help you avoid wallet-draining traps.",
      details: "Stay safe without ever connecting your wallet.",
      animationType: "watch"
    },
    {
      icon: "🧭",
      title: "Trace Stolen funds",
      description: "Trace stolen funds and map post-hack movements. Using AI-powered transaction graph analysis, Aion Trace follows stolen assets across bridges, DEXs and wallets exposing laundering patterns in real time.",
      details: "A full post-hack visualization engine for audits, reports, and recovery.",
      animationType: "trace"
    },
    {
      icon: "🧪",
      title: "Aion Lab",
      description: "A secure, all-in-one dApp where you can run deep scans, monitor wallets and manage bot access.",
      details: "Built for power users, analysts and DAO teams who need full control.",
      animationType: "lab"
    }
  ]

  const renderFeatureAnimation = (feature: any, index: number) => {
    switch (feature.animationType) {
      case 'scanning':
        return (
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-600/50 rounded-xl p-6 h-40 backdrop-blur-md relative overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-blue-400/20"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      borderColor: ["rgba(59, 130, 246, 0.1)", "rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.1)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-xs text-gray-400 font-mono">Telegram Bot Active</div>
              </div>
              
              <div className="space-y-2">
                {['/scan 0x1234...', '/wallet analysis', '/contract check', '/analyze risk'].map((command, i) => (
                  <motion.div
                    key={i}
                    className={`text-sm font-mono transition-all duration-500 p-2 rounded-lg border ${
                      i === scanningIndex 
                        ? 'text-blue-300 bg-blue-500/20 border-blue-400/50 shadow-lg shadow-blue-500/20' 
                        : 'text-gray-500 border-transparent'
                    }`}
                    animate={{
                      scale: i === scanningIndex ? [1, 1.02, 1] : 1,
                      boxShadow: i === scanningIndex 
                        ? ["0 0 0 rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0 rgba(59, 130, 246, 0)"]
                        : "0 0 0 rgba(59, 130, 246, 0)"
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{command}</span>
                      {i === scanningIndex && (
                        <motion.div
                          className="flex items-center gap-1"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {botTyping ? (
                            <div className="flex gap-1">
                              {[0, 1, 2].map((dot) => (
                                <motion.div
                                  key={dot}
                                  className="w-1 h-1 bg-blue-400 rounded-full"
                                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.2 }}
                                />
                              ))}
                            </div>
                          ) : (
                            <motion.span
                              className="text-green-400 text-lg"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              ✓
                            </motion.span>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 'shield':
        return (
          <div className="bg-transparent border border-gray-700 rounded-lg p-4 h-32 relative overflow-hidden">
            <div className="text-xs text-gray-500 mb-2">Threat Detection</div>
            <div className="grid grid-cols-2 gap-2">
              {['Phishing', 'Honeypot', 'Drainer', 'Proxy'].map((threat, i) => (
                <motion.div
                  key={i}
                  className={`text-xs p-2 rounded border transition-all duration-500 ${
                    shieldPulse === i % 3 ? 'border-red-400 bg-red-400/10 text-red-400' : 'border-gray-700 text-gray-500'
                  }`}
                >
                  {threat}
                  {shieldPulse === i % 3 && (
                    <motion.div
                      className="absolute inset-0 border-2 border-red-400 rounded-lg"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )
      
      case 'watch':
        return (
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-600/50 rounded-xl p-6 h-40 backdrop-blur-md relative overflow-hidden">
            {/* Scanning radar effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-32 h-32 border border-blue-400/20 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-24 h-24 border border-blue-400/30 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <div className="text-xs text-gray-400">Wallet Analysis Engine</div>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="w-20 h-20 border-2 border-blue-400/50 rounded-full flex items-center justify-center relative bg-blue-500/10"
                  animate={{ rotate: watchRotation }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  {/* Scanning beam */}
                  <motion.div
                    className="absolute w-1 h-8 bg-gradient-to-t from-blue-400 to-transparent origin-bottom"
                    style={{ top: '10px' }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Center eye */}
                  <motion.div
                    className="text-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    👁️
                  </motion.div>
                  
                  {/* Scanning dots */}
                  {[0, 1, 2, 3].map((dot) => (
                    <motion.div
                      key={dot}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${dot * 90}deg) translateY(-25px)`
                      }}
                      animate={{
                        opacity: watchScanProgress > dot * 25 ? [0, 1, 0] : 0,
                        scale: watchScanProgress > dot * 25 ? [0.5, 1.5, 0.5] : 0.5
                      }}
                      transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                    />
                  ))}
                </motion.div>
              </div>
              
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">Trust Score</div>
                <motion.div
                  className="text-lg font-bold text-blue-400"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {Math.floor(watchScanProgress)}%
                </motion.div>
              </div>
            </div>
          </div>
        )
      
      case 'trace':
        return (
          <div className="bg-transparent border border-gray-700 rounded-lg p-4 h-32 relative overflow-hidden">
            <div className="text-xs text-gray-500 mb-2">Transaction Flow</div>
            <div className="flex items-center justify-between h-16">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs ${
                    traceProgress > i * 25 ? 'border-orange-400 bg-orange-400/20 text-orange-400' : 'border-gray-600 text-gray-600'
                  }`}
                  animate={{
                    scale: traceProgress > i * 25 ? [1, 1.2, 1] : 1,
                    borderColor: traceProgress > i * 25 ? ["rgb(251, 146, 60)", "rgb(251, 191, 36)", "rgb(251, 146, 60)"] : "rgb(75, 85, 99)"
                  }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {i + 1}
                </motion.div>
              ))}
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Nodes traced: {traceNodes}/8
            </div>
          </div>
        )
      
      case 'lab':
        return (
          <div className="bg-transparent border border-gray-700 rounded-lg p-4 h-32">
            <div className="text-xs text-gray-500 mb-2">Control Panel</div>
            <div className="grid grid-cols-2 gap-2">
              {['Deep Scan', 'Monitor', 'Bot Access', 'Reports'].map((labFeature, i) => (
                <motion.div
                  key={i}
                  className="text-xs p-2 rounded border border-gray-700 text-gray-400 text-center"
                  whileHover={{ 
                    borderColor: "rgb(147, 51, 234)",
                    backgroundColor: "rgba(147, 51, 234, 0.1)",
                    color: "rgb(196, 181, 253)"
                  }}
                  animate={{
                    borderColor: ["rgb(75, 85, 99)", "rgb(147, 51, 234)", "rgb(75, 85, 99)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  {labFeature}
                </motion.div>
              ))}
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background with animation-4 image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/animation-4.png)'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          >
            <motion.span
              className="inline-block mr-4 text-4xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              ⚙️
            </motion.span>
            HOW IT WORKS
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Five AI-powered tools working together to keep you safe in Web3.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Special layout for the first feature (Aion Bot)
            if (index === 0) {
              return (
                <motion.div
                  key={index}
                  className="bg-transparent border border-gray-600/30 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300 lg:col-span-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                  }}
                >
                  {/* Content Above */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="text-4xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-300 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                  
                  {/* Animation Below */}
                  <div className="mt-6">
                    {renderFeatureAnimation(feature, index)}
                  </div>
                </motion.div>
              )
            }
            
            // Regular layout for other features
            return (
              <motion.div
                key={index}
                className="bg-transparent border border-gray-600/30 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="text-3xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-300 mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {feature.details}
                </p>
                
                <div className="mt-6">
                  {renderFeatureAnimation(feature, index)}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}