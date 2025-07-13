'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 1)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.8
    mountRef.current.appendChild(renderer.domElement)
    
    sceneRef.current = scene
    rendererRef.current = renderer

    // Create dark cloud-like material
    const createCloudMaterial = (baseGrey: number, opacity: number = 0.8) => {
      return new THREE.MeshPhysicalMaterial({
        color: baseGrey,
        metalness: 0.1,
        roughness: 0.3,
        reflectivity: 0.2,
        clearcoat: 0.3,
        clearcoatRoughness: 0.1,
        transparent: true,
        opacity: opacity,
        envMapIntensity: 0.5,
        iridescence: 0.3,
        iridescenceIOR: 1.3,
        iridescenceThicknessRange: [50, 200],
        transmission: 0.05,
        thickness: 0.2
      })
    }

    // Create environment map for subtle reflections
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')!
    
    // Create dark gradient environment
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256)
    gradient.addColorStop(0, '#2a2a2a')
    gradient.addColorStop(0.5, '#1a1a1a')
    gradient.addColorStop(1, '#000000')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 512, 512)
    
    const envTexture = new THREE.CanvasTexture(canvas)
    envTexture.mapping = THREE.EquirectangularReflectionMapping
    scene.environment = envTexture

    // Create morphing liquid cloud blobs
    const blobs: THREE.Mesh[] = []
    const blobCount = 6
    
    const greyShades = [
      0x808080, // Medium grey
      0x606060, // Dark grey
      0x404040, // Darker grey
      0x707070, // Light medium grey
      0x505050, // Dark medium grey
      0x909090  // Light grey
    ]
    
    for (let i = 0; i < blobCount; i++) {
      // Create irregular cloud-like geometry
      const geometry = new THREE.SphereGeometry(3 + Math.random() * 4, 32, 16)
      
      // Add noise to vertices for cloud-like irregularity
      const positions = geometry.attributes.position.array as Float32Array
      const originalPositions = positions.slice()
      
      // Deform geometry to look more cloud-like
      for (let j = 0; j < positions.length; j += 3) {
        const vertex = new THREE.Vector3(
          positions[j],
          positions[j + 1],
          positions[j + 2]
        )
        
        // Add initial noise for cloud shape
        const noise = (Math.random() - 0.5) * 0.8
        vertex.multiplyScalar(1 + noise)
        
        positions[j] = vertex.x
        positions[j + 1] = vertex.y
        positions[j + 2] = vertex.z
      }
      
      geometry.attributes.position.needsUpdate = true
      geometry.computeVertexNormals()
      
      // Store original positions for morphing
      geometry.userData = {
        originalPositions: positions.slice(),
        morphSpeed: 0.0008 + Math.random() * 0.0012,
        morphIntensity: 0.4 + Math.random() * 0.6,
        noiseOffset: Math.random() * 100
      }
      
      const material = createCloudMaterial(
        greyShades[i],
        0.6 + Math.random() * 0.3
      )
      
      const blob = new THREE.Mesh(geometry, material)
      
      // Position blobs in a more spread out formation
      blob.position.x = (Math.random() - 0.5) * 25
      blob.position.y = (Math.random() - 0.5) * 15
      blob.position.z = (Math.random() - 0.5) * 20
      
      // Store animation data
      blob.userData = {
        floatSpeed: 0.0005 + Math.random() * 0.001,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005
        },
        originalPosition: blob.position.clone(),
        scale: 0.7 + Math.random() * 0.6,
        driftSpeed: 0.0003 + Math.random() * 0.0007
      }
      
      scene.add(blob)
      blobs.push(blob)
    }

    // Create subtle atmospheric particles
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 100
    const particlePositions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 50
      particlePositions[i + 1] = (Math.random() - 0.5) * 30
      particlePositions[i + 2] = (Math.random() - 0.5) * 40
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x666666,
      size: 0.1,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    })
    
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Subtle lighting for dark atmosphere
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
    scene.add(ambientLight)
    
    // Soft directional lights
    const lights = [
      { color: 0x666666, position: [15, 15, 15], intensity: 0.4 },
      { color: 0x555555, position: [-15, 10, -10], intensity: 0.3 },
      { color: 0x777777, position: [0, -15, 10], intensity: 0.2 }
    ]
    
    lights.forEach(({ color, position, intensity }) => {
      const light = new THREE.DirectionalLight(color, intensity)
      light.position.set(position[0], position[1], position[2])
      scene.add(light)
    })
    
    // Subtle rim lighting
    const rimLight = new THREE.DirectionalLight(0x888888, 0.5)
    rimLight.position.set(-10, 5, -10)
    scene.add(rimLight)

    // Camera positioning
    camera.position.z = 20
    camera.position.y = 3

    // Smooth animation loop
    const animate = (time: number) => {
      frameRef.current = requestAnimationFrame(animate)
      
      // Animate cloud blobs
      blobs.forEach((blob, index) => {
        // Very slow rotation
        blob.rotation.x += blob.userData.rotationSpeed.x
        blob.rotation.y += blob.userData.rotationSpeed.y
        blob.rotation.z += blob.userData.rotationSpeed.z
        
        // Slow drifting motion like clouds
        const driftX = Math.sin(time * blob.userData.driftSpeed + index * 2) * 0.5
        const driftY = Math.cos(time * blob.userData.driftSpeed * 0.7 + index) * 0.3
        const driftZ = Math.sin(time * blob.userData.driftSpeed * 0.5 + index * 1.5) * 0.4
        
        blob.position.x = blob.userData.originalPosition.x + driftX
        blob.position.y = blob.userData.originalPosition.y + driftY
        blob.position.z = blob.userData.originalPosition.z + driftZ
        
        // Slow morphing geometry
        const geometry = blob.geometry as THREE.SphereGeometry
        const positions = geometry.attributes.position.array as Float32Array
        const originalPositions = geometry.userData.originalPositions
        
        for (let i = 0; i < positions.length; i += 3) {
          const vertex = new THREE.Vector3(
            originalPositions[i],
            originalPositions[i + 1],
            originalPositions[i + 2]
          )
          
          // Apply very slow, smooth morphing
          const noiseX = Math.sin(time * geometry.userData.morphSpeed + vertex.x * 0.3 + geometry.userData.noiseOffset) * 0.3
          const noiseY = Math.cos(time * geometry.userData.morphSpeed * 0.8 + vertex.y * 0.3 + geometry.userData.noiseOffset) * 0.3
          const noiseZ = Math.sin(time * geometry.userData.morphSpeed * 0.6 + vertex.z * 0.3 + geometry.userData.noiseOffset) * 0.3
          
          const morphFactor = (noiseX + noiseY + noiseZ) * geometry.userData.morphIntensity * 0.2
          vertex.multiplyScalar(1 + morphFactor)
          
          positions[i] = vertex.x
          positions[i + 1] = vertex.y
          positions[i + 2] = vertex.z
        }
        
        geometry.attributes.position.needsUpdate = true
        geometry.computeVertexNormals()
        
        // Subtle scale breathing
        const scale = blob.userData.scale + Math.sin(time * 0.0008 + index) * 0.05
        blob.scale.setScalar(scale)
        
        // Subtle iridescence changes
        const material = blob.material as THREE.MeshPhysicalMaterial
        material.iridescenceThicknessRange = [
          50 + Math.sin(time * 0.0005 + index) * 20,
          200 + Math.cos(time * 0.0007 + index) * 50
        ]
        
        // Subtle opacity changes for breathing effect
        material.opacity = (0.6 + Math.sin(time * 0.0006 + index) * 0.1) * (0.6 + Math.random() * 0.3)
      })
      
      // Animate particles
      const particlePositions = particles.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particlePositions.length; i += 3) {
        particlePositions[i + 1] += Math.sin(time * 0.0003 + i) * 0.002
      }
      particles.geometry.attributes.position.needsUpdate = true
      particles.rotation.y += 0.0002
      
      // Very gentle camera movement
      camera.position.x = Math.sin(time * 0.0002) * 1
      camera.position.y = 3 + Math.cos(time * 0.00015) * 0.5
      camera.lookAt(0, 0, 0)
      
      renderer.render(scene, camera)
    }
    
    animate(0)

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      envTexture.dispose()
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Liquid Background */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(circle at center, #0f0f0f 0%, #000000 100%)' }}
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            variants={itemVariants}
          >
            <span className="text-gray-400">
              Aion AI
            </span>
            <br />
            <span className="text-white/90">
              The Real-Time Security Layer for Web3
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-3xl text-white/80 mb-6 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Aion AI protects users before they click, connect, or sign.
          </motion.p>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/70 mb-12 max-w-5xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Our Telegram-first, AI-powered bots detect malicious contracts, phishing links, wallet drainers and scam infrastructure before they cause damage.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.button 
              className="group relative bg-transparent border border-gray-500 text-gray-400 px-4 py-2.5 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-lg font-medium sm:font-semibold backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(107, 114, 128)",
                color: "rgb(156, 163, 175)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                Buy $Aion
              </span>
            </motion.button>
            
            <motion.button 
              className="group relative bg-transparent border border-gray-500 text-gray-400 px-4 py-2.5 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-lg font-medium sm:font-semibold backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(107, 114, 128)",
                color: "rgb(156, 163, 175)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                🤖 Try Aion Bot
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}