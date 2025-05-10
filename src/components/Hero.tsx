import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 pb-20 md:pb-24 min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-dark-900 dark:text-white animate-[fadeIn_1s_ease-in]">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-dark-700 dark:text-dark-200">
            Full-stack Developer
          </h2>
          <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-8 leading-relaxed">
            I build exceptional digital experiences with modern technologies.
            Specialized in <span className="text-primary-600 dark:text-primary-400">React</span>,{' '}
            <span className="text-secondary-600 dark:text-secondary-400">Node.js</span>, and{' '}
            <span className="text-accent-600 dark:text-accent-400">Mobile Development</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium flex items-center transition-all"
            >
              View Projects
              <ExternalLink className="ml-2" size={18} />
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-3 border border-dark-300 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-400 rounded-lg font-medium flex items-center transition-all"
            >
              Contact Me
            </ScrollLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary-400/20 dark:bg-secondary-600/10 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="p-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;