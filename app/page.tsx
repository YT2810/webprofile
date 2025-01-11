import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import TechnologiesSection from './components/TechnologiesSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection/>
      <ContactSection />
    </main>
  )
}

