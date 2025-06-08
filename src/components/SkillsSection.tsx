
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    { name: "Power Apps", color: "bg-gradient-to-r from-purple-400 to-purple-600" },
    { name: "Power Automate", color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "SharePoint Online", color: "bg-gradient-to-r from-orange-400 to-orange-600" },
    { name: "Python", color: "bg-gradient-to-r from-green-400 to-green-600" },
    { name: "SQL", color: "bg-gradient-to-r from-red-400 to-red-600" },
    { name: "Pandas", color: "bg-gradient-to-r from-pink-400 to-pink-600" },
    { name: "Numpy", color: "bg-gradient-to-r from-indigo-400 to-indigo-600" },
    { name: "Gen AI", color: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
    { name: "Machine Learning", color: "bg-gradient-to-r from-teal-400 to-teal-600" },
    { name: "Deep Learning", color: "bg-gradient-to-r from-cyan-400 to-cyan-600" },
    { name: "Azure", color: "bg-gradient-to-r from-blue-500 to-blue-700" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for building innovative solutions and creating engaging content
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`${skill.color} text-white px-4 py-3 rounded-xl text-center font-medium text-sm shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                      <span className="relative z-10">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skill Categories */}
              <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Power Platform</h3>
                  <p className="text-muted-foreground text-sm">Building scalable business applications with Power Apps and Power Automate</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">AI & Machine Learning</h3>
                  <p className="text-muted-foreground text-sm">Developing intelligent solutions with Gen AI, ML, and deep learning techniques</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Data Science</h3>
                  <p className="text-muted-foreground text-sm">Analyzing and visualizing data using Python, Pandas, and modern tools</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
