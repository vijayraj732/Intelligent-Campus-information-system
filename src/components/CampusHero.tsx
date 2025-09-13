import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const CampusHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={campusHero} 
          alt="Modern university campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 mb-6">
            <Sparkles className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm font-medium text-primary-foreground">
              AI-Powered Campus Assistant
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Intelligent
            <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              Campus Companion
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Get instant answers about courses, schedules, campus facilities, events, and more. 
            Your AI assistant is here to help you navigate university life with ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Chatting
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-background/30 bg-background/10 backdrop-blur-sm text-primary-foreground hover:bg-background/20 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/80">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">1000+</div>
              <div className="text-sm text-primary-foreground/80">Topics Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">99%</div>
              <div className="text-sm text-primary-foreground/80">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CampusHero;