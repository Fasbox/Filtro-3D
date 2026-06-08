import Navbar from './Navbar'
import HeroSection from './HeroSection'
import InteractiveFilterSection from './InteractiveFilterSection'
import HowItWorks from './HowItWorks'
import ComponentsGrid from './ComponentsGrid'
import MaintenanceSection from './MaintenanceSection'
import BenefitsSection from './BenefitsSection'
import Footer from './Footer'
import ProjectOverviewSection from './ProjectOverviewSection'

export default function LandingPage() {
  return (
    <div className="bg-[#FAF7EF] text-[#1E2A24]">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ProjectOverviewSection />
        <InteractiveFilterSection />
        <HowItWorks />
        <ComponentsGrid />
        <MaintenanceSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  )
}
