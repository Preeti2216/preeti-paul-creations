
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                Preeti Paul
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-pink-100 mb-8 font-medium">
              Building smart solutions with creativity
            </p>
            
            <p className="text-lg text-pink-50 mb-10 max-w-2xl">
              Software Engineer at Capgemini | YouTuber with 10,000+ subscribers | 
              Passionate about Gen AI, Machine Learning, and creating content that inspires
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 animate-glow"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://www.youtube.com/@allaboutpreeti', '_blank')}
              >
                <Youtube className="mr-2 h-5 w-5" />
                Watch on YouTube
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <Github className="h-6 w-6 text-white" />
              </a>
              <a href="https://www.youtube.com/@allaboutpreeti" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <Youtube className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/30 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Preeti Paul" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
