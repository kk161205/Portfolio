import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-glow blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-brand bg-clip-text text-transparent leading-tight">
              Kushagra Kulshrestha
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
              AI/ML Developer & Backend Systems Specialist
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting intelligent systems with cutting-edge AI/ML technologies. 
            Specializing in Retrieval-Augmented Generation, scalable backend APIs, 
            and production-ready machine learning pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-brand hover:shadow-glow transition-all duration-300"
              size="lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("/Kushagra_Kulshrestha_CV.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/kk161205" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kushagra-kulshrestha-b68630271/" },
              { icon: Mail, href: "mailto:kulshrestha.kushagrak1512@gmail.com" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card shadow-card hover:shadow-glow transition-all duration-300 text-muted-foreground hover:text-primary"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;