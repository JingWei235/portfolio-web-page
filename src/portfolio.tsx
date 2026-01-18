import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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
      title: "Wizard's Portal - Project Lead",
      description: "Simple top down shooter made in C",
      tech: ["C", "OpenGL"],
      link: "#",
    },
    {
      title: "Blop 'n Bounce - Engine Programmer",
      description: "2D physics-based platformer",
      tech: ["C++", "OpenGL", "GLSL"],
      link: "#",
    },
    {
      title: "Kopi diner dash game - Graphics Programmer",
      description:
        "Time management game set in a kopitiam, cook food and serve customers!",
      tech: ["C++", "OpenGL"],
      link: "#",
    },
    {
      title: "BSP Project",
      description: "BSP tree implementation and rendering in OpenGL",
      tech: ["C++", "OpenGL"],
      link: "#",
    },
  ];
  const skills = [
    {
      category: "Graphics & Engine Development",
      items: [
        "C++",
        "Real-Time Rendering",
        "Engine Architecture",
        "Performance Optimization",
      ],
    },
    {
      category: "Systems Programming",
      items: ["C++", "STL", "Multithreading", "Memory Management"],
    },
    {
      category: "Web & Tooling",
      items: ["TypeScript", "React", "HTML/CSS", "Web-Based Visualization"],
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-linear-to-br from-stone-900 via-amber-900 to-stone-900 text-stone-50">
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
            {["home", "about", "projects"].map((section) => (
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
          {/* <div className="hidden md:flex space-x-8">
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
          </div> */}

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
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
