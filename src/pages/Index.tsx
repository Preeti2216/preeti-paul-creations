
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContentCreatorSection from "@/components/ContentCreatorSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContentCreatorSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-display font-medium mb-2">
            Preeti Paul
          </p>
          <p className="text-purple-200 mb-4">
            Building smart solutions with creativity 🚀
          </p>
          <p className="text-sm text-purple-300">
            © 2024 Preeti Paul. Made with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
