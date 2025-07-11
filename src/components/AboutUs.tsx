'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: "⚡",
      title: "Real-time AI detection",
      description: "Advanced AI models that detect threats as they emerge"
    },
    {
      icon: "📱",
      title: "Telegram-first bots",
      description: "Security alerts delivered directly to your messaging app"
    },
    {
      icon: "🛡️",
      title: "Scanning that works before the damage is done",
      description: "Proactive protection that prevents attacks, not just reports them"
    }
  ]

  const socialLinks = [
    {
      name: "Twitter",
      icon: "🐦",
      href: "#",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Telegram",
      icon: "📱",
      href: "#",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      name: "GitBook",
      icon: "📚",
      href: "#",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Launch dApp",
      icon: "🚀",
      href: "#",
      color: "from-purple-400 to-purple-600"
    }
  ]

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
              👥
            </motion.span>
            ABOUT US
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're building a safer Web3 — in real time.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Story Section */}
          <motion.div
            className="bg-transparent border border-gray-600/30 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
            }}
          >
            <motion.div
              className="text-4xl mb-6"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              🛡️
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-300 mb-6">Our Mission</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Aion AI was founded by security-focused builders, traders, and engineers who were tired of watching friends lose funds to preventable attacks.
              </p>
              <p>
                We believe Web3 users deserve protection that's fast, intelligent, and always available — without needing to install anything, connect wallets, or know how to audit bytecode.
              </p>
              <motion.div
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-lg p-4 mt-6"
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.4)",
                  backgroundColor: "rgba(59, 130, 246, 0.05)"
                }}
              >
                <p className="text-gray-300 font-medium">
                  Aion AI is backed by community trust, cutting-edge AI models, and a deep belief that security should be simple, not scary.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-300 mb-8">That's why we built Aion AI:</h3>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-transparent border border-gray-600/20 rounded-xl p-6 backdrop-blur-sm hover:border-gray-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{
                  y: -3,
                  borderColor: "rgba(156, 163, 175, 0.6)"
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-2xl"
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
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-300 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p 
            className="text-xl text-gray-300 mb-8 font-medium"
            animate={{
              textShadow: [
                "0 0 10px rgba(59, 130, 246, 0.3)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 10px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            Follow the mission. Join the movement.
          </motion.p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`bg-transparent border border-gray-600/30 rounded-xl px-6 py-3 backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300 flex items-center gap-2 text-gray-400 hover:text-gray-300`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{
                  y: -3,
                  boxShadow: `0 10px 30px rgba(59, 130, 246, 0.1)`,
                  borderColor: "rgba(156, 163, 175, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="text-lg"
                  animate={{
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {link.icon}
                </motion.span>
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 10,
              repeat: Infinity
            }}
          />
        </div>
      </div>
    </section>
  )
}