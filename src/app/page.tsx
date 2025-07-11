'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Process from '@/components/Process'
import Tokenomics from '@/components/Tokenomics'
import Roadmap from '@/components/Roadmap'
import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Smooth scrolling with GSAP
    let smoother: any
    
    const initSmoothScrolling = () => {
      // Create smooth scrolling effect
      const scrollContainer = document.documentElement
      
      gsap.set(scrollContainer, {
        scrollBehavior: 'auto'
      })

      // Add smooth scroll animation
      let currentY = 0
      let targetY = 0
      let ease = 0.08

      const updateScroll = () => {
        targetY = window.scrollY
        currentY += (targetY - currentY) * ease
        
        if (Math.abs(targetY - currentY) < 0.1) {
          currentY = targetY
        }
        
        requestAnimationFrame(updateScroll)
      }

      updateScroll()

      // Refresh ScrollTrigger on resize
      const handleResize = () => {
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        ScrollTrigger.killAll()
      }
    }

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      smoother = initSmoothScrolling()
    }, 100)

    return () => {
      clearTimeout(timer)
      if (smoother) smoother()
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <Header />
      <Hero />
      <ProblemSolution />
      <Process />
      <Tokenomics />
      <Roadmap />
      <AboutUs />
      <Footer />
    </main>
  )
}
