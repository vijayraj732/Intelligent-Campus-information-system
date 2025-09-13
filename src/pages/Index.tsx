import Navigation from "@/components/Navigation";
import CampusHero from "@/components/CampusHero";
import InformationModules from "@/components/InformationModules";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CampusHero />
      <InformationModules />
      <ChatInterface />
    </div>
  );
};

export default Index;
