'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
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
