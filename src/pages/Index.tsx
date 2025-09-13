import Navigation from "@/components/Navigation";
import CampusHero from "@/components/CampusHero";
import InformationModules from "@/components/InformationModules";
import ChatInterface from "@/components/ChatInterface";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  // Add smooth scrolling behavior
  const scrollBehavior = {
    scrollBehavior: 'smooth' as const
  };

  return (
    <div className="min-h-screen" style={scrollBehavior}>
      <Navigation />
      <CampusHero />
      <InformationModules />
      <ChatInterface />
      <ContactSection />
    </div>
  );
};

export default Index;
