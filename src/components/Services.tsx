'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Workflow Automation",
      subtitle: "Automate repetitive tasks",
      description: "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.",
      features: ["Internal Task Bots", "100+ Automations"],
      icon: "🔄",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Assistant",
      subtitle: "Delegate Daily Tasks",
      description: "From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.",
      features: ["Summaries", "Scheduling", "Many more"],
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Sales & Marketing",
      subtitle: "Accelerate Sales Growth",
      description: "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
      features: ["Leads", "Content", "Social post"],
      icon: "📈",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Projects",
      subtitle: "Build Smarter Systems",
      description: "Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.",
      features: ["Strategy", "Custom AI", "Consulting"],
      icon: "⚡",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            AI Solutions That Take Your Business to the Next Level
          </motion.p>
          <motion.p 
            className="text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We design, develop, and implement automation tools that help you work smarter, not harder
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
            >
              {/* Gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 rounded-2xl`}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{service.title}</h3>
              <h4 className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-semibold mb-4 relative z-10`}>
                {service.subtitle}
              </h4>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed relative z-10">{service.description}</p>
              
              <div className="space-y-2 relative z-10">
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-700 inline-block mr-2 border"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgb(243, 244, 246)"
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Services cards animation
const ServiceCard = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}