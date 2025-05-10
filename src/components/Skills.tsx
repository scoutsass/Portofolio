import React, { useState } from 'react';
import { skills } from '../data/skills';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'mobile' | 'tools';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'tools', name: 'Tools & DevOps' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies across the full stack to build modern, 
            scalable applications. Here are some of my core technical skills.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-white dark:bg-dark-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center"
            >
              <div className="flex justify-center items-center h-12 w-12 mb-3">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              <h3 className="text-dark-900 dark:text-white font-medium text-center">{skill.name}</h3>
              <div className="w-full bg-dark-200 dark:bg-dark-600 rounded-full h-1.5 mt-2">
                <div 
                  className="bg-primary-600 dark:bg-primary-500 h-1.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-xs text-dark-500 dark:text-dark-400 mt-1 text-center">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;