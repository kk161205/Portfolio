import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "kulshrestha.kushagrak1512@gmail.com",
      href: "mailto:kulshrestha.kushagrak1512@gmail.com",
      description: "Best for detailed inquiries"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/kushagra-kulshrestha-b68630271/",
      description: "Professional networking"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/kk161205",
      description: "Open source contributions"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      value: "Schedule a call",
      href: "tel:+919084696026",
      description: "Quick discussions"
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
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-glow blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-glow blur-3xl opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-brand bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next AI/ML project or backend system? I'd love to hear about your ideas and explore how we can bring them to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className="h-full shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer bg-card/50 backdrop-blur-sm"
                  onClick={() => window.location.href = method.href}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Card className="p-8 shadow-card bg-card/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Available for remote opportunities worldwide</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-brand hover:shadow-glow transition-all duration-300"
                    onClick={() => window.location.href = "mailto:kulshrestha.kushagrak1512@gmail.com"}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button> 
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;