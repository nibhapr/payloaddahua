import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import HeroSection from '@/components/Hero/hero-section'
import ProductGrid from '@/components/ProductShowcase/product-grid'
import FeatureBlocks from '@/components/Features/feature-blocks'
import TestimonialSlider from '@/components/Testimonials/testimonial-slider'
import CTASection from '@/components/CTA/cta-section'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  
  const HomePage = await payload.findGlobal({
    slug: 'homepage',
    depth: 1,
    overrideAccess: false,
  })

  return (
    <div className="relative w-full overflow-hidden">
      {/* Full-height hero with video background */}
      <HeroSection homepage={HomePage} />
      
      {/* Products showcase with category filtering */}
      <ProductGrid />
      
      {/* Features section with animated stats */}
      <FeatureBlocks />
      
      {/* Dynamic testimonials slider */}
      <TestimonialSlider />
      
      {/* Bold CTA section */}
      <CTASection />
    </div>
  )
}
