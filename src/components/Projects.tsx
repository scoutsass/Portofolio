import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'ui' | 'other';

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

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX' },
    { id: 'other', name: 'Other' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Here are some of my notable projects. Each one presented unique challenges 
            that helped me grow as a developer.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category.id 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => openProject(project)} 
            />
          ))}
        </div>
        
        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-dark-600 dark:text-dark-300 mb-4">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={closeProject} />
      )}
    </section>
  );
};

export default Projects;