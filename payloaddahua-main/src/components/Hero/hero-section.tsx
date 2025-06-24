'use client'

import { Homepage } from '@/payload-types'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const HeroSection = ({ homepage }: { homepage: Homepage }) => {
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Add this effect to help debug video loading issues
  useEffect(() => {
    if (videoRef.current) {
      // Listen for errors
      const handleError = () => {
        console.error('Video failed to load')
        setVideoError(true)
      }
      
      // Listen for successful load
      const handleLoad = () => console.log('Video loaded successfully')
      
      videoRef.current.addEventListener('error', handleError)
      videoRef.current.addEventListener('loadeddata', handleLoad)
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('error', handleError)
          videoRef.current.removeEventListener('loadeddata', handleLoad)
        }
      }
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video background with improved error handling */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          {/* Try multiple paths */}
          <source src="/dahua-intro.mp4" type="video/mp4" />
          <source src="dahua-intro.mp4" type="video/mp4" />
          <source src="/videos/dahua-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // More appealing fallback if video errors
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"
          style={{
            backgroundImage: "url('/dahua.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        ></div>
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Next-Gen
            <span className="text-red-600 block">Security Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Protecting what matters most with cutting-edge technology and unmatched reliability.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="/products" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-md text-lg font-medium transition-all"
            >
              Explore Products
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-md text-lg font-medium transition-all"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator with simpler animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7] 
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" 
        }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection