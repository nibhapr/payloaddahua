'use client'

import * as React from 'react'
import Image from 'next/image'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Homepage } from '@/payload-types'

export default function AnimatedHeroSlider({ homepage }: { homepage: Homepage }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying] = useState(true)

  const slides = (homepage.sliderImage || []).map((slide) => ({
    image: {
      url: typeof slide.image === 'object' && 'url' in slide.image ? slide.image.url : '',
    },
    link: (slide as { link?: string }).link || '',
    id: slide.id || null,
  }))

  useEffect(() => {
    const timer = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <section className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex]!.image.url || '/fallback.jpg'}
            alt={`slide${slides[currentIndex]!.id}`}
            fill
            className="object-cover"
            priority
          />
          <div className=" inset-0 bg-black bg-opacity-40" />
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-y-64 md:gap-y-0 text-center text-background dark:text-primary p-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, staggerChildren: 0.5 }}
              className="md:text-7xl text-2xl font-bold mb-4"
            >
              {slides[currentIndex]!.id}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, staggerChildren: 0.5 }}
              className="text-2xl max-w-2xl"
            >
              {slides[currentIndex]!.link}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
