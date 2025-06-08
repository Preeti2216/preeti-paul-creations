
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Questionnaire Application",
      description: "A comprehensive multi-screen application built with Power Apps, seamlessly connected to SharePoint Online for data management and user interaction.",
      tech: ["Power Apps", "SharePoint Online", "Power Automate"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "bg-gradient-to-br from-purple-100 to-pink-100"
    },
    {
      title: "AI-Powered Video Summarizer",
      description: "An intelligent system that generates concise text summaries from video content using advanced Large Language Models and natural language processing.",
      tech: ["Python", "LLMs", "Gen AI", "NLP"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "bg-gradient-to-br from-blue-100 to-cyan-100"
    },
    {
      title: "AI-Driven Recommendation System",
      description: "A sophisticated recommendation engine powered by Generative AI and Neo4j graph database, delivering personalized suggestions with high accuracy.",
      tech: ["Gen AI", "Neo4j", "Python", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "bg-gradient-to-br from-green-100 to-emerald-100"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Project Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase the power of modern technology and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-48 ${project.gradient} relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 hover:bg-primary hover:text-white transition-colors">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90 border-0">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
