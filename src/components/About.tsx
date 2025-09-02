import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Server, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Advanced knowledge in RAG systems, embeddings, and vector databases"
    },
    {
      icon: Server,
      title: "Backend Systems",
      description: "Scalable APIs, microservices, and production-ready architectures"
    },
    {
      icon: Code2,
      title: "Full-Stack Skills",
      description: "From Python backends to modern React frontends"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimized systems with parallel processing and async operations"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-brand bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer focused on building intelligent, scalable systems that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                My Journey in AI & Development
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
              I'm Kushagra Kulshrestha, an AI/ML and backend-focused developer with a deep passion for creating intelligent systems 
              that bridge the gap between cutting-edge research and practical applications. My expertise lies 
              in building Retrieval-Augmented Generation (RAG) systems, scalable backend architectures, and 
              production-ready machine learning pipelines.
                </p>
                <p>
                  With hands-on experience in technologies like LangChain, FastAPI, and various vector databases, 
                  I specialize in transforming complex AI concepts into robust, maintainable systems. I believe 
                  in writing clean, efficient code that not only works but scales gracefully under real-world conditions.
                </p>
                <p>
                  Whether it's implementing document processing pipelines with OCR capabilities, building agentic AI 
                  systems, or designing modular architectures for complex workflows, I approach each project with 
                  attention to detail and a focus on delivering value through technology.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all duration-300 group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{title}</h4>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;