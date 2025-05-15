import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ValuesSection from "@/components/values-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import FloatingCtaButton from "@/components/floating-cta-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <ProjectsSection />
      <ContactSection />
      <FloatingCtaButton />
    </main>
  )
}
