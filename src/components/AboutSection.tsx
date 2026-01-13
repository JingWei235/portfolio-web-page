import React from "react";
import { User } from "lucide-react";

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
          <User className="text-amber-400" size={32} />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>

        <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 animate-slide-up hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
          <p className="text-lg text-stone-300 leading-relaxed mb-6">
            I'm a passionate full-stack developer with expertise in building
            modern web applications. I love creating elegant solutions to
            complex problems and am always eager to learn new technologies.
          </p>
          <p className="text-lg text-stone-300 leading-relaxed">
            With several years of experience in web development, I specialize in
            React, Node.js, and cloud technologies. I'm driven by the challenge
            of turning ideas into reality through clean, efficient code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {skills.map((skillSet, idx) => (
            <div
              key={idx}
              className="bg-stone-800/50 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 animate-slide-up hover:border-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20"
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
