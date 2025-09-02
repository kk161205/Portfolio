import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="font-bold text-xl bg-gradient-brand bg-clip-text text-transparent mb-2 leading-relaxed py-1">
                Kushagra Kulshrestha
              </div>
              <p className="text-muted-foreground">
                AI/ML Developer & Backend Systems Specialist
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/kk161205", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kushagra-kulshrestha-b68630271/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kulshrestha.kushagrak1512@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground 
                           transition-all duration-300 hover:scale-110 text-muted-foreground"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {currentYear} Kushagra Kulshrestha. Built with 
              <Heart size={16} className="text-red-500 animate-pulse" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;