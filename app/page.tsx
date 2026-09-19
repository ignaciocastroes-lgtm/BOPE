import { SiteNavbar } from '@/components/site-navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TechTeaser } from '@/components/tech-teaser'
import { LinkedInSection } from '@/components/linkedin-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { PromoModal } from '@/components/promo-modal'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <HeroSection />
      <ServicesSection />
      <TechTeaser />
      <LinkedInSection />
      <ContactSection />
      <SiteFooter />
      <PromoModal />
    </main>
  )
}
