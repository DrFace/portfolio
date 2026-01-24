"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Cursor } from "@/components/crsor"
import ScrollProgressBar from "@/components/scrollprogress";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Cursor/>
      <Navigation />
      <ScrollProgressBar />
      <main>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
