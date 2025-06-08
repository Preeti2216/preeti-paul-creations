
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Youtube, Instagram, Mail, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project idea, collaboration opportunity, or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-semibold text-foreground flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-primary" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="border-border focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          className="border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello!"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-32 border-border focus:border-primary"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 transform hover:scale-105 transition-all"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-6">

              {/* Social Links Card */}
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-display font-semibold text-foreground">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://www.youtube.com/@allaboutpreeti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-105"
                  >
                    <Youtube className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">YouTube</div>
                      <div className="text-sm opacity-90">10K+ Subscribers</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/paul-preeti/"
                    target="_blank"
                    className="flex items-center p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm opacity-90">Professional Network</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Preeti2216"
                    target="_blank"
                    className="flex items-center p-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black transition-all transform hover:scale-105"
                  >
                    <Github className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm opacity-90">Code Repository</div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/preetipaul22/"
                    target="_blank"
                    className="flex items-center p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    <Instagram className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-sm opacity-90">Behind the scenes</div>
                    </div>
                  </a>
                </CardContent>
              </Card>


            </div>
          </div>
          {/* Quick Info Card */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl mt-6">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Ready to collaborate?</h3>
              <p className="text-muted-foreground text-sm">
                I'm always open to discussing new opportunities, innovative projects, and creative collaborations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
