import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";

interface HomeSectionProps {
  isTransitioning: boolean;
  navigateToSection: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  isTransitioning,
  navigateToSection,
}) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-6">
        <div className="inline-block p-4 bg-amber-500/20 rounded-full mb-4 animate-bounce-slow">
          <FiCode size={48} className="text-amber-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold animate-slide-up">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Ong Jing Wei
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto animate-slide-up opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          Graphics Programmer & Game Engine Developer
        </p>
        <div
          className="flex justify-center space-x-4 pt-4 animate-slide-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="https://github.com/JingWei235"
            title="GitHub"
            className="p-3 bg-stone-800 rounded-full hover:bg-amber-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <FiGithub size={24} />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/jing-wei-ong"
            className="p-3 bg-stone-800 rounded-full hover:bg-amber-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:27jingweiong27@email.com?subject=Portfolio%20Inquiry&body=Hi%2C%0A%0AI%20came%20across%20your%20portfolio..."
            aria-label="Send email"
            className="p-3 bg-stone-800 rounded-full hover:bg-amber-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <FiMail size={24} />
          </a>
        </div>
        <button
          onClick={() => navigateToSection("projects")}
          className="mt-8 px-8 py-3 bg-linear-to-r from-amber-600 to-orange-600 rounded-full font-semibold hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 animate-slide-up opacity-0"
          style={{ animationDelay: "300ms" }}
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
