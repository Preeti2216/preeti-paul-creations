
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Play, Users, Eye } from "lucide-react";

const ContentCreatorSection = () => {
  return (
    <section id="content" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Content Creator
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and inspiring others through engaging video content about technology and coding
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left side - Video and stats */}
            <div className="animate-fade-in">
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Video embed placeholder */}
                  <div className="relative aspect-video bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center group cursor-pointer">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                        <Play className="h-8 w-8 ml-1" />
                      </div>
                      <p className="font-medium">Latest Video from All About Preeti</p>
                      <p className="text-sm opacity-90">Click to watch on YouTube</p>
                    </div>
                  </div>

                  {/* Channel stats */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="h-5 w-5 text-red-500 mr-2" />
                          <span className="text-2xl font-bold text-red-600">10K+</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Subscribers</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Eye className="h-5 w-5 text-red-500 mr-2" />
                          <span className="text-2xl font-bold text-red-600">1.5M+</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Total Views</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Content description */}
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Youtube className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-foreground">All About Preeti</h3>
                    <p className="text-muted-foreground">YouTube Channel</p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to my YouTube channel where I share my passion for technology, coding, and professional growth!
                    With over <strong className="text-red-600">10,000 subscribers</strong> and growing, I create content that helps
                    developers and tech enthusiasts on their journey.
                  </p>

                  <p>
                    My videos cover a wide range of topics including:
                  </p>

                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Power Platform tutorials and best practices
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      AI and Machine Learning concepts explained simply
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Career advice for aspiring software engineers
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Project walkthroughs and coding challenges
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <Button
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0 transform hover:scale-105 transition-all"
                    onClick={() => window.open('https://www.youtube.com/@allaboutpreeti', '_blank')}
                  >
                    <Youtube className="mr-2 h-5 w-5" />
                    Subscribe on YouTube
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreatorSection;
