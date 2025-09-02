import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl bg-gradient-brand bg-clip-text text-transparent leading-relaxed py-1">
          Kushagra Kulshrestha
        </div>
        
        <div className="hidden md:flex space-x-8">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground hover:text-primary transition-colors duration-200 capitalize font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="ml-4"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </Button>
      </nav>
    </header>
  );
};

export default Header;