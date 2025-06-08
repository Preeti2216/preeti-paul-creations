
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Preeti Paul working" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-secondary rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-accent rounded-full -z-10"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Passionate Technology Enthusiast & Creator
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Currently working as an <strong className="text-primary">Analyst/Software Engineer at Capgemini</strong>, 
                    I bring 1.5+ years of hands-on experience in building innovative solutions using cutting-edge technologies.
                  </p>
                  
                  <p>
                    My journey spans across <strong className="text-primary">Power Platform, Generative AI, Python, and Machine Learning</strong>. 
                    I'm passionate about creating smart solutions that solve real-world problems and make technology accessible to everyone.
                  </p>
                  
                  <p>
                    As a <strong className="text-primary">content creator on YouTube</strong> with over 10,000 subscribers on 
                    "All About Preeti", I share my knowledge and experiences in technology, helping others learn and grow in their tech journeys.
                  </p>
                  
                  <p>
                    When I'm not coding or creating content, you'll find me exploring the latest trends in AI, 
                    working on personal projects, or planning my next video to help fellow developers and tech enthusiasts.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1.5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">YouTube Subscribers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
