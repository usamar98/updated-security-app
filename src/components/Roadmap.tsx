'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scene } from './rubikcube'

export default function Roadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const roadmapData = [
    {
      quarter: "Phase 1",
      title: "Launch & Core Infrastructure",
      icon: "🚀",
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400/30",
      description: "Establishing Aion as the go-to security layer for Telegram, dApps, and developers.",
      items: [
        "Launch of $AION Token (utility-based, no staking)",
        "Aion Bot (Telegram-native link, wallet scanner)",
        "Phishing Link Detection (CharBERT AI)",
        "Wallet Risk Dashboard (STFN-based engine)",
        "Developer API (wallets + URLs)",
        "GitBook documentation and open developer portal",
        "Internal alpha of Aion Trace (fund tracking engine)"
      ]
    },
    {
      quarter: "Phase 2",
      title: "Expansion, Customization & Intelligence",
      icon: "🧠",
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400/30",
      description: "Extending detection capabilities, opening up customization, and layering AI intelligence.",
      items: [
        "Full release of Aion Trace (visual graph tracing of hacked funds)",
        "CharBERT v2 with multilingual phishing detection",
        "Smart Contract Scanner (honeypot, drainers, proxy detection)",
        "Project onboarding: token-gated bot access via $AION",
        "Web dashboard for user scan history + group security logs",
        "Partner integrations with launchpads, bots, and community tools",
        "SDKs for React, Node.js, and Python"
      ]
    },
    {
      quarter: "Phase 3",
      title: "Ecosystem & Decentralized Security Network",
      icon: "🌐",
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400/30",
      description: "Aion evolves from a product to an ecosystem — with user-governed threat intelligence.",
      items: [
        "Aion Trace Pro for DAOs, security firms, and forensic teams",
        "Open up Aion Lab internal research for contributors",
        "Bug bounty and white-hat incentive program",
        "Strategic alliances with leading Web3 platforms & RPC providers",
        "Embed detection in wallets, block explorers, and dApps"
      ]
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Rubik's Cube Animation Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-30">
          <Scene />
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-4 flex items-center justify-center gap-3">
            <span>🗺️</span>
            ROADMAP
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-2">
            Our Journey to Web3 Security Excellence
          </p>
          <p className="text-gray-500">
            Strategic milestones and feature rollouts for the AION AI ecosystem
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Line - Made More Prominent */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-400 h-full shadow-lg">
            {/* Animated Progress Line */}
            <motion.div
              className="w-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 shadow-lg"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {roadmapData.map((phase, index) => {
              const isRight = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  className={`flex items-center ${isRight ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? 50 : -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Card */}
                  <div className={`w-full max-w-md ${isRight ? 'mr-8' : 'ml-8'}`}>
                    <div className={`bg-black/60 border ${phase.borderColor} rounded-2xl p-6 backdrop-blur-sm relative`}>
                      {/* Card Header */}
                      <div className="mb-4">
                        <div className="text-3xl mb-2">
                          {phase.icon}
                        </div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent mb-1`}>
                          {phase.quarter}
                        </h3>
                        <p className="text-gray-300 text-sm font-medium mb-2">
                          {phase.title}
                        </p>
                        {phase.description && (
                          <p className="text-gray-400 text-xs leading-relaxed mb-3">
                            {phase.description}
                          </p>
                        )}
                      </div>

                      {/* Content with points but without boxes */}
                      <div className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mt-2 flex-shrink-0`} />
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Milestone Count */}
                      <div className="mt-4 text-xs text-gray-500">
                        {phase.items.length} milestones
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot - Made More Prominent */}
                  <motion.div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${phase.color} border-4 border-black shadow-lg z-10`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  />
                </motion.div>
              )
            })}
          </div>
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