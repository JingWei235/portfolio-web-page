import React from "react";
import { FiUser } from "react-icons/fi";

interface AboutSectionProps {
  isTransitioning: boolean;
  skills: Array<{
    category: string;
    items: string[];
  }>;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  isTransitioning,
  skills,
}) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="max-w-4xl space-y-8">
        <div className="flex items-center space-x-3 mb-6 animate-slide-right">
          <FiUser className="text-amber-400" size={32} />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>

        <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 animate-slide-up hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
          <p className="text-lg text-stone-300 leading-relaxed mb-6">
            I’m a graphics programmer and game engine developer, passionate
            about real-time rendering, performance-critical systems, and
            building interactive 3D environments. I enjoy working close to the
            metal, tackling tough technical challenges, and creating systems
            that are both efficient and expressive.
          </p>
          <p className="text-lg text-stone-300 leading-relaxed">
            I’ve spent years working with C++ and graphics programming,
            constantly learning and exploring new technologies along the way.
            I’m driven by curiosity, problem-solving, and the satisfaction of
            turning complex concepts into real-time experiences that work and
            feel great.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {skills.map((skillSet, idx) => (
            <div
              key={idx}
              className=" opacity-0 bg-stone-800/50 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 animate-slide-up hover:border-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-amber-400 mb-4">
                {skillSet.category}
              </h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, i) => (
                  <li
                    key={i}
                    className="text-stone-300 hover:text-amber-300 transition-colors duration-200 hover:translate-x-2"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
