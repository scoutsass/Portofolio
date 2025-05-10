import React, { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

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

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling on body when modal is open
    document.body.classList.add('overflow-hidden');
    
    // Add event listener for escape key
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    // Cleanup function
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  // Handle click outside modal
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClickOutside}
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-dark-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 md:p-6 bg-white dark:bg-dark-800 border-b border-dark-200 dark:border-dark-700">
          <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white">{project.title}</h3>
          <button 
            onClick={onClose}
            className="p-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white rounded-full bg-dark-100 dark:bg-dark-700"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 md:h-80 object-cover object-top rounded-lg mb-6" 
          />
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">Project Overview</h4>
            <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed whitespace-pre-line">
              {project.details}
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">Key Features</h4>
            <ul className="list-disc list-inside space-y-1 text-dark-600 dark:text-dark-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium flex items-center justify-center transition-colors"
              >
                View Live Demo
                <ExternalLink className="ml-2" size={18} />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-dark-300 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-400 rounded-lg font-medium flex items-center justify-center transition-all"
              >
                View Source Code
                <Github className="ml-2" size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;