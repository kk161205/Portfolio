import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, FileText, Users, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LEXORA : AI RAG Pipeline",
      description: "A production-ready Retrieval-Augmented Generation system built with LangChain, Gemini embeddings, and Pinecone. Features modular pipeline design with extraction, embedding, retrieval, and answering components. Optimized with parallel and async processing for enterprise-scale deployment.",
      icon: Brain,
      tech: ["LangChain", "FastAPI", "Pinecone", "Gemini", "Python", "Async Processing"],
      highlights: ["Production-Ready", "Modular Design", "Optimized Performance"],
      links: {
        github: "https://github.com/kk161205/Lexora",
        demo: "#"
      }
    },
    {
      title: "Orion - Job Finder App",
      description: "Full-stack web application designed to intelligently match job seekers with opportunities and ATS scores on resumes, gives roadmaps as well as supporting study materials. Integrates sophisticated backend logic with modern frontend UI, featuring real-time matching algorithms and user-friendly interface design.",
      icon: Users,
      tech: ["React", "Node.js", "Database Design", "API Integration", "UI/UX","Prompt Engineering"],
      highlights: ["Full-Stack", "Real-time Matching", "Modern UI","GenAI"],
      links: {
        github: "https://github.com/kk161205/Orion",
        demo: "#"
      }
    },
    {
      title: "IMPACT AI",
      description: "an intelligent platform that leverages advanced AI to transform data into actionable insights. It empowers users with automation, accuracy, and decision support for real-world impact.",
      icon: FileText,
      tech: ["Python", "Google-ADK", "Gemini", "React", "Fast API"],
      highlights: ["Multi-Format Support", "Post Generation", "Image Generation"],
      links: {
        github: "https://github.com/kk161205/IMPACT-AI",
        demo: "#"
      }
    },
    {
      title: "PAGEGENIE",
      description: "Collection of intelligent AI agents including a static web page generator. Demonstrates advanced prompt engineering, autonomous decision-making, and integration of multiple AI services for content creation workflows.",
      icon: Zap,
      tech: ["Agentic AI", "Prompt Engineering", "Content Generation", "Automation"],
      highlights: ["Autonomous Agents", "Content Creation", "AI Integration"],
      links: {
        github: "https://github.com/kk161205/PAGEGENIE",
        demo: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={projectVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-brand bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions in AI/ML, backend systems, and full-stack development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={projectVariants}>
                <Card className="h-full shadow-card hover:shadow-glow transition-all duration-300 group bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.links.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-brand hover:shadow-glow"
                        onClick={() => window.open(project.links.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;