import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (section: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 300);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["React", "Firebase", "Tailwind"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with interactive maps",
      tech: ["React", "API Integration", "Chart.js"],
      link: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] },
  ];

  return (
    <div className="fixed w-full min-h-screen bg-linear-to-br from-stone-900 via-amber-900 to-stone-900 text-stone-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-stone-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Portfolio
          </div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => navigateToSection(section)}
                className={`capitalize transition-all duration-300 bg-transparent ${
                  activeSection === section
                    ? "text-amber-400 scale-110"
                    : "text-stone-400 hover:text-amber-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-stone-900/95 backdrop-blur-sm animate-fade-in">
            {["home", "about", "projects", "contact"].map((section, idx) => (
              <button
                key={section}
                onClick={() => {
                  navigateToSection(section);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-amber-900/30 transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {activeSection === "home" && (
        <HomeSection
          isTransitioning={isTransitioning}
          navigateToSection={navigateToSection}
        />
      )}
      {activeSection === "about" && (
        <AboutSection isTransitioning={isTransitioning} skills={skills} />
      )}
      {activeSection === "projects" && (
        <ProjectsSection
          isTransitioning={isTransitioning}
          projects={projects}
        />
      )}
      {activeSection === "contact" && (
        <ContactSection isTransitioning={isTransitioning} />
      )}
    </div>
  );
};

export default Portfolio;
