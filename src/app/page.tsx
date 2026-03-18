import { Sidebar } from "@/components/organisms/Sidebar/Sidebar";
import { HeroSection } from "@/components/organisms/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection/ProjectsSection";
import { SkillsSection } from "@/components/organisms/SkillsSection/SkillsSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection/ExperienceSection";
import { CertsSection } from "@/components/organisms/CertsSection/CertsSection";
import { ContactSection } from "@/components/organisms/ContactSection/ContactSection";
import { Footer } from "@/components/organisms/Footer/Footer";
import "./page.css";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main id="main-content" className="main-content">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CertsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
