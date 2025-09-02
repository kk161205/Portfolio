import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  // All skills displayed together for immediate visibility
  const allSkills = [
    // Programming Languages
    "Python", "Java", "JavaScript", "HTML", "CSS",
    
    // Backend & APIs
    "Node.js", "Django", "FastAPI", "Git", "GitHub",
    
    // Frontend & Web
    "React",
    
    // AI/ML & RAG
    "LangChain", "Retrieval-Augmented Generation (RAG)", "Google Generative AI Embeddings", 
    "Prompt Engineering", "Agentic AI",
    
    // Databases & Vector Search
    "MongoDB", "SQL", "Pinecone", "Vector Databases",
    
    // Data Processing
    "Document Processing & OCR", "Text Chunking", "Parallel & Async Processing",
    
    // System Design
    "Modular System Design", "Production-Ready Pipelines", "Scalable Architectures"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-brand bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent, scalable systems from conception to production.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto"
          >
            {allSkills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-card shadow-card hover:shadow-glow 
                            border border-border hover:border-primary transition-all duration-300
                            hover:bg-primary hover:text-primary-foreground cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating background elements */}
          <div className="absolute top-1/2 -left-20 w-40 h-40 bg-gradient-glow blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-gradient-glow blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;