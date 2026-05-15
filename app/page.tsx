import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Portfolio from '@/components/portfolio'
import Services from '@/components/services'
import Process from '@/components/process'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <Services />
      <Process />
    
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
