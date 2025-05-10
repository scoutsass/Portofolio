import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demo?: string;
  github?: string;
  details: string;
  features: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover object-top transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-0 right-0 p-2 bg-dark-900/70 rounded-bl-lg text-xs text-white">
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white">{project.title}</h3>
        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-dark-100 dark:bg-dark-600 text-dark-700 dark:text-dark-300 rounded-md text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <button
            onClick={onClick}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            View Details
          </button>
          
          <div className="flex space-x-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;