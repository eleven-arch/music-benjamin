import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import EngineeringImpact from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Expertise from "./components/homepage/expertise";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Expertise />
      <Experience />
      <Skills />
      <Projects />
      <EngineeringImpact />
      <ContactSection />
    </div>
  )
};
