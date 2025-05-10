import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              <span>Portfolio<span className="text-accent-500">.</span></span>
            </h3>
            <p className="text-dark-300 max-w-xs">
              Building extraordinary digital experiences with clean code and sleek design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-dark-300 hover:text-white cursor-pointer transition-colors"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-dark-300 hover:text-white cursor-pointer transition-colors"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-dark-300 hover:text-white cursor-pointer transition-colors"
                  >
                    Skills
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-dark-300 hover:text-white cursor-pointer transition-colors"
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-dark-300 hover:text-white cursor-pointer transition-colors"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-dark-300 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark-300 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark-300 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark-300 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="p-3 bg-dark-800 hover:bg-primary-900 text-dark-300 hover:text-white rounded-full transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;