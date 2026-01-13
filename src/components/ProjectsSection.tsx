import React from "react";
import { Briefcase, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProjectsSectionProps {
  isTransitioning: boolean;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  isTransitioning,
  projects,
}) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="max-w-6xl w-full">
        <div className="flex items-center space-x-3 mb-12 animate-slide-right">
          <Briefcase className="text-amber-400" size={32} />
          <h2 className="text-4xl font-bold">My Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="opacity-0 bg-stone-800/50 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 hover:border-amber-400 transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-amber-500/30 group animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-stone-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-amber-500/20 rounded-full text-sm text-amber-300 hover:bg-amber-500/40 transition-all duration-300 hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-2"
              >
                <span>View Project</span>
                <ExternalLink
                  size={16}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
