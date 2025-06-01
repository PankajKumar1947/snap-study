"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HighlightsSection from "@/components/highlights-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import BackgroundEffects from "@/components/background-effects"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-violet-950 relative overflow-hidden">
      <BackgroundEffects />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}
